import { cubicBezier } from "motion";

export const transition = {
  duration: 1.4,
  ease: cubicBezier(0.6, 0.01, -0.05, 0.9),
};
