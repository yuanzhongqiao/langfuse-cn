import React from "react";
import { cn } from "@/src/utils/tailwind";
import { X } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Command as CommandPrimitive } from "cmdk";

type TagInputProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive.Input
> & {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

export const TagInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  TagInputProps
>(({ className, selectedTags, setSelectedTags, ...props }, ref) => (
  <div
    className="flex flex-wrap items-center overflow-auto rounded-lg border px-2 pt-2"
    cmdk-input-wrapper=""
  >
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      {selectedTags.map((tag: string) => (
        <Button
          key={tag}
          variant="secondary"
          size="xs"
          onClick={() => {
            const newTags = selectedTags.filter((t) => t !== tag);
            setSelectedTags(newTags);
          }}
        >
          {tag}
          <X className="ml-1 h-3 w-3" />
        </Button>
      ))}
    </div>
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md border-transparent bg-transparent px-1 text-sm outline-none placeholder:text-slate-500 focus:border-0  focus:border-none focus:border-transparent focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400	",
        className,
      )}
      {...props}
    />
  </div>
));

TagInput.displayName = CommandPrimitive.Input.displayName;
