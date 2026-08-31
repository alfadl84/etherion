"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Microscope, Zap, Search, Activity, Flame,
  Scissors, Target, ArrowRight
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCard } from "@/components/common/AnimatedCard";

// Use a valid lucide icon for Liver fallback
function LiverIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M19 10c0-3.866-3.134-7-7-7S5 6.134 5 10c0 4 3 7 7 9 4-2 7-5 7-9z" />
      <path d="M12 10c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
    </svg>
  );
}

const icons = [
  ({ className }: { className?: string }) => <Microscope className={className} />,
  ({ className }: { className?: string }) => <Zap className={className} />,
  ({ className }: { className?: string }) => <Search className={className} />,
  ({ className }: { className?: string }) => <LiverIcon className={className} />,
  ({ className }: { className?: string }) => <Activity className={className} />,
  ({ className }: { className?: string }) => <Flame className={className} />,
  ({ className }: { className?: string }) => <Scissors className={className} />,
  ({ className }: { className?: string }) => <Target className={className} />,
];

export function Services() {
  const { locale, t, isRTL } = useI18n();

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-max">
        <SectionHeader
          badge={t.services.sectionBadge}
          title={t.services.sectionTitle}
          subtitle={t.services.sectionSubtitle}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {t.services.items.map((service, i) => {
            const Icon = icons[i] ?? icons[0];
            return (
              <AnimatedCard
                key={i}
                index={i}
                className="group relative bg-white rounded-2xl p-6 border border-navy-100/50 hover:border-gold-400/30 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-navy-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-navy-50 group-hover:text-white/10 transition-colors duration-300 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-gold-400/15 flex items-center justify-center mb-5 transition-all duration-300">
                    <Icon className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-navy-900 group-hover:text-white mb-3 leading-snug transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-navy-700/65 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link
            href={`/${locale}/services`}
            className="btn-navy group"
          >
            {isRTL ? "عرض جميع الخدمات" : "View All Services"}
            <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
