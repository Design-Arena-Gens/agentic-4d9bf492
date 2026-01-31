"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-provider";
import { formatCurrency } from "@/lib/format";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 }
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close cart"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-800/80 bg-slate-950/95 backdrop-blur-xl"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
          >
            <div className="flex items-center justify-between border-b border-slate-800/70 px-8 py-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-100">Your cart</h2>
                <p className="text-sm text-slate-400">
                  {items.length === 0
                    ? "Your cart is currently empty."
                    : `You have ${items.length} product${items.length > 1 ? "s" : ""} in your cart.`}
                </p>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-slate-500">
                  <p className="text-sm">
                    Explore our curated selection to add products to your cart.
                  </p>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex items-start gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
                    >
                      <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-medium text-slate-100">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-slate-400">
                              {item.product.category}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-slate-100">
                            {formatCurrency(item.product.price * item.quantity)}
                          </span>
                        </div>
                        <div className="mt-3 flex items-center gap-3 text-sm text-slate-400">
                          <label className="flex items-center gap-2">
                            Qty
                            <input
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(event) =>
                                updateQuantity(
                                  item.product.id,
                                  Number.parseInt(event.target.value, 10) || 1
                                )
                              }
                              className="h-9 w-16 rounded-lg border border-slate-700 bg-slate-900/80 px-3 text-slate-100"
                            />
                          </label>
                          <button
                            type="button"
                            className="text-xs uppercase tracking-wider text-accent hover:text-accent-soft"
                            onClick={() => removeItem(item.product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-slate-800/70 px-8 py-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Subtotal</span>
                <span className="text-base font-semibold text-slate-100">
                  {formatCurrency(total)}
                </span>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    onClose();
                    clearCart();
                  }}
                  disabled={items.length === 0}
                >
                  Checkout
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-slate-400 hover:text-slate-100"
                  onClick={clearCart}
                  disabled={items.length === 0}
                >
                  Clear cart
                </Button>
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
