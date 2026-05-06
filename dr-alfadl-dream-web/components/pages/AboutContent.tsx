"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap, Award, BookOpen, Star, Users, Globe,
  Microscope, Heart, ArrowRight, CheckCircle
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";

export function AboutContent() {
  const { locale, t, isRTL } = useI18n();

  const timeline = isRTL ? [
    { year: "2008", event: "التخرج من كلية الطب", detail: "تخرّج بامتياز من كلية الطب" },
    { year: "2010", event: "البورد العربي لأمراض الجهاز الهضمي", detail: "حصل على شهادة البورد العربي المتخصص" },
    { year: "2013", event: "الزمالة الأوروبية لجراحة القولون والمستقيم", detail: "أتمّ زمالته التدريبية في أوروبا" },
    { year: "2015", event: "انضم لجامعة جازان", detail: "أستاذ مساعد في قسم الطب الباطني" },
    { year: "2018", event: "ريادة جراحة المستقيم بالليزر", detail: "أسّس أول مركز ليزر بروكتولوجي في المنطقة" },
    { year: "2025", event: "مركز متكامل للجهاز الهضمي", detail: "يقود اليوم مركزًا شاملًا للرعاية الهضمية" },
  ] : [
    { year: "2008", event: "Medical Degree", detail: "Graduated with distinction from medical school" },
    { year: "2010", event: "Arab Board of Gastroenterology", detail: "Obtained specialized board certification" },
    { year: "2013", event: "European Coloproctology Fellowship", detail: "Completed advanced fellowship training in Europe" },
    { year: "2015", event: "Joined Jazan University", detail: "Appointed Assistant Professor of Internal Medicine" },
    { year: "2018", event: "Pioneered Laser Proctology", detail: "Established the region's first laser proctology program" },
    { year: "2025", event: "Comprehensive Digestive Center", detail: "Leads today's full-spectrum digestive care center" },
  ];

  const achievements = isRTL ? [
    { icon: BookOpen, title: "البحث العلمي", value: "+12 بحثًا منشورًا في مجلات دولية محكّمة" },
    { icon: Users, title: "المرضى", value: "+10,000 مريض تمت معالجتهم بنجاح" },
    { icon: Globe, title: "التدريب الدولي", value: "زمالات في المملكة المتحدة وألمانيا وفرنسا" },
    { icon: Award, title: "الجوائز", value: "جائزة التميز الطبي من الجمعية السعودية لأمراض الجهاز الهضمي" },
    { icon: Microscope, title: "الإجراءات الليزرية", value: "+500 إجراء بالليزر بنجاح تام" },
    { icon: Heart, title: "رضا المرضى", value: "98% نسبة رضا ثابتة عبر السنوات" },
  ] : [
    { icon: BookOpen, title: "Research", value: "12+ papers published in peer-reviewed international journals" },
    { icon: Users, title: "Patients", value: "10,000+ patients successfully treated" },
    { icon: Globe, title: "International Training", value: "Fellowships in the UK, Germany, and France" },
    { icon: Award, title: "Awards", value: "Excellence Award from Saudi Gastroenterology Society" },
    { icon: Microscope, title: "Laser Procedures", value: "500+ laser procedures with outstanding outcomes" },
    { icon: Heart, title: "Patient Satisfaction", value: "98% consistent satisfaction rate year over year" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden noise-overlay">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(201,168,76,0.5) 0%, transparent 60%)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-badge mb-6 mx-auto w-fit">
              <Star className="w-3.5 h-3.5" />
              {isRTL ? "نبذة عن الطبيب" : "About the Doctor"}
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold text-white mb-5 ${isRTL ? "font-arabic" : "font-display"}`}>
              {t.doctor.name}
            </h1>
            <p className="text-gold-400 text-xl font-semibold mb-6">{t.doctor.title}</p>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed">{t.doctor.bio}</p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge={isRTL ? "الإنجازات" : "Achievements"}
            title={isRTL ? "مسيرة التميز" : "A Career of Excellence"}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {achievements.map(({ icon: Icon, title, value }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-cream-50 border border-navy-100/50 hover:border-gold-400/30 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-gradient flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <p className="text-navy-500 text-xs font-semibold uppercase tracking-wide mb-1">{title}</p>
                <p className="text-navy-900 font-bold text-base leading-snug">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-gradient noise-overlay">
        <div className="container-max">
          <SectionHeader
            badge={isRTL ? "المسيرة المهنية" : "Career Journey"}
            title={isRTL ? "خط الزمن المهني" : "Professional Timeline"}
            align="center"
            dark
          />
          <div className="relative mt-14">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-400/20 hidden lg:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`lg:flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-end" : "lg:text-start"}`}>
                    <div className="inline-block bg-gold-gradient text-navy-900 px-4 py-1.5 rounded-full text-sm font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.event}</h3>
                    <p className="text-white/60 text-sm">{item.detail}</p>
                  </div>
                  {/* Dot */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-gold-400 border-4 border-navy-900 z-10 shrink-0" />
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <SectionHeader
            badge={isRTL ? "التخصصات" : "Specialties"}
            title={isRTL ? "مجالات التخصص" : "Areas of Expertise"}
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {t.doctor.specialties.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-navy-100 hover:border-gold-400/40 shadow-card hover:shadow-card-hover transition-all"
              >
                <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-navy-900 font-semibold text-sm">{spec}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href={`/${locale}/booking`} className="btn-gold group">
              {isRTL ? "احجز استشارتك" : "Book Your Consultation"}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
