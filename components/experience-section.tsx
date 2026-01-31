"use client";

import { motion } from "framer-motion";
import { Sparkles, Atom, Timer, ShieldCheck } from "lucide-react";

const experiences = [
  {
    icon: Sparkles,
    title: "Curated immersion",
    description:
      "Schedule a one-on-one ritual fitting with our product specialists, in studio or via holographic session."
  },
  {
    icon: Atom,
    title: "Adaptive tuning",
    description:
      "Each instrument ships with embedded firmware that evolves with your preferences through Nebula Sync."
  },
  {
    icon: Timer,
    title: "Priority concierge",
    description:
      "48-hour turnarounds for maintenance, upgrades, or rapid replacements anywhere in the world."
  },
  {
    icon: ShieldCheck,
    title: "Lifetime assurance",
    description:
      "Every Nebula creation is covered by a lifetime performance warranty and archival support."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-slate-800/60 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Ownership experience
            </span>
            <h2 className="font-display text-3xl text-slate-100 md:text-4xl">
              Beyond purchase — a continuous luminous journey.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            With Nebula Concierge you unlock intimate product guidance, personalized
            upgrades, and seamless lifecycle stewardship for every instrument.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex gap-5 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-soft/50 bg-accent-soft/10 text-accent">
                <experience.icon className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  {experience.title}
                </h3>
                <p className="text-sm text-slate-400">{experience.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
