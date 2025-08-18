import { useContext } from "react";

import { CursorContext } from "@/components/cursor-context";

import { CursorContextType } from "@/types";

export const useCursorContext = (): CursorContextType => {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("useCursorContext must be used within <CursorProvider>");
  }

  return context;
};
