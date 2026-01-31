"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/format";
import { featuredProducts } from "@/lib/products";

export function HeroSection() {
  const heroProduct = featuredProducts[0];

  return (
    <section className="relative overflow-hidden border-b border-slate-800/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#0B1120,transparent_50%)]" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="space-y-10">
          <Badge>Nebula flagship</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="font-display text-4xl leading-tight text-slate-100 md:text-5xl lg:text-6xl"
          >
            Elevate your ritual with design-led technology and luminous craft.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "circOut" }}
            className="max-w-xl text-lg text-slate-400"
          >
            Discover a curated ecosystem of instruments engineered for deep focus,
            cinematic sound, and effortless presence. Crafted in limited batches,
            tuned for modern creators.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "circOut" }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="shadow-glow" asChild>
              <Link href="#featured">Shop featured</Link>
            </Button>
            <Button variant="ghost" size="lg" className="gap-2 text-slate-300" asChild>
              <Link href="#collections">
                View collections <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "circOut" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            <FeatureStat label="Average rating" value="4.8" detail="3.2k+ reviews" />
            <FeatureStat label="Drops monthly" value="12" detail="Limited editions" />
            <FeatureStat label="Member waitlist" value="48h" detail="Priority access" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "circOut" }}
          className="relative overflow-hidden rounded-[32px] border border-slate-800/60 bg-gradient-to-br from-slate-950/80 via-slate-900/40 to-[#0F172A]/60 p-8 shadow-2xl shadow-black/40"
        >
          <div className="space-y-6">
            <div className="rounded-full border border-accent-soft/40 bg-accent-soft/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent">
              Spotlight
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl text-slate-100">
                {heroProduct.name}
              </h2>
              <p className="text-sm text-slate-400">{heroProduct.description}</p>
            </div>
            <ul className="space-y-3 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 text-sm text-slate-400">
              {heroProduct.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent-soft" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-slate-100">
                {formatCurrency(heroProduct.price)}
              </span>
              <Link
                href="#featured"
                className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-soft"
              >
                View detail <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureStat({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-100">{value}</p>
      <p className="text-xs text-slate-500">{detail}</p>
    </div>
  );
}
