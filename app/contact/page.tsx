"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { transition } from "@/lib/transition";
import { useCursorContext } from "@/hooks/use-cursor-context";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="h-full relative flex flex-col justify-center"
    >
      <div className="h-full flex flex-col lg:flex-row justify-start items-center pt-36 gap-x-8 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition}
          className="hidden lg:flex bg-accent h-[75vh] absolute top-72 bottom-0 left-0 right-0 z-0"
        />
        <div className="container grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h-full lg:flex-1 lg:pt-20 px-4 z-10"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-8">
              Get in touch easily through my contact form. Whether you have
              questions, project ideas, or collaboration offers — simply share
              your details and I’ll get back to you as soon as possible.
            </p>
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
              <Input
                type="text"
                placeholder="Your name"
                className="border-primary font-secondary placeholder:text-placeholder"
              />
              <Input
                type="text"
                placeholder="Your email address"
                className="border-primary font-secondary placeholder:text-placeholder"
              />
              <Textarea
                placeholder="Your message"
                className="lg:col-span-2 border-b border-primary font-secondary placeholder:text-placeholder"
              />
              <Button
                type="submit"
                variant="custom"
                size="custom"
                className="max-w-40 my-7 mx-auto lg:mx-0 self-start"
              >
                Send it
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, bottom: "-100%" }}
            animate={{
              opacity: 1,
              bottom: 0,
              transition: { delay: 0.6, duration: 1.2, ease: "easeInOut" },
            }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 z-10 relative w-full h-screen"
          >
            <Image
              src="/assets/contact/woman.png"
              alt="Photo of woman"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
