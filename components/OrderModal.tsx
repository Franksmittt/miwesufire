"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { WHATSAPP_ORDER_LINK } from "@/lib/site";

const formatRand = (n: number) => "R " + Number(n).toLocaleString();

export function OrderModal({
  open,
  onClose,
  preselectedId,
}: {
  open: boolean;
  onClose: () => void;
  preselectedId?: string | null;
}) {
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [productId, setProductId] = useState(preselectedId || PRODUCTS[0].id);
  const [qty, setQty] = useState(PRODUCTS[0].moq);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const product = PRODUCTS.find((p) => p.id === productId);
  const moq = product?.moq ?? 20;
  const price = product?.price ?? 0;
  const total = qty * price;

  useEffect(() => {
    if (preselectedId && PRODUCTS.some((p) => p.id === preselectedId)) {
      setProductId(preselectedId);
      const p = PRODUCTS.find((x) => x.id === preselectedId);
      if (p) setQty(p.moq);
    }
  }, [preselectedId]);

  useEffect(() => {
    if (open) {
      setStep("form");
      setError("");
      if (preselectedId && PRODUCTS.some((p) => p.id === preselectedId)) {
        setProductId(preselectedId);
        const p = PRODUCTS.find((x) => x.id === preselectedId);
        if (p) setQty(p.moq);
      } else {
        setProductId(PRODUCTS[0].id);
        setQty(PRODUCTS[0].moq);
      }
    }
  }, [open, preselectedId]);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!product || qty < moq) {
      setError(`Select a product and quantity (min ${moq} bags).`);
      return;
    }
    if (!name.trim() || !email.trim() || !address.trim()) {
      setError("Please fill in name, email and delivery address.");
      return;
    }
    setStep("confirm");
  };

  const handleConfirm = () => {
    if (!product) return;
    const productName = product.name + " - " + product.priceLabel;
    const message =
      "Hi, I'd like to place an order:\n\n" +
      "• Name: " +
      name +
      "\n" +
      "• Email: " +
      email +
      "\n" +
      "• Phone: " +
      phone +
      "\n" +
      "• Address: " +
      address +
      "\n\n" +
      "• Product: " +
      productName +
      "\n" +
      "• Quantity: " +
      qty +
      " bags\n" +
      "• Total: " +
      formatRand(total) +
      "\n\n" +
      (notes ? "Notes: " + notes + "\n" : "");
    window.open(WHATSAPP_ORDER_LINK(message), "_blank", "noopener,noreferrer");
    setStep("success");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-ink/70 backdrop-blur-[2px] z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      aria-hidden="false"
    >
      <div className="w-full sm:max-w-[600px] max-h-[85vh] sm:max-h-[90vh] bg-paper border-0 sm:border border-[var(--rim)] rounded-t-lg sm:rounded-md overflow-hidden flex flex-col mt-auto sm:my-auto shadow-xl">
        <div className="flex-shrink-0 py-4 px-4 sm:py-5 sm:px-6 border-b border-[var(--rim)] flex justify-between items-center bg-paper">
          <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink">Place an order</h2>
          <button
            type="button"
            onClick={onClose}
            className="bg-transparent border-0 text-muted text-2xl cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-ink touch-manipulation"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-0 overscroll-contain">
          {step === "success" && (
            <div className="text-center py-10 px-4">
              <h3 className="font-display text-xl font-semibold mb-3 text-ink">Send it on WhatsApp</h3>
              <p className="text-muted mb-6 text-[0.95rem] leading-relaxed">
                WhatsApp should have opened with your order. Send the message to complete it. We&apos;ll confirm and arrange delivery. COD on inspection.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep("form");
                  onClose();
                }}
                className="btn-primary w-full"
              >
                Close
              </button>
            </div>
          )}

          {step === "form" && (
            <form onSubmit={handleSubmitForm} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div>
                <label htmlFor="ordName" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Name *
                </label>
                <input
                  id="ordName"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-line"
                />
              </div>
              <div>
                <label htmlFor="ordEmail" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Email *
                </label>
                <input
                  id="ordEmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-line"
                />
              </div>
              <div>
                <label htmlFor="ordPhone" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Phone *
                </label>
                <input
                  id="ordPhone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-line"
                />
              </div>
              <div>
                <label htmlFor="ordProduct" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Product *
                </label>
                <select
                  id="ordProduct"
                  value={productId}
                  onChange={(e) => {
                    setProductId(e.target.value);
                    const p = PRODUCTS.find((x) => x.id === e.target.value);
                    if (p) setQty(p.moq);
                  }}
                  className="input-line"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {p.priceLabel}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ordQty" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Quantity (bags) * — min {moq}
                </label>
                <input
                  id="ordQty"
                  type="number"
                  min={moq}
                  required
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value) || moq)}
                  className="input-line"
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor="ordNotes" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Notes
                </label>
                <textarea
                  id="ordNotes"
                  rows={2}
                  placeholder="Estate, gate code…"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input-line min-h-[72px] resize-y"
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor="ordAddress" className="block text-[0.7rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Delivery address (Gauteng) *
                </label>
                <textarea
                  id="ordAddress"
                  required
                  rows={2}
                  placeholder="Street, suburb"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input-line min-h-[72px] resize-y"
                />
              </div>
              <div className="md:col-span-3 pt-4 border-t border-[var(--rim)]">
                <div className="flex justify-between text-[0.95rem] mb-1.5 text-ink">
                  <span>Price per bag</span>
                  <span>{formatRand(price)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-ember mt-2">
                  <span>Total</span>
                  <span>{formatRand(total)}</span>
                </div>
              </div>
              {error && <p className="text-sm text-ember mt-3 md:col-span-3">{error}</p>}
              <div className="md:col-span-3 mt-6">
                <button type="submit" className="btn-primary w-full">
                  Review order
                </button>
              </div>
            </form>
          )}

          {step === "confirm" && product && (
            <div>
              <h3 className="font-display text-lg font-semibold mb-5 text-ink">Review your order</h3>
              <div className="pb-6 border-b border-[var(--rim)]">
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Product</span>
                  <span className="text-right break-words text-ink">
                    {product.name} - {product.priceLabel}
                  </span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Quantity</span>
                  <span className="text-right text-ink">{qty} bags</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Price per bag</span>
                  <span className="text-right text-ink">{formatRand(product.price)}</span>
                </div>
                <div className="flex justify-between gap-4 text-lg font-semibold text-ember mt-3">
                  <span>Total</span>
                  <span>{formatRand(total)}</span>
                </div>
              </div>
              <div className="pb-6 pt-4">
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Name</span>
                  <span className="text-right break-words text-ink">{name || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Email</span>
                  <span className="text-right break-words text-ink">{email || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Phone</span>
                  <span className="text-right break-words text-ink">{phone || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Delivery address</span>
                  <span className="text-right break-words text-ink">{address || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-muted flex-shrink-0">Notes</span>
                  <span className="text-right break-words text-ink">{notes || "-"}</span>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="flex-1 min-h-[48px] py-3.5 rounded text-[0.9rem] font-semibold bg-transparent text-muted border border-[var(--rim-strong)] cursor-pointer hover:border-ink hover:text-ink"
                >
                  Back to edit
                </button>
                <button type="button" onClick={handleConfirm} className="btn-primary flex-1">
                  Confirm on WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
