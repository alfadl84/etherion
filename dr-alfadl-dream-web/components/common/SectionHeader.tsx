"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("flex flex-col gap-4", alignClass, className)}
    >
      {badge && (
        <div className="section-badge w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {align === "center" && (
        <div className="divider-gold" />
      )}
      {subtitle && (
        <p
          className={cn(
            "text-lg leading-relaxed max-w-2xl",
            dark ? "text-white/70" : "text-navy-700/70",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
