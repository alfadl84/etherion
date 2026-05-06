"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Activity, AlertTriangle, Calculator, Zap, Lock, Send, Bot, User, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "@/components/common/SectionHeader";

const toolIcons = [Brain, Cpu, Activity, AlertTriangle, Calculator];

type Message = { role: "user" | "bot"; text: string };

function SymptomCheckerDemo({ isRTL }: { isRTL: boolean }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: isRTL
        ? "مرحبًا! أنا مساعد فحص الأعراض. صِف أعراضك وسأقدم لك تقييمًا أوليًا. تذكّر: هذا لا يُغني عن الاستشارة الطبية."
        : "Hello! I'm the symptom checker assistant. Describe your symptoms and I'll provide a preliminary assessment. Remember: this does not replace medical consultation.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const demoResponses = isRTL
    ? [
        "بناءً على الأعراض التي وصفتها، قد تكون مرتبطة بالجهاز الهضمي. أنصح بمراجعة الطبيب للتقييم الكامل.",
        "هذه الأعراض شائعة وقد تشير لعدة حالات. من المهم إجراء فحص دقيق لتشخيص صحيح.",
        "يُنصح بعدم تأخير زيارة الطبيب. احجز استشارتك مع الدكتور الفضل للحصول على تقييم متخصص.",
      ]
    : [
        "Based on the symptoms you described, this may be related to the gastrointestinal system. I recommend seeing a doctor for a full evaluation.",
        "These symptoms are common and may indicate several conditions. An accurate examination is important for correct diagnosis.",
        "It is advisable not to delay your doctor visit. Book a consultation with Dr. Alfadl for a specialized assessment.",
      ];

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    const response = demoResponses[Math.floor(Math.random() * demoResponses.length)];
    setMessages((prev) => [...prev, { role: "bot", text: response }]);
    setLoading(false);
  };

  return (
    <div className="rounded-2xl border border-navy-100/60 overflow-hidden bg-white shadow-card">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 bg-navy-gradient border-b border-white/10">
        <div className="w-8 h-8 rounded-xl bg-gold-gradient flex items-center justify-center">
          <Brain className="w-4 h-4 text-navy-900" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{isRTL ? "مدقق الأعراض بالذكاء الاصطناعي" : "AI Symptom Checker"}</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-xs">{isRTL ? "متاح" : "Online"}</span>
          </div>
        </div>
        <div className="ms-auto px-2.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
          {isRTL ? "تجريبي" : "Demo"}
        </div>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto p-4 space-y-3 bg-cream-50">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "bot" ? "bg-navy-gradient" : "bg-gold-gradient"
              }`}>
                {msg.role === "bot" ? <Bot className="w-3.5 h-3.5 text-gold-400" /> : <User className="w-3.5 h-3.5 text-navy-900" />}
              </div>
              <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === "bot"
                  ? "bg-white text-navy-900 border border-navy-100/50 shadow-sm"
                  : "bg-navy-gradient text-white"
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-navy-gradient flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-gold-400" />
              </div>
              <div className="bg-white border border-navy-100/50 rounded-2xl px-4 py-2.5 flex items-center gap-1">
                {[0, 1, 2].map((j) => (
                  <motion.div key={j} animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.15 }}
                    className="w-1.5 h-1.5 rounded-full bg-navy-400" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-navy-100/40 bg-white flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={isRTL ? "اكتب أعراضك هنا..." : "Describe your symptoms..."}
          className="flex-1 px-4 py-2.5 rounded-xl border border-navy-100/60 text-navy-900 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all placeholder:text-navy-400/60"
          dir={isRTL ? "rtl" : "ltr"}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center disabled:opacity-50 shrink-0"
        >
          <Send className="w-4 h-4 text-navy-900" />
        </button>
      </div>
    </div>
  );
}

export function AIToolsContent() {
  const { t, isRTL } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-gradient noise-overlay overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 60% 40%, rgba(201,168,76,0.5) 0%, transparent 60%)" }} />
        <div className="container-max relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-badge mb-6 mx-auto w-fit">
              <Cpu className="w-3.5 h-3.5" />
              {t.aiTools.sectionBadge}
            </div>
            <h1 className={`text-5xl sm:text-6xl font-bold text-white mb-5 ${isRTL ? "font-arabic" : "font-display"}`}>
              {t.aiTools.sectionTitle}
            </h1>
            <p className="text-white/65 text-lg max-w-3xl mx-auto leading-relaxed">{t.aiTools.sectionSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-4">
        <div className="container-max flex items-center gap-3 text-amber-800">
          <Info className="w-5 h-5 shrink-0 text-amber-600" />
          <p className="text-sm">
            {isRTL
              ? "هذه الأدوات للأغراض التعليمية والتوعوية فقط ولا تُغني عن الاستشارة الطبية المتخصصة. تواصل مع الدكتور الفضل للحصول على تشخيص دقيق."
              : "These tools are for educational and awareness purposes only and do not replace specialist medical consultation. Contact Dr. Alfadl for accurate diagnosis."}
          </p>
        </div>
      </div>

      {/* Demo Tool */}
      <section className="section-padding bg-cream-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                badge={isRTL ? "تجربة مباشرة" : "Live Demo"}
                title={isRTL ? "مدقق الأعراض بالذكاء الاصطناعي" : "AI Symptom Checker"}
                subtitle={isRTL
                  ? "اكتب أعراضك وسيقدم لك النظام تقييمًا أوليًا مع توصيات"
                  : "Type your symptoms and the system provides a preliminary assessment with recommendations."}
                align={isRTL ? "right" : "left"}
              />
              <div className="mt-8 space-y-3">
                {[
                  isRTL ? "متاح على مدار الساعة" : "Available 24/7",
                  isRTL ? "ردود في ثوانٍ" : "Instant responses",
                  isRTL ? "يدعم اللغة العربية والإنجليزية" : "Arabic & English support",
                  isRTL ? "مبني على دليل طبي معتمد" : "Based on validated medical evidence",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-navy-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gold-400/20 flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-gold-600" />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
            <SymptomCheckerDemo isRTL={isRTL} />
          </div>
        </div>
      </section>

      {/* All Tools */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge={isRTL ? "جميع الأدوات" : "All Tools"}
            title={isRTL ? "مجموعة أدوات الذكاء الاصطناعي" : "Full AI Tool Suite"}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {t.aiTools.tools.map((tool, i) => {
              const Icon = toolIcons[i] ?? Brain;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`rounded-3xl p-6 border transition-all ${
                    tool.available
                      ? "bg-white border-navy-100/60 hover:border-gold-400/40 shadow-card hover:shadow-card-hover"
                      : "bg-cream-50/60 border-navy-100/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      tool.available ? "bg-navy-gradient" : "bg-navy-50"
                    }`}>
                      <Icon className={`w-6 h-6 ${tool.available ? "text-gold-400" : "text-navy-300"}`} />
                    </div>
                    {tool.available ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {isRTL ? "متاح" : "Live"}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">
                        <Lock className="w-3 h-3" />
                        {t.aiTools.comingSoon}
                      </span>
                    )}
                  </div>
                  <h3 className={`font-bold text-base mb-2 ${tool.available ? "text-navy-900" : "text-navy-500"}`}>
                    {tool.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${tool.available ? "text-navy-600/70" : "text-navy-400/60"}`}>
                    {tool.description}
                  </p>
                  {tool.available && (
                    <button className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-gradient text-navy-900 text-sm font-bold">
                      <Zap className="w-4 h-4" />
                      {t.aiTools.tryNow}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
