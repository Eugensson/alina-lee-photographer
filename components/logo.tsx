"use client";

import Link from "next/link";
import Image from "next/image";

import { useCursorContext } from "@/hooks/use-cursor-context";

export const Logo = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext();

  return (
    <Link
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      href="/"
      className="max-w-50"
    >
      <Image
        src="/assets/header/logo.svg"
        alt="Logo"
        width={180}
        height={180}
      />
    </Link>
  );
};
