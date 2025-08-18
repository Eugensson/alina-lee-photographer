"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { transition } from "@/lib/transition";
import { useCursorContext } from "@/hooks/use-cursor-context";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="h-full container relative flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="w-full pt-36 pb-14 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
      >
        <h1 className="h1">
          photographer <br /> & film maker
        </h1>
        <p className="text-2xl lg:text-4xl font-primary mb-4 lg:mb-12">
          Los Angeles, CA
        </p>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({
              variant: "custom",
              size: "custom",
            }),
            "w-47 mb-7"
          )}
        >
          hire me
        </Link>
      </motion.div>
      <div className="flex justify-end h-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={transition}
          className="relative lg:-right-22 overflow-hidden"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={transition}
            src="/assets/home/woman.jpg"
            alt="hero"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
