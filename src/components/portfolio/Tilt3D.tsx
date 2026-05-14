import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode, MouseEvent, TouchEvent } from "react";

export function Tilt3D({
  children,
  className = "",
  max = 8,
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), {
    stiffness: 200,
    damping: 18,
  });

  const setFromPoint = (
    el: HTMLDivElement,
    clientX: number,
    clientY: number,
  ) => {
    const rect = el.getBoundingClientRect();
    x.set((clientX - rect.left) / rect.width - 0.5);
    y.set((clientY - rect.top) / rect.height - 0.5);
  };

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    setFromPoint(e.currentTarget, e.clientX, e.clientY);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (!isTouch) return;
    const t = e.touches[0];
    if (!t) return;
    setFromPoint(e.currentTarget, t.clientX, t.clientY);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isTouch) return;
    const t = e.touches[0];
    if (!t) return;
    setFromPoint(e.currentTarget, t.clientX, t.clientY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={reset}
      onTouchCancel={reset}
      whileHover={isTouch ? undefined : { scale }}
      whileTap={isTouch ? { scale } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        touchAction: "pan-y",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
