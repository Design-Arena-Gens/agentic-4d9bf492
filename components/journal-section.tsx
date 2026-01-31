"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    title: "Designing resonance in the Nebula acoustic lab",
    excerpt:
      "A behind-the-scenes look at how our sound engineers sculpt harmonic profiles that adapt in real time.",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1200&q=80",
    category: "Soundscapes",
    readingTime: "6 min"
  },
  {
    title: "The future of wearable rituals",
    excerpt:
      "From biometric tuning to intuitive gestures: how the Nebula Nyx smartwatch redefines personal osmosis.",
    image:
      "https://images.unsplash.com/photo-1603791452906-af1740e17129?auto=format&fit=crop&w=1200&q=80",
    category: "Wearables",
    readingTime: "8 min"
  },
  {
    title: "Architecting luminous workspaces",
    excerpt:
      "A tactile manifesto on building environments that encourage flow state through light, sound, and ergonomics.",
    image:
      "https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=1200&q=80",
    category: "Workflows",
    readingTime: "5 min"
  }
];

export function JournalSection() {
  return (
    <section id="stories" className="border-b border-slate-800/60 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Journal
            </span>
            <h2 className="font-display text-3xl text-slate-100 md:text-4xl">
              Stories illuminating the craft behind every release.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Dive into longform essays, lab notes, and conversations with creators pushing
            the future of multi-sensory design.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
                  <span>{story.category}</span>
                  <span>{story.readingTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-100">
                  {story.title}
                </h3>
                <p className="text-sm text-slate-400">{story.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-soft">
                  Read story <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
