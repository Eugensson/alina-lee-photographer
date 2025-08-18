"use client";

import { motion } from "motion/react";

import { useCursorContext } from "@/hooks/use-cursor-context";

export const Cursor = () => {
  const { cursorVariants, cursorBackground } = useCursorContext();

  return (
    <motion.div
      variants={cursorVariants}
      animate={cursorBackground}
      className="size-8 bg-primary fixed top-0 left-0 pointer-events-none z-30 rounded-full"
    />
  );
};
