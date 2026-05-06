"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, BookOpen, Calendar, Search, ArrowRight } from "lucide-react";
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
  "from-blue-900 to-navy-900",
  "from-rose-900 to-navy-900",
  "from-purple-900 to-navy-900",
  "from-amber-900 to-navy-900",
  "from-teal-900 to-navy-900",
  "from-orange-900 to-navy-900",
];

export function BlogContent() {
  const { t, isRTL } = useI18n();
  const [search, setSearch] = useState("");

  const filtered = t.blog.articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(t.blog.articles.map((a) => a.category))];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-gradient noise-overlay overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 40% 60%, rgba(201,168,76,0.5) 0%, transparent 60%)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-badge mb-6 mx-auto w-fit">
              <BookOpen className="w-3.5 h-3.5" />
              {t.blog.sectionBadge}
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold text-white mb-5 ${isRTL ? "font-arabic" : "font-display"}`}>
              {t.blog.sectionTitle}
            </h1>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              {t.blog.sectionSubtitle}
            </p>
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isRTL ? "ابحث في المقالات..." : "Search articles..."}
                className="w-full ps-11 pe-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-gold-400 focus:bg-white/15 transition-all"
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="py-6 bg-white border-b border-navy-100/40">
        <div className="container-max flex flex-wrap items-center gap-3">
          <span className="text-navy-500 text-sm font-semibold">
            {isRTL ? "التصنيفات:" : "Categories:"}
          </span>
          {categories.map((cat) => {
            const color = categoryColors[cat] ?? "bg-navy-50 text-navy-700 border-navy-200";
            return (
              <button key={cat} className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-105 ${color}`}>
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-navy-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-navy-300" />
              <p className="text-lg font-semibold">{isRTL ? "لا توجد نتائج" : "No results found"}</p>
            </div>
          ) : (
            <>
              <SectionHeader
                title={search ? (isRTL ? `نتائج البحث عن: "${search}"` : `Results for: "${search}"`) : (isRTL ? "جميع المقالات" : "All Articles")}
                align="center"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {filtered.map((article, i) => {
                  const catColor = categoryColors[article.category] ?? "bg-navy-50 text-navy-700 border-navy-200";
                  return (
                    <AnimatedCard
                      key={i}
                      index={i}
                      className="group rounded-3xl overflow-hidden border border-navy-100/50 hover:border-gold-400/30 shadow-card hover:shadow-card-hover transition-all duration-300 bg-white cursor-pointer"
                    >
                      <div className={`h-48 bg-gradient-to-br ${bgPatterns[i % bgPatterns.length]} relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-14 h-14 text-white/15" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 start-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${catColor}`}>
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-navy-500 text-xs mb-4">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                        </div>
                        <h3 className="text-navy-900 font-bold text-base mb-3 leading-snug group-hover:text-navy-700 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-navy-600/65 text-sm leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                        <button className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-500 transition-colors group/btn">
                          {t.blog.readMore}
                          <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${isRTL ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                    </AnimatedCard>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
