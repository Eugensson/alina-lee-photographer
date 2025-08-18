import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-15 w-full rounded-none border-b border-neutral-200 bg-transparent px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-200 dark:bg-transparent dark:file:text-neutral-50 dark:placeholder:text-neutral-400",
        className
      )}
      {...props}
    />
  );
}

export { Input };
