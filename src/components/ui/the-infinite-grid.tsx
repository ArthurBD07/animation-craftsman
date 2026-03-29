import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  useAnimationFrame,
  type MotionValue,
} from "motion/react";

interface InfiniteGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const InfiniteGrid: React.FC<InfiniteGridProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      {/* Base grid layer */}
      <div className="absolute inset-0">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} strokeColor="hsl(261 67% 30% / 0.35)" />
      </div>

      {/* Mouse-reactive grid layer */}
      <motion.div
        className="absolute inset-0"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} strokeColor="hsl(355 55% 47% / 0.5)" />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40" />
      </div>

      {children}
    </div>
  );
};

const GridPattern = ({
  offsetX,
  offsetY,
  strokeColor,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
  strokeColor: string;
}) => {
  const x = useTransform(offsetX, (v) => v);
  const y = useTransform(offsetY, (v) => v);

  return (
    <motion.svg className="absolute inset-0 w-full h-full" style={{ x, y }}>
      <defs>
        <pattern id={`grid-${strokeColor.replace(/[^a-z0-9]/gi, '')}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect
        x="-40"
        y="-40"
        width="calc(100% + 80px)"
        height="calc(100% + 80px)"
        fill={`url(#grid-${strokeColor.replace(/[^a-z0-9]/gi, '')})`}
      />
    </motion.svg>
  );
};

export default InfiniteGrid;
