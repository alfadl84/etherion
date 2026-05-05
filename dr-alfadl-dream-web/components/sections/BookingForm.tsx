"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Phone, Mail, User, MessageSquare, Send, CheckCircle, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  service: z.string().min(1),
  date: z.string().min(1),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function BookingForm() {
  const { locale, t, isRTL } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1500));
    console.log("Booking data:", data);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); reset(); }, 5000);
  };

  const inputClass = (error?: boolean) =>
    `w-full px-4 py-3.5 rounded-xl text-navy-900 text-sm font-medium outline-none transition-all duration-200 border ${
      error
        ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-400/30"
        : "border-navy-100/60 bg-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 hover:border-navy-200"
    } placeholder:text-navy-400/60`;

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  return (
    <section id="booking" className="section-padding bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gold-gradient" />

      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className={isRTL ? "order-2" : "order-1"}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-badge mb-6">
                <Calendar className="w-3.5 h-3.5" />
                {t.booking.sectionBadge}
              </div>

              <h2 className={`text-4xl sm:text-5xl font-bold text-navy-900 mb-5 leading-tight ${isRTL ? "font-arabic" : "font-display"}`}>
                {t.booking.sectionTitle}
              </h2>
              <p className="text-navy-700/65 text-lg leading-relaxed mb-10">
                {t.booking.sectionSubtitle}
              </p>

              {/* Contact Options */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: Phone, label: isRTL ? "اتصل بنا" : "Call Us", value: t.footer.phone, href: "tel:+966500000000" },
                  { icon: Mail, label: isRTL ? "البريد الإلكتروني" : "Email", value: t.footer.email, href: `mailto:${t.footer.email}` },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-navy-100/50 hover:border-gold-400/30 shadow-card hover:shadow-card-hover transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy-gradient flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-navy-500 text-xs font-medium">{label}</p>
                      <p className="text-navy-900 font-semibold text-sm" dir="ltr">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/966500000000?text=${encodeURIComponent(isRTL ? "مرحبًا، أريد حجز موعد" : "Hello, I would like to book an appointment")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)", boxShadow: "0 8px 24px rgba(37,211,102,0.4)" }}
              >
                <WhatsAppIcon />
                {t.booking.whatsapp}
              </a>

              {/* Working Hours */}
              <div className="mt-8 p-5 rounded-2xl bg-navy-gradient border border-gold-400/15">
                <h4 className="text-gold-400 font-semibold text-sm mb-3">
                  {isRTL ? "ساعات العمل" : "Working Hours"}
                </h4>
                <div className="space-y-2">
                  {[
                    { days: isRTL ? "السبت – الأربعاء" : "Sat – Wed", hours: "9:00 AM – 7:00 PM" },
                    { days: isRTL ? "الخميس" : "Thursday", hours: "9:00 AM – 3:00 PM" },
                    { days: isRTL ? "الجمعة" : "Friday", hours: isRTL ? "مغلق" : "Closed" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-white/70">{item.days}</span>
                      <span className="text-white font-medium" dir="ltr">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className={isRTL ? "order-1" : "order-2"}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-luxury border border-navy-100/30"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mb-5"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-navy-900 text-xl font-bold mb-2">
                    {isRTL ? "تم إرسال طلبك!" : "Booking Requested!"}
                  </h3>
                  <p className="text-navy-600/70 text-sm max-w-xs">
                    {isRTL
                      ? "سنتواصل معك خلال 24 ساعة لتأكيد موعدك"
                      : "We will contact you within 24 hours to confirm your appointment."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <h3 className="text-navy-900 text-xl font-bold mb-6">
                    {isRTL ? "بيانات الحجز" : "Appointment Details"}
                  </h3>

                  {/* Name */}
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">
                      <User className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                      {t.booking.name}
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
                      className={inputClass(!!errors.name)}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy-700 text-sm font-semibold mb-2">
                        <Mail className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                        {t.booking.email}
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="email@example.com"
                        className={inputClass(!!errors.email)}
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-700 text-sm font-semibold mb-2">
                        <Phone className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                        {t.booking.phone}
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+966 5XX XXX XXX"
                        className={inputClass(!!errors.phone)}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">
                      {t.booking.service}
                    </label>
                    <div className="relative">
                      <select
                        {...register("service")}
                        className={`${inputClass(!!errors.service)} appearance-none pe-10`}
                      >
                        <option value="">{isRTL ? "اختر الخدمة" : "Select a service"}</option>
                        {t.booking.services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute top-1/2 -translate-y-1/2 end-3 w-4 h-4 text-navy-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">
                      <Calendar className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                      {t.booking.date}
                    </label>
                    <input
                      {...register("date")}
                      type="date"
                      className={inputClass(!!errors.date)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-navy-700 text-sm font-semibold mb-2">
                      <MessageSquare className="w-3.5 h-3.5 inline mb-0.5 me-1.5" />
                      {t.booking.message}
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder={isRTL ? "أي تفاصيل إضافية..." : "Any additional details..."}
                      className={`${inputClass()} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-gold w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        {isRTL ? "جارٍ الإرسال..." : "Sending..."}
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.booking.submit}
                      </>
                    )}
                  </motion.button>

                  <p className="text-navy-500/60 text-xs text-center">
                    {isRTL
                      ? "بالإرسال، أنت توافق على سياسة الخصوصية الخاصة بنا"
                      : "By submitting, you agree to our Privacy Policy"}
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
