"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedCard } from "@/components/common/AnimatedCard";

const categoryColors: Record<string, string> = {
  GERD: "bg-blue-50 text-blue-700 border-blue-200",
  Proctology: "bg-rose-50 text-rose-700 border-rose-200",
  IBS: "bg-purple-50 text-purple-700 border-purple-200",
  Liver: "bg-amber-50 text-amber-700 border-amber-200",
  Endoscopy: "bg-teal-50 text-teal-700 border-teal-200",
  IBD: "bg-orange-50 text-orange-700 border-orange-200",
  "الارتجاع المعدي": "bg-blue-50 text-blue-700 border-blue-200",
  "جراحة المستقيم": "bg-rose-50 text-rose-700 border-rose-200",
  "القولون العصبي": "bg-purple-50 text-purple-700 border-purple-200",
  "الكبد": "bg-amber-50 text-amber-700 border-amber-200",
  "التنظير": "bg-teal-50 text-teal-700 border-teal-200",
  "التهاب الأمعاء": "bg-orange-50 text-orange-700 border-orange-200",
};

const bgPatterns = [
  "from-blue-900/40 to-navy-900",
  "from-rose-900/40 to-navy-900",
  "from-purple-900/40 to-navy-900",
  "from-amber-900/40 to-navy-900",
  "from-teal-900/40 to-navy-900",
  "from-orange-900/40 to-navy-900",
];

export function Blog() {
  const { locale, t, isRTL } = useI18n();

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader
          badge={t.blog.sectionBadge}
          title={t.blog.sectionTitle}
          subtitle={t.blog.sectionSubtitle}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {t.blog.articles.map((article, i) => {
            const catColor = categoryColors[article.category] ?? "bg-navy-50 text-navy-700 border-navy-200";
            return (
              <AnimatedCard
                key={i}
                index={i}
                className="group rounded-3xl overflow-hidden border border-navy-100/50 hover:border-gold-400/30 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer bg-white"
              >
                {/* Card Header Image Placeholder */}
                <div className={`h-44 bg-gradient-to-br ${bgPatterns[i % bgPatterns.length]} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${catColor}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-navy-500 text-xs mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-navy-900 font-bold text-base mb-3 leading-snug group-hover:text-navy-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-navy-600/65 text-sm leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/${locale}/blog`}
                    className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-500 transition-colors group/link"
                  >
                    {t.blog.readMore}
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link href={`/${locale}/blog`} className="btn-outline-gold group">
            {isRTL ? "عرض جميع المقالات" : "View All Articles"}
            <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
