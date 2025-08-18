export type CustomMixBlendMode = "normal" | "difference";

export type CursorPosition = {
  x: number;
  y: number;
};

export type CursorVariants = {
  [key: string]: {
    x?: number;
    y?: number;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    mixBlendMode?: CustomMixBlendMode;
  };
};

export type CursorContextType = {
  cursorVariants: CursorVariants;
  cursorBackground: string;
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
};
