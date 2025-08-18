"use client";

import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants";
import { useCursorContext } from "@/hooks/use-cursor-context";

export const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext();

  return (
    <ul
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex items-center gap-x-4"
    >
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => {
        return (
          <li key={name}>
            <Link
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} link`}
            >
              <Icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
