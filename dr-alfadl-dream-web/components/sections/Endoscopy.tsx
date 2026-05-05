"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Camera, Wifi, Activity, ArrowRight, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const procedureIcons = [Camera, Eye, Wifi, Activity];

export function Endoscopy() {
  const { locale, t, isRTL } = useI18n();

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gold-gradient" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0a1628 0%, transparent 70%)" }} />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Procedures Visual */}
          <div className={isRTL ? "order-2" : "order-1"}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Main Showcase Card */}
              <div className="rounded-3xl bg-navy-900 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-20"
                  style={{ background: "radial-gradient(circle, rgba(201,168,76,0.8) 0%, transparent 70%)" }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center">
                      <Eye className="w-5 h-5 text-navy-900" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">
                        {isRTL ? "تقنية عالية الدقة" : "HD Visualization"}
                      </p>
                      <p className="text-white/50 text-xs">Olympus + Pentax Systems</p>
                    </div>
                  </div>

                  {/* Fake scope display */}
                  <div className="rounded-2xl bg-navy-950/80 border border-white/10 p-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-green-400 text-xs font-mono">● LIVE</span>
                      <span className="text-white/40 text-xs font-mono">4K HD</span>
                    </div>
                    <div className="h-32 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center border border-white/5">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full border-2 border-gold-400/40 flex items-center justify-center mx-auto mb-2">
                          <div className="w-4 h-4 rounded-full bg-gold-400/60" />
                        </div>
                        <p className="text-white/30 text-xs">
                          {isRTL ? "رؤية تنظيرية" : "Endoscopic View"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI Detection Badge */}
                  <div className="flex items-center gap-3 bg-gold-400/10 rounded-xl p-3 border border-gold-400/20">
                    <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    <p className="text-gold-400 text-xs font-semibold">
                      {isRTL ? "الكشف عن السليلات بالذكاء الاصطناعي فعّال" : "AI Polyp Detection Active"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Procedure Cards */}
              <div className="grid grid-cols-2 gap-4">
                {t.endoscopy.procedures.map((proc, i) => {
                  const Icon = procedureIcons[i] ?? Camera;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-cream-50 rounded-2xl p-4 border border-navy-100/50 hover:border-gold-400/30 hover:shadow-card transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-navy-900 group-hover:bg-gold-gradient flex items-center justify-center mb-3 transition-all duration-300">
                        <Icon className="w-4 h-4 text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
                      </div>
                      <p className="text-navy-900 font-semibold text-xs leading-snug">{proc.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className={isRTL ? "order-1" : "order-2"}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="section-badge mb-6">
                <Eye className="w-3.5 h-3.5" />
                {t.endoscopy.badge}
              </div>

              <h2 className={`text-4xl sm:text-5xl font-bold text-navy-900 mb-4 leading-tight ${isRTL ? "font-arabic" : "font-display"}`}>
                {t.endoscopy.title}
              </h2>
              <p className="text-xl text-gold-600 font-semibold mb-6">
                {t.endoscopy.subtitle}
              </p>
              <p className="text-navy-700/70 text-lg leading-relaxed mb-8">
                {t.endoscopy.description}
              </p>

              {/* Procedure List */}
              <div className="space-y-4 mb-10">
                {t.endoscopy.procedures.map((proc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-cream-50 border border-navy-100/50 hover:border-gold-400/30 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-900 text-sm mb-1">{proc.name}</p>
                      <p className="text-navy-700/60 text-sm">{proc.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href={`/${locale}/booking`} className="btn-gold group">
                {t.endoscopy.cta}
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
