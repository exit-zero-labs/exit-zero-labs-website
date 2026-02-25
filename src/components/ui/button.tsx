"use client";

import { type HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "ghost";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: ButtonVariant;
  href?: string;
};

const variants: Record<ButtonVariant, string> = {
  solid: [
    "bg-signal text-zero font-body font-semibold",
    "hover:shadow-[0_0_20px_rgba(0,217,126,0.3)]",
    "active:scale-[0.98]",
  ].join(" "),
  ghost: [
    "border border-white/60 text-white font-body font-semibold",
    "hover:border-white",
    "active:scale-[0.98]",
  ].join(" "),
};

const MotionButton = motion.create("button");
const MotionAnchor = motion.create("a");

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "solid", href, className, children, ...props },
    ref,
  ) {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base transition-colors duration-[--duration-fast] cursor-pointer",
      variants[variant],
      className,
    );

    if (href) {
      return (
        <MotionAnchor
          href={href}
          className={classes}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </MotionAnchor>
      );
    }

    return (
      <MotionButton
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        {...props}
      >
        {children}
      </MotionButton>
    );
  },
);
