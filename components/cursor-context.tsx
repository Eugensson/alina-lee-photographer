"use client";

import { createContext, useEffect, useState } from "react";

import { CursorContextType, CursorPosition, CursorVariants } from "@/types";

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined
);

interface CursorProviderProps {
  children: React.ReactNode;
}

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });

  const [cursorBackground, setCursorBackground] = useState("default");

  const mobileViewportIsActive =
    typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (mobileViewportIsActive) {
      setCursorBackground("none");
    }

    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mobileViewportIsActive]);

  const cursorVariants: CursorVariants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPosition.x - 72,
      y: cursorPosition.y - 72,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  };

  const mouseEnterHandler = () => {
    setCursorBackground("text");
  };

  const mouseLeaveHandler = () => {
    setCursorBackground("default");
  };

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBackground,
        mouseEnterHandler,
        mouseLeaveHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
