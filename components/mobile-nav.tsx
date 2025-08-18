"use client";

import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";

export const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <CgMenuRight size={30} />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile menu navigation
          </SheetDescription>
        </SheetHeader>
        <nav className="h-full">
          <ul className="h-full flex flex-col justify-center items-center gap-y-8 font-primary font-bold text-3xl">
            {NAV_LINKS.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={cn(
                      "text-secondary hover:text-primary transition-colors",
                      pathname === href && "text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
