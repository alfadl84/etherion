"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Microscope, Zap, Search, Activity, Flame,
  Scissors, Target, ArrowRight, Clock, Shield, CheckCircle
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCard } from "@/components/common/AnimatedCard";

function LiverIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M19 10c0-3.866-3.134-7-7-7S5 6.134 5 10c0 4 3 7 7 9 4-2 7-5 7-9z" />
      <path d="M12 10c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
    </svg>
  );
}

const icons = [
  (p: { className?: string }) => <Microscope className={p.className} />,
  (p: { className?: string }) => <Zap className={p.className} />,
  (p: { className?: string }) => <Search className={p.className} />,
  (p: { className?: string }) => <LiverIcon className={p.className} />,
  (p: { className?: string }) => <Activity className={p.className} />,
  (p: { className?: string }) => <Flame className={p.className} />,
  (p: { className?: string }) => <Scissors className={p.className} />,
  (p: { className?: string }) => <Target className={p.className} />,
];

export function ServicesContent() {
  const { locale, t, isRTL } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-gradient noise-overlay overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(201,168,76,0.5) 0%, transparent 60%)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-badge mb-6 mx-auto w-fit">
              <Microscope className="w-3.5 h-3.5" />
              {t.services.sectionBadge}
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold text-white mb-5 ${isRTL ? "font-arabic" : "font-display"}`}>
              {t.services.sectionTitle}
            </h1>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed">
              {t.services.sectionSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Props Banner */}
      <section className="py-8 bg-gold-gradient">
        <div className="container-max">
          <div className="flex flex-wrap justify-center items-center gap-8 text-navy-900">
            {[
              { icon: Clock, label: isRTL ? "إجراءات في نفس اليوم" : "Same-Day Procedures" },
              { icon: Shield, label: isRTL ? "معايير دولية" : "International Standards" },
              { icon: CheckCircle, label: isRTL ? "98% رضا المرضى" : "98% Patient Satisfaction" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2 font-semibold text-sm">
                <Icon className="w-4 h-4" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.items.map((service, i) => {
              const Icon = icons[i] ?? icons[0];
              return (
                <AnimatedCard
                  key={i}
                  index={i}
                  className="group bg-white rounded-3xl p-8 border border-navy-100/60 hover:border-gold-400/40 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute top-0 end-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />

                  <div className="flex items-start gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-navy-gradient flex items-center justify-center shrink-0 transition-all duration-300">
                      <Icon className="w-7 h-7 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-navy-900 font-bold text-lg leading-snug">{service.title}</h3>
                        <span className="text-3xl font-bold text-navy-100 group-hover:text-gold-400/20 transition-colors leading-none shrink-0 ms-3">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-navy-600/70 text-sm leading-relaxed mb-5">{service.description}</p>
                      <Link
                        href={`/${locale}/booking`}
                        className="inline-flex items-center gap-1.5 text-gold-600 text-sm font-semibold hover:text-gold-500 transition-colors"
                      >
                        {isRTL ? "احجز الآن" : "Book Now"}
                        <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                      </Link>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`text-3xl sm:text-4xl font-bold text-navy-900 mb-4 ${isRTL ? "font-arabic" : "font-display"}`}>
              {isRTL ? "هل أنت مستعد للبدء؟" : "Ready to Get Started?"}
            </h2>
            <p className="text-navy-600/70 text-lg mb-8 max-w-xl mx-auto">
              {isRTL
                ? "احجز استشارتك مع الدكتور الفضل اليوم وابدأ رحلتك نحو صحة هضمية أفضل"
                : "Book your consultation with Dr. Alfadl today and start your journey to better digestive health."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/booking`} className="btn-gold">
                {t.nav.booking}
              </Link>
              <Link href={`/${locale}/treatments`} className="btn-outline-gold">
                {isRTL ? "عرض العلاجات" : "View Treatments"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
