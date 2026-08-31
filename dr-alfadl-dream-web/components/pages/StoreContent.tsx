"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Package, Shield, Download, Headphones, RefreshCw } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { CheckoutDialog } from "@/components/common/CheckoutDialog";
import { formatPrice } from "@/lib/utils";

const productColors = [
  "from-blue-950/80 to-navy-900",
  "from-purple-950/80 to-navy-900",
  "from-emerald-950/80 to-navy-900",
  "from-amber-950/80 to-navy-900",
  "from-rose-950/80 to-navy-900",
];

const productIcons = [
  (p: { className?: string }) => <Package className={p.className} />,
  (p: { className?: string }) => <RefreshCw className={p.className} />,
  (p: { className?: string }) => <Shield className={p.className} />,
  (p: { className?: string }) => <Download className={p.className} />,
  (p: { className?: string }) => <Headphones className={p.className} />,
];

const paymentMethods = ["Moyasar", "HyperPay", "Apple Pay", "Mada"];

export function StoreContent() {
  const { locale, t, isRTL } = useI18n();
  const [checkoutIndex, setCheckoutIndex] = useState<number | null>(null);

  const guarantees = isRTL ? [
    { icon: Shield, title: "ضمان استرداد 14 يومًا", desc: "غير راضٍ؟ نسترد مبلغك كاملًا" },
    { icon: Download, title: "وصول فوري", desc: "احصل على برنامجك فور الشراء" },
    { icon: Headphones, title: "دعم متخصص", desc: "فريق دعم طبي متاح للمساعدة" },
    { icon: RefreshCw, title: "تحديثات مدى الحياة", desc: "تحديثات مجانية دائمة للبرنامج" },
  ] : [
    { icon: Shield, title: "14-Day Money-Back", desc: "Not satisfied? Full refund guaranteed" },
    { icon: Download, title: "Instant Access", desc: "Get your program immediately after purchase" },
    { icon: Headphones, title: "Expert Support", desc: "Medical support team available to help" },
    { icon: RefreshCw, title: "Lifetime Updates", desc: "Free program updates forever" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-gradient noise-overlay overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 50% 80%, rgba(201,168,76,0.5) 0%, transparent 60%)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-badge mb-6 mx-auto w-fit">
              <ShoppingCart className="w-3.5 h-3.5" />
              {t.store.sectionBadge}
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold text-white mb-5 ${isRTL ? "font-arabic" : "font-display"}`}>
              {t.store.sectionTitle}
            </h1>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.store.sectionSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-10 bg-white border-b border-navy-100/50">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-navy-700" />
                </div>
                <p className="text-navy-900 font-semibold text-sm mb-1">{title}</p>
                <p className="text-navy-500/70 text-xs">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-navy-900 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 70%)" }} />
        <div className="container-max relative z-10">
          <SectionHeader
            badge={isRTL ? "البرامج المتاحة" : "Available Programs"}
            title={isRTL ? "اختر برنامجك الصحي" : "Choose Your Health Program"}
            align="center"
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
            {t.store.products.map((product, i) => {
              const Icon = productIcons[i] ?? productIcons[0];
              const color = productColors[i % productColors.length];
              return (
                <AnimatedCard
                  key={i}
                  index={i}
                  className={`rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${color} group cursor-pointer hover:border-gold-400/30 transition-all duration-300`}
                >
                  <div className="p-7">
                    {/* Tag */}
                    {product.tag && (
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gold-gradient text-navy-900 mb-5">
                        {product.tag}
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-gold-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold text-xl mb-3 leading-snug">{product.title}</h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{product.description}</p>

                    {/* Includes */}
                    <div className="space-y-2 mb-6">
                      {(isRTL
                        ? ["دليل شامل بالـPDF", "خطط وجبات مفصّلة", "متتبع الأعراض", "دعم عبر البريد الإلكتروني"]
                        : ["Comprehensive PDF Guide", "Detailed Meal Plans", "Symptom Tracker", "Email Support"]
                      ).map((item, j) => (
                        <div key={j} className="flex items-center gap-2 text-white/70 text-xs">
                          <Star className="w-3 h-3 text-gold-400 fill-gold-400 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                      ))}
                      <span className="text-white/50 text-xs ms-1">(4.9)</span>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/10">
                      <div>
                        <p className="text-white/50 text-xs mb-0.5">{isRTL ? "السعر" : "Price"}</p>
                        <p className="text-2xl font-bold text-white">
                          {formatPrice(product.price, t.store.currency, locale)}
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setCheckoutIndex(i)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient text-navy-900 text-sm font-bold shadow-gold"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {t.store.buy}
                      </motion.button>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <p className="text-white/40 text-sm">{isRTL ? "طرق الدفع:" : "Payment Methods:"}</p>
            <div className="flex items-center gap-3">
              {paymentMethods.map((m) => (
                <div key={m} className="px-4 py-2 rounded-lg bg-white/8 border border-white/10 text-white/60 text-xs font-semibold">
                  {m}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {checkoutIndex !== null && (
        <CheckoutDialog
          open={checkoutIndex !== null}
          onOpenChange={(next) => !next && setCheckoutIndex(null)}
          productIndex={checkoutIndex}
          productTitle={t.store.products[checkoutIndex].title}
          price={t.store.products[checkoutIndex].price}
        />
      )}
    </>
  );
}
