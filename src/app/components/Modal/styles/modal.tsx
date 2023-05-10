import { cva, type VariantProps } from "class-variance-authority";

const modal = cva("modal", {
  variants: {
    state: {
      open: ["opacity-100", "pointer-events-auto"],
      closed: ["opacity-0", "pointer-events-none"],
    },
  },
  defaultVariants: {
    state: "closed",
  },
});

const overlay = cva("overlay", {
  base: ["fixed", "inset-0", "bg-blackA9"],
});

const content = cva("content", {
  base: [
    "fixed",
    "top-[50%]",
    "left-[50%]",
    "max-h-[85vh]",
    "w-[90vw]",
    "max-w-[450px]",
    "translate-x-[-50%]",
    "translate-y-[-50%]",
    "rounded-[6px]",
    "bg-white",
    "p-[25px]",
    "shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",
    "focus:outline-none",
  ],
});

const title = cva("title", {
  base: ["text-mauve12", "m-0", "text-[17px]", "font-medium"],
});

const description = cva("description", {
  base: ["text-mauve11", "mt-[10px]", "mb-5", "text-[15px]", "leading-normal"],
});

const closeButton = cva("close-button", {
  base: [
    "text-violet11",
    "hover:bg-violet4",
    "focus:shadow-violet7",
    "absolute",
    "top-[10px]",
    "right-[10px]",
    "inline-flex",
    "h-[25px]",
    "w-[25px]",
    "appearance-none",
    "items-center",
    "justify-center",
    "rounded-full",
    "focus:shadow-[0_0_0_2px]",
    "focus:outline-none",
  ],
});

export { modal, overlay, content, title, description, closeButton };
