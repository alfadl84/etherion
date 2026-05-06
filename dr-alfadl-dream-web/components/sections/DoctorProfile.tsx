"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Star, Award, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function DoctorProfile() {
  const { locale, t, isRTL } = useI18n();

  const credentials = [
    {
      icon: GraduationCap,
      label: isRTL ? "الدكتوراه" : "Board Certified",
      value: isRTL ? "البورد العربي لأمراض الجهاز الهضمي" : "Arab Board of Gastroenterology",
    },
    {
      icon: Award,
      label: isRTL ? "الزمالة الدولية" : "International Fellowship",
      value: isRTL ? "زمالة القولون والمستقيم الأوروبية" : "European Coloproctology Fellowship",
    },
    {
      icon: BookOpen,
      label: isRTL ? "الأستاذية" : "Academia",
      value: t.doctor.university,
    },
    {
      icon: Star,
      label: isRTL ? "الخبرة" : "Experience",
      value: t.doctor.experience,
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-3 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at left, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Doctor Visual */}
          <div className={isRTL ? "order-2" : "order-1"}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Profile Card */}
              <div className="relative rounded-3xl overflow-hidden bg-navy-gradient p-8 shadow-luxury">
                {/* Doctor Avatar Placeholder */}
                <div className="relative flex flex-col items-center text-center mb-8">
                  <div className="w-40 h-40 rounded-full border-4 border-gold-400/40 bg-navy-700 flex items-center justify-center mb-5 relative overflow-hidden shadow-gold">
                    {/* Initials placeholder */}
                    <span className="text-5xl font-bold text-gold-400 font-display">AF</span>
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold-400/20 animate-pulse" />
                  </div>

                  <h3 className="text-white text-2xl font-bold mb-1">{t.doctor.name}</h3>
                  <p className="text-gold-400 text-sm font-medium mb-4 max-w-xs">{t.doctor.title}</p>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                    <span className="text-white/60 text-xs ms-2">5.0 / 5.0</span>
                  </div>
                </div>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {t.doctor.specialties.map((spec, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium text-gold-400 border border-gold-400/30 bg-gold-400/8">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                  {[
                    { value: "15+", label: isRTL ? "سنة" : "Years" },
                    { value: "10K+", label: isRTL ? "مريض" : "Patients" },
                    { value: "12+", label: isRTL ? "بحث" : "Papers" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-gold-400">{item.value}</div>
                      <div className="text-white/50 text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* University Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-card border border-navy-100/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-navy-gradient flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-navy-900 text-xs font-bold">{isRTL ? "جامعة جازان" : "Jazan University"}</p>
                    <p className="text-navy-700/60 text-xs">{isRTL ? "أستاذ مساعد" : "Asst. Professor"}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className={isRTL ? "order-1" : "order-2"}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-badge mb-6">
                <Award className="w-3.5 h-3.5" />
                {isRTL ? "نبذة عن الطبيب" : "About the Doctor"}
              </div>

              <h2 className={`text-4xl sm:text-5xl font-bold text-navy-900 mb-6 leading-tight ${isRTL ? "font-arabic" : "font-display"}`}>
                {t.doctor.name}
              </h2>

              <p className="text-navy-700/70 text-lg leading-relaxed mb-8">
                {t.doctor.bio}
              </p>

              {/* Credentials */}
              <div className="space-y-4 mb-10">
                {credentials.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-cream-50 border border-navy-100/50 hover:border-gold-400/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-navy-gradient flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-700/60 text-xs font-medium mb-0.5">{label}</p>
                      <p className="text-navy-900 font-semibold text-sm">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/about`} className="btn-gold group">
                  {isRTL ? "تعرّف أكثر" : "Learn More"}
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
                </Link>
                <Link href={`/${locale}/booking`} className="btn-outline-gold">
                  {isRTL ? "احجز استشارة" : "Book Consultation"}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
