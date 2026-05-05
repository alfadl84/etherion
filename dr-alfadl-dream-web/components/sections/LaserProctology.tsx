"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Clock, Shield, TrendingUp, Heart, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const benefitIcons = [Clock, Zap, TrendingUp, Shield, CheckCircle2, Heart];

export function LaserProctology() {
  const { locale, t, isRTL } = useI18n();

  return (
    <section className="section-padding bg-navy-gradient relative overflow-hidden noise-overlay">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.5) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-8"
          style={{ background: "radial-gradient(circle, rgba(27,43,75,1) 0%, transparent 70%)" }}
        />
        {/* Laser beam effect */}
        <div className="absolute top-1/2 left-0 right-0 h-px opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.8), transparent)" }} />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className={isRTL ? "order-2" : "order-1"}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="section-badge mb-6">
                <Zap className="w-3.5 h-3.5" />
                {t.laser.badge}
              </div>

              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight ${isRTL ? "font-arabic" : "font-display"}`}>
                {t.laser.title}
              </h2>
              <p className="text-xl text-gold-400 font-semibold mb-6">
                {t.laser.subtitle}
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                {t.laser.description}
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {t.laser.benefits.map((benefit, i) => {
                  const Icon = benefitIcons[i] ?? CheckCircle2;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 hover:border-gold-400/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gold-400/15 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <span className="text-white/85 text-sm font-medium">{benefit}</span>
                    </motion.div>
                  );
                })}
              </div>

              <Link href={`/${locale}/treatments`} className="btn-gold group">
                {t.laser.cta}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className={`${isRTL ? "order-1" : "order-2"} flex justify-center`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md"
            >
              {/* Main Card */}
              <div className="rounded-3xl overflow-hidden border border-gold-400/20 shadow-luxury"
                style={{ background: "linear-gradient(135deg, rgba(27,43,75,0.9) 0%, rgba(10,22,40,0.95) 100%)" }}>
                {/* Top Section with Laser Visual */}
                <div className="relative h-48 bg-navy-900/50 flex items-center justify-center overflow-hidden">
                  {/* Laser rings */}
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.3 + i * 0.2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="absolute rounded-full border border-gold-400/40"
                      style={{ width: `${80 + i * 40}px`, height: `${80 + i * 40}px` }}
                    />
                  ))}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold animate-glow">
                    <Zap className="w-8 h-8 text-navy-900" />
                  </div>
                  {/* Laser beam lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[0, 45, 90, 135].map((angle) => (
                      <div
                        key={angle}
                        className="absolute w-full h-px"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
                          transform: `rotate(${angle}deg)`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="p-6 space-y-3">
                  <h3 className="text-white font-bold text-lg mb-4">
                    {isRTL ? "تقنية FiLaC® بالليزر الثنائي" : "FiLaC® Diode Laser Technology"}
                  </h3>
                  {[
                    { label: isRTL ? "الليزر الثنائي 980nm" : "980nm Diode Laser", value: "100%" },
                    { label: isRTL ? "إجراءات في نفس اليوم" : "Same-day Procedures", value: "✓" },
                    { label: isRTL ? "لا تخدير عام" : "No General Anesthesia", value: "✓" },
                    { label: isRTL ? "معدل النجاح" : "Success Rate", value: "96%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/70 text-sm">{item.label}</span>
                      <span className="text-gold-400 font-bold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-gold-gradient rounded-2xl p-4 shadow-gold"
              >
                <p className="text-navy-900 text-xs font-bold">
                  {isRTL ? "تقنية معتمدة" : "Certified Technology"}
                </p>
                <p className="text-navy-900/70 text-xs">CE & FDA Approved</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
