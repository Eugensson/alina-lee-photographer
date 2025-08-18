"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { PORTFOLIO_LIST } from "@/constants";
import { transition } from "@/lib/transition";
import { useCursorContext } from "@/hooks/use-cursor-context";

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="h-full container relative flex flex-col justify-center"
    >
      <div className="container h-full relative">
        <div className="h-full flex flex-col lg:flex-row justify-center items-start gap-x-8 text-center lg:text-left pt-120 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="flex flex-col items-center lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-180">
              Explore a curated collection of my photography work, showcasing
              diverse projects in portrait, lifestyle, and creative visual
              storytelling. Each piece reflects my dedication to composition,
              lighting, and capturing genuine moments.
              <br />
              <br />
              From personal projects to professional assignments, my portfolio
              demonstrates a commitment to producing striking images that engage
              and inspire. Discover how I transform concepts into visual stories
              through photography.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({
                  variant: "custom",
                  size: "custom",
                }),
                "mx-auto lg:mx-0 mb-7"
              )}
            >
              hire me
            </Link>
          </motion.div>
          <ul
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2"
          >
            {PORTFOLIO_LIST.map(({ name, path }, index) => {
              return (
                <li
                  key={index}
                  className="relative max-w-62 lg:max-w-80 h-47 lg:h-55 bg-accent overflow-hidden"
                >
                  <Image
                    src={path}
                    alt={name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    quality={100}
                    priority
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
