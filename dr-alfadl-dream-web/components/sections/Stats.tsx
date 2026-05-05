"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { isRTL } = useI18n();

  const stats = [
    {
      value: 15,
      suffix: "+",
      label: isRTL ? "سنة خبرة سريرية" : "Years Clinical Experience",
    },
    {
      value: 10000,
      suffix: "+",
      label: isRTL ? "مريض تمت معالجته" : "Patients Treated",
    },
    {
      value: 98,
      suffix: "%",
      label: isRTL ? "رضا المرضى" : "Patient Satisfaction",
    },
    {
      value: 500,
      suffix: "+",
      label: isRTL ? "إجراء ليزر ناجح" : "Laser Procedures",
    },
    {
      value: 3,
      suffix: "",
      label: isRTL ? "مستشفيات معتمدة" : "Partner Hospitals",
    },
    {
      value: 12,
      suffix: "+",
      label: isRTL ? "بحثًا علميًا منشورًا" : "Published Research Papers",
    },
  ];

  return (
    <section className="py-16 bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(rgba(201,168,76,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      <div className="container-max relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="stat-number text-3xl sm:text-4xl font-bold mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
