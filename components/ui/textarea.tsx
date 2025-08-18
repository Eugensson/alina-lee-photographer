import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex h-15 w-full rounded-none border-b border-neutral-200 bg-transparent px-3 py-2 text-base placeholder:text-neutral-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-200 dark:bg-transparent dark:placeholder:text-neutral-400",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
