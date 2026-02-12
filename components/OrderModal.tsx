"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "@/lib/products";

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
    const body =
      "Name: " +
      name +
      "\nEmail: " +
      email +
      "\nPhone: " +
      phone +
      "\nAddress: " +
      address +
      "\nProduct: " +
      productName +
      "\nQuantity: " +
      qty +
      " bags\nTotal: R " +
      total +
      "\nNotes: " +
      notes;
    const subject =
      "Order: " + productName + " x" + qty + " - " + formatRand(total);
    window.location.href =
      "mailto:guardians@miwesu.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    setStep("success");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      aria-hidden="false"
    >
      <div className="w-full sm:max-w-[600px] max-h-[85vh] sm:max-h-[90vh] bg-[#0a0a0a] border-0 sm:border border-[var(--rim)] rounded-t-[var(--squircle)] sm:rounded-[var(--squircle)] overflow-hidden flex flex-col mt-auto sm:my-auto">
        <div className="flex-shrink-0 py-4 px-4 sm:py-5 sm:px-6 border-b border-[var(--rim)] flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight">Secure Your Allocation</h2>
          <button
            type="button"
            onClick={onClose}
            className="bg-transparent border-0 text-[var(--titanium)] text-2xl cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-[var(--text)] touch-manipulation"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-0 overscroll-contain">
          {step === "success" && (
            <div className="text-center py-10 px-7">
              <h3 className="text-xl font-bold mb-3">Allocation received</h3>
              <p className="text-[var(--titanium)] mb-6">
                We&apos;ll contact you to confirm and arrange delivery. Gauteng. COD on inspection.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep("form");
                  onClose();
                }}
                className="w-full min-h-[48px] py-4 sm:py-5 rounded-[var(--squircle)] text-[0.9375rem] sm:text-base font-semibold uppercase tracking-wider bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 cursor-pointer"
              >
                Close
              </button>
            </div>
          )}

          {step === "form" && (
            <form onSubmit={handleSubmitForm} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div>
                <label htmlFor="ordName" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">
                  Name *
                </label>
                <input
                  id="ordName"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]"
                />
              </div>
              <div>
                <label htmlFor="ordEmail" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">
                  Email *
                </label>
                <input
                  id="ordEmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]"
                />
              </div>
              <div>
                <label htmlFor="ordPhone" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">
                  Phone *
                </label>
                <input
                  id="ordPhone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]"
                />
              </div>
              <div>
                <label htmlFor="ordProduct" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">
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
                  className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {p.priceLabel}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ordQty" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">
                  Quantity (bags) * - min {moq}
                </label>
                <input
                  id="ordQty"
                  type="number"
                  min={moq}
                  required
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value) || moq)}
                  className="w-full min-h-[48px] py-3 sm:py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)]"
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor="ordNotes" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">
                  Notes
                </label>
                <textarea
                  id="ordNotes"
                  rows={2}
                  placeholder="Estate, gate code…"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)] resize-y min-h-[72px]"
                />
              </div>
              <div className="md:col-span-3">
                <label htmlFor="ordAddress" className="block text-[0.7rem] tracking-widest uppercase text-[var(--titanium)] mb-2">
                  Delivery address (Gauteng) *
                </label>
                <textarea
                  id="ordAddress"
                  required
                  rows={2}
                  placeholder="Street, suburb"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full py-3.5 bg-transparent border-0 border-b border-[var(--rim)] text-[var(--text)] text-base outline-none focus:border-b-[var(--copper)] resize-y min-h-[72px]"
                />
              </div>
              <div className="md:col-span-3 pt-4 border-t border-[var(--rim)]">
                <div className="flex justify-between text-[0.95rem] mb-1.5">
                  <span>Price per bag</span>
                  <span>{formatRand(price)}</span>
                </div>
                <div className="flex justify-between text-[1.15rem] font-bold text-[var(--copper)] mt-2">
                  <span>Total</span>
                  <span>{formatRand(total)}</span>
                </div>
              </div>
              {error && <p className="text-[0.8rem] text-red-400 mt-3 md:col-span-3">{error}</p>}
              <div className="md:col-span-3 mt-6">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-4 sm:py-5 rounded-[var(--squircle)] text-[0.9375rem] sm:text-base font-semibold uppercase tracking-wider bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:opacity-95"
                >
                  Place order
                </button>
              </div>
            </form>
          )}

          {step === "confirm" && product && (
            <div>
              <h3 className="text-lg font-bold mb-5">Review your order</h3>
              <div className="pb-6 border-b border-[var(--rim)]">
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Product</span>
                  <span className="text-right break-words">{product.name} - {product.priceLabel}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Quantity</span>
                  <span className="text-right">{qty} bags</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Price per bag</span>
                  <span className="text-right">{formatRand(product.price)}</span>
                </div>
                <div className="flex justify-between gap-4 text-[1.1rem] font-bold text-[var(--copper)] mt-3">
                  <span>Total</span>
                  <span>{formatRand(total)}</span>
                </div>
              </div>
              <div className="pb-6">
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Name</span>
                  <span className="text-right break-words">{name || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Email</span>
                  <span className="text-right break-words">{email || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Phone</span>
                  <span className="text-right break-words">{phone || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Delivery address</span>
                  <span className="text-right break-words">{address || "-"}</span>
                </div>
                <div className="flex justify-between gap-4 text-[0.9rem] mb-2.5">
                  <span className="text-[var(--titanium)] flex-shrink-0">Notes</span>
                  <span className="text-right break-words">{notes || "-"}</span>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="flex-1 min-h-[48px] py-3.5 sm:py-4 rounded-[var(--squircle)] text-[0.9rem] sm:text-[0.95rem] font-semibold bg-transparent text-[var(--titanium)] border border-[var(--rim)] cursor-pointer hover:border-[var(--copper)] hover:text-[var(--text)]"
                >
                  Back to edit
                </button>
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="flex-1 min-h-[48px] py-3.5 sm:py-4 rounded-[var(--squircle)] text-[0.9rem] sm:text-[0.95rem] font-semibold uppercase bg-gradient-to-r from-[var(--copper)] to-[var(--copper-deep)] text-white border-0 cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:opacity-95"
                >
                  Confirm order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
