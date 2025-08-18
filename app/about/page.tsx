"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { transition } from "@/lib/transition";
import { useCursorContext } from "@/hooks/use-cursor-context";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext();

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="order-2 lg:order-1 flex-1 relative w-full h-[80vh] overflow-hidden">
            <Image
              src="/assets/about/woman.jpg"
              alt="Alina Lee Photographer"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition}
            className="order-1 lg:order-2 flex-1 pt-36 pb-14 lg:pt-24 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-xl">
              I am a passionate photographer specializing in capturing the
              beauty of moments through a creative and artistic lens. My work
              spans portrait, lifestyle, and fine art photography, always aiming
              to tell a compelling story with every shot.
              <br />
              <br />
              With a focus on natural light, composition, and emotion, I strive
              to create images that resonate and leave a lasting impression.
              Explore my portfolio to see how I bring visions to life through
              photography.
            </p>
            <Button asChild variant="custom" size="custom">
              <Link href="/portfolio">View my work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
