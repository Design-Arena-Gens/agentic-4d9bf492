"use client";

import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent-soft text-slate-950 shadow-glow hover:bg-accent focus:bg-accent",
  secondary:
    "bg-slate-800/80 text-slate-100 border border-slate-700 hover:bg-slate-800",
  ghost: "text-slate-300 hover:bg-slate-800/60 border border-transparent"
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-8 text-lg"
};

export function Button(props: ButtonProps) {
  const {
    className,
    variant = "primary",
    size = "md",
    asChild = false,
    ...rest
  } = props;
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...rest}
    />
  );
}
