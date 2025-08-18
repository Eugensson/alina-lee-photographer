"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";
import { useCursorContext } from "@/hooks/use-cursor-context";

interface NavProps {
  className?: string;
}

export const Nav: React.FC<NavProps> = ({ className }) => {
  const pathname = usePathname();
  const { mouseEnterHandler, mouseLeaveHandler } = useCursorContext();

  return (
    <nav
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={cn("items-center gap-x-12 font-semibold", className)}
    >
      {NAV_LINKS.map(({ name, href }) => {
        return (
          <Link
            key={name}
            href={href}
            className={cn(
              "text-secondary hover:text-primary transition-colors",
              pathname === href && "text-primary"
            )}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};
