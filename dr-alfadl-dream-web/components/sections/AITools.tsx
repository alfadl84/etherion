"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Cpu, Activity, AlertTriangle, Calculator, ArrowRight, Zap, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCard } from "@/components/common/AnimatedCard";

const toolIcons = [Brain, Cpu, Activity, AlertTriangle, Calculator];

export function AITools() {
  const { locale, t, isRTL } = useI18n();

  return (
    <section className="section-padding bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-navy-gradient" />
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, rgba(10,22,40,0.04) 0%, transparent 60%)",
        }} />

      <div className="container-max relative z-10">
        <SectionHeader
          badge={t.aiTools.sectionBadge}
          title={t.aiTools.sectionTitle}
          subtitle={t.aiTools.sectionSubtitle}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {t.aiTools.tools.map((tool, i) => {
            const Icon = toolIcons[i] ?? Brain;
            return (
              <AnimatedCard
                key={i}
                index={i}
                className={`relative group rounded-3xl border p-6 transition-all duration-300 overflow-hidden ${
                  tool.available
                    ? "bg-white border-navy-100/60 hover:border-gold-400/40 shadow-card hover:shadow-card-hover cursor-pointer"
                    : "bg-white/60 border-navy-100/30 cursor-default"
                }`}
              >
                {/* Available badge */}
                {tool.available ? (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-700 text-xs font-semibold">
                      {isRTL ? "متاح الآن" : "Live"}
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                    <Lock className="w-3 h-3 text-amber-600" />
                    <span className="text-amber-700 text-xs font-semibold">
                      {t.aiTools.comingSoon}
                    </span>
                  </div>
                )}

                {/* AI Neural Network Background Visual */}
                {tool.available && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-30"
                      style={{ background: "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)" }} />
                  </div>
                )}

                <div className={`relative z-10 ${!tool.available ? "opacity-60" : ""}`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    tool.available
                      ? "bg-navy-50 group-hover:bg-navy-gradient"
                      : "bg-navy-50/50"
                  }`}>
                    <Icon className={`w-7 h-7 transition-colors duration-300 ${
                      tool.available
                        ? "text-navy-700 group-hover:text-gold-400"
                        : "text-navy-400"
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-navy-900 font-bold text-lg mb-3 leading-snug">
                    {tool.title}
                  </h3>
                  <p className="text-navy-700/60 text-sm leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  {/* AI Badge */}
                  <div className="flex items-center gap-2 mb-5">
                    <Cpu className="w-3.5 h-3.5 text-navy-400" />
                    <span className="text-navy-500 text-xs">
                      {isRTL ? "مدعوم بالذكاء الاصطناعي" : "AI-Powered"}
                    </span>
                  </div>

                  {/* CTA */}
                  {tool.available ? (
                    <Link
                      href={`/${locale}/ai-tools`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-navy-900 transition-all duration-200 bg-gold-gradient hover:shadow-gold"
                    >
                      <Zap className="w-4 h-4" />
                      {t.aiTools.tryNow}
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-navy-400 border border-navy-200/50 bg-navy-50/50">
                      <Lock className="w-4 h-4" />
                      {t.aiTools.comingSoon}
                    </div>
                  )}
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 rounded-3xl bg-navy-gradient p-8 sm:p-10 text-center border border-gold-400/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.5) 0%, transparent 60%)" }} />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4 shadow-gold">
              <Brain className="w-6 h-6 text-navy-900" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">
              {isRTL ? "هل تريد استشارة طبية سريعة؟" : "Want a Quick Medical Assessment?"}
            </h3>
            <p className="text-white/65 text-base mb-6 max-w-2xl mx-auto">
              {isRTL
                ? "جرّب أدواتنا الذكية للحصول على تقييم أولي لأعراضك قبل زيارة الطبيب"
                : "Try our AI tools for a preliminary assessment of your symptoms before your consultation"}
            </p>
            <Link href={`/${locale}/ai-tools`} className="btn-gold group">
              {isRTL ? "استكشف الأدوات" : "Explore AI Tools"}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
