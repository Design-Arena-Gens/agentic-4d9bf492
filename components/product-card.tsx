"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format";
import { useCart } from "@/components/cart-provider";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 p-1 shadow-xl shadow-slate-950/40 backdrop-blur-xl"
    >
      <div className="relative h-64 overflow-hidden rounded-[26px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/30 via-transparent to-slate-950/60" />
        {product.badge ? (
          <Badge className="absolute left-4 top-4">{product.badge}</Badge>
        ) : null}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-slate-900/80 bg-slate-950/70 px-3 py-1 text-xs text-slate-300 backdrop-blur">
          <Star className="h-4 w-4 fill-accent/50 text-accent" />
          <span className="font-semibold text-slate-200">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-slate-500">({product.reviews})</span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="font-display text-xl text-slate-100">
            {product.name}
          </h3>
          <p className="text-sm text-slate-400">{product.description}</p>
        </div>
        <ul className="space-y-2 text-xs text-slate-400">
          {product.highlights.slice(0, 3).map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 leading-relaxed text-slate-400"
            >
              <span className="mt-[5px] h-1.5 w-1.5 flex-none rounded-full bg-accent-soft" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-slate-100">
            {formatCurrency(product.price)}
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            className="shadow-glow"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
