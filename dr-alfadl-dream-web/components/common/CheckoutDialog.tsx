"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { X, User, Mail, Phone, ShoppingCart, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { formatPrice } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
});

type FormData = z.infer<typeof schema>;

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productIndex: number;
  productTitle: string;
  price: number;
}

export function CheckoutDialog({ open, onOpenChange, productIndex, productTitle, price }: CheckoutDialogProps) {
  const { locale, t, isRTL } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const inputClass = (error?: boolean) =>
    `w-full px-4 py-3 rounded-xl text-navy-900 text-sm font-medium outline-none transition-all duration-200 border ${
      error
        ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-400/30"
        : "border-navy-100/60 bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
    } placeholder:text-navy-400/60`;

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productIndex,
          productTitle,
          price,
          currency: t.store.currency,
          locale,
          ...data,
        }),
      });
      if (!res.ok) throw new Error("request_failed");
      setSubmitted(true);
    } catch {
      toast.error(
        isRTL
          ? "تعذر إرسال طلبك. حاول مرة أخرى."
          : "Couldn't submit your order. Please try again."
      );
    }
  };

  const handleClose = (next: boolean) => {
    if (!next) {
      setSubmitted(false);
      reset();
    }
    onOpenChange(next);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md bg-white rounded-3xl p-7 shadow-luxury z-50 max-h-[90vh] overflow-y-auto">
          <Dialog.Close className="absolute top-5 end-5 text-navy-400 hover:text-navy-900 transition-colors">
            <X className="w-5 h-5" />
          </Dialog.Close>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <Dialog.Title className="text-navy-900 text-lg font-bold mb-2">
                {isRTL ? "تم استلام طلبك!" : "Order Received!"}
              </Dialog.Title>
              <Dialog.Description className="text-navy-600/70 text-sm max-w-xs">
                {isRTL
                  ? "سيتواصل معك فريقنا خلال 24 ساعة لإتمام عملية الدفع وتأكيد الطلب."
                  : "Our team will contact you within 24 hours to complete payment and confirm your order."}
              </Dialog.Description>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-navy-900 text-lg font-bold mb-1">
                {isRTL ? "إتمام الطلب" : "Complete Your Order"}
              </Dialog.Title>
              <Dialog.Description className="text-navy-600/70 text-sm mb-5">
                {productTitle} — {formatPrice(price, t.store.currency, locale)}
              </Dialog.Description>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <label className="block text-navy-700 text-sm font-semibold mb-2">
                    <User className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                    {t.booking.name}
                  </label>
                  <input {...register("name")} type="text" className={inputClass(!!errors.name)} />
                </div>
                <div>
                  <label className="block text-navy-700 text-sm font-semibold mb-2">
                    <Mail className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                    {t.booking.email}
                  </label>
                  <input {...register("email")} type="email" dir="ltr" className={inputClass(!!errors.email)} />
                </div>
                <div>
                  <label className="block text-navy-700 text-sm font-semibold mb-2">
                    <Phone className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                    {t.booking.phone}
                  </label>
                  <input {...register("phone")} type="tel" dir="ltr" className={inputClass(!!errors.phone)} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full justify-center py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    isRTL ? "جارٍ الإرسال..." : "Sending..."
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      {t.store.buy}
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
