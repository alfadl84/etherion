"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

interface Section {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  badge: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export function LegalPage({ badge, title, lastUpdated, intro, sections }: LegalPageProps) {
  const { isRTL } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-navy-gradient noise-overlay overflow-hidden">
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-badge mb-6 mx-auto w-fit">{badge}</div>
            <h1 className={`text-4xl sm:text-5xl font-bold text-white mb-4 ${isRTL ? "font-arabic" : "font-display"}`}>
              {title}
            </h1>
            <p className="text-white/50 text-sm">{lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-navy-100/40"
            >
              <p className="text-navy-700/70 text-lg leading-relaxed mb-10 pb-8 border-b border-navy-100/50">
                {intro}
              </p>

              <div className="space-y-10">
                {sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-navy-900 font-bold text-xl mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-gold-gradient text-navy-900 text-sm font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {section.heading}
                    </h2>
                    <div className="space-y-3 ps-11">
                      {section.body.map((para, j) => (
                        <p key={j} className="text-navy-600/70 text-sm leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
