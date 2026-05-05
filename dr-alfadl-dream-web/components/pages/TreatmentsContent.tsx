"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Eye, ArrowRight, CheckCircle2, Clock, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LaserProctology } from "@/components/sections/LaserProctology";
import { Endoscopy } from "@/components/sections/Endoscopy";
import { SectionHeader } from "@/components/common/SectionHeader";

export function TreatmentsContent() {
  const { locale, t, isRTL } = useI18n();

  const laserConditions = isRTL ? [
    { name: "البواسير (الدرجة الثانية والثالثة والرابعة)", recovery: "3-7 أيام" },
    { name: "الشق الشرجي المزمن", recovery: "7-14 يومًا" },
    { name: "الناسور الشرجي (FiLaC®)", recovery: "5-10 أيام" },
    { name: "الجيب العصعصي", recovery: "7-14 يومًا" },
    { name: "الكيس الشعري", recovery: "5-10 أيام" },
    { name: "الثآليل الشرجية", recovery: "2-5 أيام" },
  ] : [
    { name: "Hemorrhoids (Grade II, III & IV)", recovery: "3–7 days" },
    { name: "Chronic Anal Fissure", recovery: "7–14 days" },
    { name: "Anal Fistula (FiLaC®)", recovery: "5–10 days" },
    { name: "Pilonidal Sinus", recovery: "7–14 days" },
    { name: "Pilonidal Cyst", recovery: "5–10 days" },
    { name: "Anal Condylomata", recovery: "2–5 days" },
  ];

  const comparisons = isRTL ? [
    { aspect: "الألم", traditional: "شديد", laser: "خفيف جدًا" },
    { aspect: "الإقامة في المستشفى", traditional: "1-3 أيام", laser: "بدون إقامة" },
    { aspect: "التخدير", traditional: "عام", laser: "موضعي/منطقي" },
    { aspect: "التعافي", traditional: "4-6 أسابيع", laser: "أيام" },
    { aspect: "الانتكاس", traditional: "أعلى", laser: "أدنى بكثير" },
    { aspect: "تعقيد الجرح", traditional: "شائع", laser: "نادر جدًا" },
  ] : [
    { aspect: "Pain Level", traditional: "Significant", laser: "Minimal" },
    { aspect: "Hospital Stay", traditional: "1–3 Days", laser: "None (Day Case)" },
    { aspect: "Anesthesia", traditional: "General", laser: "Local / Regional" },
    { aspect: "Recovery Time", traditional: "4–6 Weeks", laser: "Days" },
    { aspect: "Recurrence Rate", traditional: "Higher", laser: "Much Lower" },
    { aspect: "Wound Complications", traditional: "Common", laser: "Very Rare" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-gradient noise-overlay overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.6) 0%, transparent 60%)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-badge mb-6 mx-auto w-fit">
              <Zap className="w-3.5 h-3.5" />
              {isRTL ? "العلاجات المتقدمة" : "Advanced Treatments"}
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold text-white mb-5 ${isRTL ? "font-arabic" : "font-display"}`}>
              {isRTL ? "علاجات متطورة بتقنيات حديثة" : "Treatments & Procedures"}
            </h1>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed">
              {isRTL
                ? "من ليزر المستقيم إلى التنظير المتقدم — نقدم طيفًا كاملًا من العلاجات الحديثة لصحة جهازك الهضمي"
                : "From laser proctology to advanced endoscopy — a full spectrum of modern treatments for your digestive health."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Laser Conditions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge={isRTL ? "جراحة المستقيم بالليزر" : "Laser Proctology"}
            title={isRTL ? "الحالات المعالجة بالليزر" : "Conditions Treated with Laser"}
            subtitle={isRTL
              ? "تقنية الليزر الثنائي الحديثة تتيح علاج هذه الحالات دون جراحة تقليدية مؤلمة"
              : "Advanced diode laser technology enables treating these conditions without traditional open surgery."}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {laserConditions.map((cond, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-cream-50 border border-navy-100/50 hover:border-gold-400/30 hover:shadow-card transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-navy-gradient flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-gold-400" />
                </div>
                <div>
                  <p className="text-navy-900 font-semibold text-sm mb-1">{cond.name}</p>
                  <div className="flex items-center gap-1.5 text-navy-500/70 text-xs">
                    <Clock className="w-3 h-3" />
                    {isRTL ? "التعافي:" : "Recovery:"} {cond.recovery}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-navy-gradient noise-overlay">
        <div className="container-max">
          <SectionHeader
            badge={isRTL ? "المقارنة" : "Comparison"}
            title={isRTL ? "الليزر مقابل الجراحة التقليدية" : "Laser vs. Traditional Surgery"}
            align="center"
            dark
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 rounded-3xl overflow-hidden border border-gold-400/15 shadow-luxury"
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-navy-800/80">
              <div className="p-4 text-white/60 text-sm font-semibold">
                {isRTL ? "المعيار" : "Aspect"}
              </div>
              <div className="p-4 text-center text-white/60 text-sm font-semibold border-x border-white/10">
                {isRTL ? "الجراحة التقليدية" : "Traditional Surgery"}
              </div>
              <div className="p-4 text-center text-gold-400 text-sm font-bold">
                {isRTL ? "ليزر د. الفضل" : "Dr. Alfadl Laser"}
              </div>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-white/10 ${i % 2 === 0 ? "bg-white/3" : ""}`}
              >
                <div className="p-4 text-white/80 text-sm font-medium">{row.aspect}</div>
                <div className="p-4 text-center text-red-300/80 text-sm border-x border-white/10">{row.traditional}</div>
                <div className="p-4 text-center">
                  <span className="inline-flex items-center gap-1.5 text-green-400 text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    {row.laser}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full Sections */}
      <LaserProctology />
      <Endoscopy />

      {/* CTA */}
      <section className="py-16 bg-cream-50">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className={`text-3xl font-bold text-navy-900 mb-4 ${isRTL ? "font-arabic" : "font-display"}`}>
              {isRTL ? "جاهز لتحديد موعدك؟" : "Ready to Schedule Your Procedure?"}
            </h2>
            <p className="text-navy-600/70 text-lg mb-8 max-w-xl mx-auto">
              {isRTL
                ? "تحدث مع فريقنا لمعرفة العلاج الأنسب لحالتك"
                : "Talk to our team to determine the right treatment for your condition."}
            </p>
            <Link href={`/${locale}/booking`} className="btn-gold">
              {t.nav.booking}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
