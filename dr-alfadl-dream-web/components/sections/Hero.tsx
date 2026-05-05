"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star, Shield, Award, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const stats = (t: ReturnType<typeof useI18n>["t"]) => [
  { value: t.hero.stat1Value, label: t.hero.stat1Label, icon: Award },
  { value: t.hero.stat2Value, label: t.hero.stat2Label, icon: Star },
  { value: t.hero.stat3Value, label: t.hero.stat3Label, icon: Shield },
  { value: t.hero.stat4Value, label: t.hero.stat4Label, icon: Calendar },
];

export function Hero() {
  const { locale, t, isRTL } = useI18n();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-hero-radial noise-overlay">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.4) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(27,43,75,0.8) 0%, transparent 70%)" }} />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400/30 text-gold-400 text-sm font-medium backdrop-blur-sm"
              style={{ background: "rgba(201,168,76,0.08)" }}>
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              {t.hero.badge}
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 text-white text-balance ${isRTL ? "font-arabic" : "font-display"}`}
          >
            {isRTL ? (
              <>
                <span className="block">التميز في</span>
                <span className="gold-text block mt-2">صحة الجهاز الهضمي</span>
                <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium text-white/80">
                  وجراحة المستقيم بالليزر
                </span>
              </>
            ) : (
              <>
                <span className="block">Excellence in</span>
                <span className="gold-text block mt-2">Digestive Health</span>
                <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-medium text-white/80">
                  & Laser Proctology
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/65 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href={`/${locale}/booking`}
              className="btn-gold group text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              {t.hero.cta}
              <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
            <Link
              href={`/${locale}/services`}
              className="btn-outline-gold text-base px-8 py-4 w-full sm:w-auto justify-center"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap mb-16"
          >
            {[
              { label: isRTL ? "معتمد دوليًا" : "Internationally Certified" },
              { label: isRTL ? "جامعة جازان" : "Jazan University" },
              { label: isRTL ? "لجنة البورد العربي" : "Arab Board Certified" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                <div className="w-1 h-1 rounded-full bg-gold-400" />
                {item.label}
              </div>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats(t).map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-5 sm:p-6 rounded-2xl text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-400/25 transition-colors">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>
                <div className="stat-number text-3xl sm:text-4xl font-bold mb-1">{value}</div>
                <div className="text-white/60 text-xs sm:text-sm font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/30 text-xs"
        >
          <span>{isRTL ? "اسحب للأسفل" : "Scroll"}</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
