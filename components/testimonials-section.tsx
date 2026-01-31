"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nebula transformed my studio. The Aurora headset isolates every nuance while the Lumen speaker reshapes the space with cinematic warmth.",
    name: "Isla Myrene",
    role: "Immersive Sound Director",
    location: "Berlin"
  },
  {
    quote:
      "The Nyx smartwatch is the only wearable that keeps pace with my routines. Solar trickle charging and adaptive focus modes are game changers.",
    name: "Kai Ito",
    role: "Industrial Designer",
    location: "Tokyo"
  },
  {
    quote:
      "From concierge fittings to lifetime assurance, the Nebula ecosystem feels like a future-forward atelier dedicated to your flow state.",
    name: "Lena Rodriguez",
    role: "Creative Technologist",
    location: "Mexico City"
  }
];

export function TestimonialsSection() {
  return (
    <section className="border-b border-slate-800/60 bg-slate-950/40 py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          <Sparkles className="h-4 w-4 text-accent" />
          Resonant stories
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex h-full flex-col gap-6 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6"
            >
              <Quote className="h-6 w-6 text-accent" />
              <p className="flex-1 text-sm text-slate-300">{testimonial.quote}</p>
              <footer className="space-y-1 text-xs uppercase tracking-wide text-slate-500">
                <p className="text-sm font-semibold text-slate-100">
                  {testimonial.name}
                </p>
                <p>{testimonial.role}</p>
                <p>{testimonial.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
