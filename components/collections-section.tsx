"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/products";

export function CollectionsSection() {
  return (
    <section id="collections" className="border-b border-slate-800/60 py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Curated collections
            </span>
            <h2 className="font-display text-3xl text-slate-100 md:text-4xl">
              Explore refined instruments for every ritual.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-full border border-slate-800/60 bg-slate-900/40 px-3 py-2"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <Fragment key={product.id}>
              <ProductCard product={product} index={index} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
