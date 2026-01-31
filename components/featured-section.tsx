"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format";
import { featuredProducts } from "@/lib/products";
import { useCart } from "@/components/cart-provider";

export function FeaturedSection() {
  const { addItem } = useCart();

  return (
    <section id="featured" className="border-b border-slate-800/60 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              <Waves className="h-4 w-4 text-accent" />
              Limited feature
            </span>
            <h2 className="font-display text-3xl text-slate-100 md:text-4xl">
              Signature drops engineered for artisans of focus.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Each release undergoes a 72-point acoustic, tactile, and durability audit
            to ensure unwavering performance in every ritual.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {featuredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-800/60 bg-gradient-to-br from-slate-950/70 via-slate-900/50 to-[#0F172A]/80 p-8 shadow-slate-950/50"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1E293B_0%,transparent_60%)] opacity-60 transition duration-500 group-hover:opacity-80" />
              <div className="relative flex flex-col gap-8 md:flex-row">
                <div className="relative h-64 flex-1 overflow-hidden rounded-[26px] bg-slate-900/50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 460px, 90vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <Badge>{product.badge ?? "Featured"}</Badge>
                    <h3 className="font-display text-2xl text-slate-100">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {product.description}
                    </p>
                    <ul className="grid gap-3 text-xs text-slate-400 md:grid-cols-2">
                      {product.highlights.slice(0, 4).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-accent-soft" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <span className="text-lg font-semibold text-slate-100">
                      {formatCurrency(product.price)}
                    </span>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        className="shadow-glow"
                        onClick={() => addItem(product)}
                      >
                        Reserve drop
                      </Button>
                      <Button
                        variant="ghost"
                        className="gap-2 border border-slate-800/60 text-slate-300"
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
