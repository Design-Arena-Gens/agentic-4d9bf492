"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { CartDrawer } from "@/components/cart-drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/products";

const navLinks = [
  { label: "Featured", href: "#featured" },
  { label: "Collections", href: "#collections" },
  { label: "Experience", href: "#experience" },
  { label: "Stories", href: "#stories" }
];

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-full border border-slate-800/60 bg-slate-900/80 px-4 py-2 text-sm font-semibold tracking-wide text-slate-100 transition hover:border-accent-soft/60 hover:text-accent"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-soft to-accent text-slate-950">
                N
              </span>
              Nebula Commerce
            </Link>
            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative transition hover:text-accent"
                >
                  {link.label}
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-accent-soft to-transparent opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              {categories.slice(0, 3).map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-800/60 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-wide text-slate-400"
                >
                  {category}
                </span>
              ))}
            </div>
            <Button
              variant="ghost"
              className="relative h-11 w-11 rounded-full border border-slate-800/70 text-slate-100 hover:text-accent"
              onClick={() => setDrawerOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              <span
                className={cn(
                  "absolute -right-1 -top-1 flex h-5 min-w-[1.5rem] items-center justify-center rounded-full border border-slate-950 bg-accent text-xs font-semibold text-slate-950 shadow-glow",
                  itemCount === 0 && "hidden"
                )}
              >
                {itemCount}
              </span>
            </Button>
            <Button
              variant="ghost"
              className="h-11 w-11 rounded-full border border-slate-800/70 text-slate-100 hover:text-accent lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden border-t border-slate-800/70 lg:hidden"
        >
          <div className="flex flex-col gap-2 px-6 py-4 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg border border-transparent px-3 py-2 hover:border-accent-soft/40 hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </header>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
