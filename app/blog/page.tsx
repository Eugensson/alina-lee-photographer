"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { BLOG_LIST } from "@/constants";
import { transition } from "@/lib/transition";
import { useCursorContext } from "@/hooks/use-cursor-context";

const Blog = () => {
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
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={transition}
        className="flex-1 pt-100 pb-12 lg:pt-24 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start gap-4"
      >
        <div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="h-full relative flex items-center"
        >
          <h1 className="h1">Blog</h1>
        </div>
        <ul className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {BLOG_LIST.map(
            ({ title, description, category, path, createAt }, index) => {
              return (
                <li key={index}>
                  <div
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-2 text-grey uppercase">
                      <span>{createAt}</span>
                      <span>/</span>
                      <span>{category}</span>
                    </div>
                    <Link href={path} className="hover:underline">
                      <h2 className="mb-4 text-2xl font-primary capitalize">
                        {title}
                      </h2>
                      <p className="mb-4">{description}</p>
                    </Link>
                  </div>
                </li>
              );
            }
          )}
        </ul>
        <Link
          href="/blog"
          className={cn(
            buttonVariants({
              variant: "custom",
              size: "custom",
            })
          )}
        >
          View all blogs
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Blog;
