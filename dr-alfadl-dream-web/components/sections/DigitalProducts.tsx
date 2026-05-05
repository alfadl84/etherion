"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Package, ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { formatPrice } from "@/lib/utils";

const productColors = [
  { bg: "from-blue-950 to-navy-900", accent: "text-blue-300", border: "border-blue-500/20" },
  { bg: "from-purple-950 to-navy-900", accent: "text-purple-300", border: "border-purple-500/20" },
  { bg: "from-emerald-950 to-navy-900", accent: "text-emerald-300", border: "border-emerald-500/20" },
  { bg: "from-amber-950 to-navy-900", accent: "text-amber-300", border: "border-amber-500/20" },
  { bg: "from-rose-950 to-navy-900", accent: "text-rose-300", border: "border-rose-500/20" },
];

const paymentMethods = [
  { name: "Moyasar", logo: "M" },
  { name: "HyperPay", logo: "H" },
  { name: "Apple Pay", logo: "⊕" },
  { name: "Mada", logo: "م" },
];

export function DigitalProducts() {
  const { locale, t, isRTL } = useI18n();

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)" }} />
      </div>

      <div className="container-max relative z-10">
        <SectionHeader
          badge={t.store.sectionBadge}
          title={t.store.sectionTitle}
          subtitle={t.store.sectionSubtitle}
          align="center"
          dark
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {t.store.products.map((product, i) => {
            const colors = productColors[i % productColors.length];
            return (
              <AnimatedCard
                key={i}
                index={i}
                className={`relative rounded-3xl overflow-hidden border ${colors.border} bg-gradient-to-br ${colors.bg} group cursor-pointer`}
              >
                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-gradient text-navy-900">
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 p-7">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-5">
                    <Package className={`w-7 h-7 ${colors.accent}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                    ))}
                    <span className="text-white/50 text-xs ms-1">(4.9)</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">
                        {isRTL ? "السعر" : "Price"}
                      </p>
                      <p className="text-2xl font-bold text-white">
                        {formatPrice(product.price, t.store.currency, locale)}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient text-navy-900 text-sm font-bold shadow-gold transition-shadow hover:shadow-lg"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {t.store.buy}
                    </motion.button>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}

          {/* View All Card */}
          <AnimatedCard
            index={t.store.products.length}
            className="rounded-3xl border border-gold-400/20 flex items-center justify-center p-8 cursor-pointer group hover:bg-gold-400/5 transition-colors"
            style={{ minHeight: "280px" } as React.CSSProperties}
          >
            <Link href={`/${locale}/store`} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-400/20 transition-colors">
                <Sparkles className="w-7 h-7 text-gold-400" />
              </div>
              <p className="text-white font-semibold mb-2">
                {isRTL ? "عرض جميع البرامج" : "View All Programs"}
              </p>
              <p className="text-white/50 text-sm">
                {isRTL ? "اكتشف برامجنا الرقمية الكاملة" : "Discover our full digital library"}
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-gold-400 text-sm font-semibold">
                {isRTL ? "المتجر" : "Visit Store"}
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              </div>
            </Link>
          </AnimatedCard>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-white/40 text-sm">
            {isRTL ? "طرق الدفع المقبولة:" : "Accepted Payment Methods:"}
          </p>
          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="px-4 py-2 rounded-lg bg-white/8 border border-white/10 text-white/60 text-xs font-semibold hover:bg-white/12 transition-colors"
              >
                {method.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
