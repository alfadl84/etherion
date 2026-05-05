"use client";

import { useI18n } from "@/lib/i18n";
import { LegalPage } from "./LegalPage";

export function PrivacyContent() {
  const { isRTL } = useI18n();

  if (isRTL) {
    return (
      <LegalPage
        badge="القانوني"
        title="سياسة الخصوصية"
        lastUpdated="آخر تحديث: 1 يناير 2025"
        intro="يلتزم مركز د. الفضل للجهاز الهضمي وجراحة المستقيم بالليزر بحماية خصوصيتك. توضح هذه السياسة كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها."
        sections={[
          {
            heading: "المعلومات التي نجمعها",
            body: [
              "نجمع المعلومات التي تقدمها طوعًا عند حجز المواعيد أو التواصل معنا، وتشمل: الاسم، البريد الإلكتروني، رقم الهاتف، والمعلومات الطبية ذات الصلة.",
              "نجمع أيضًا بيانات الاستخدام التلقائية مثل عنوان IP، نوع المتصفح، والصفحات التي تزورها على موقعنا.",
            ],
          },
          {
            heading: "كيفية استخدام معلوماتك",
            body: [
              "نستخدم معلوماتك لتنسيق المواعيد الطبية والتواصل معك بشأن رعايتك الصحية.",
              "لا نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة، إلا عند الضرورة القانونية.",
            ],
          },
          {
            heading: "حماية البيانات",
            body: [
              "نستخدم تشفير SSL ومعايير أمنية صناعية لحماية بياناتك الشخصية والطبية.",
              "تُخزَّن البيانات الطبية وفق متطلبات وزارة الصحة السعودية وبروتوكولات الخصوصية الطبية المعتمدة.",
            ],
          },
          {
            heading: "حقوقك",
            body: [
              "يحق لك طلب الاطلاع على بياناتك الشخصية أو تصحيحها أو حذفها في أي وقت.",
              "للتواصل بشأن طلبات الخصوصية: info@dr-alfadl.com",
            ],
          },
          {
            heading: "ملفات تعريف الارتباط",
            body: [
              "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل حركة الموقع.",
              "يمكنك تعطيل ملفات الارتباط من إعدادات متصفحك، مع الأخذ بعين الاعتبار أن ذلك قد يؤثر على بعض وظائف الموقع.",
            ],
          },
        ]}
      />
    );
  }

  return (
    <LegalPage
      badge="Legal"
      title="Privacy Policy"
      lastUpdated="Last Updated: January 1, 2025"
      intro="Dr. Alfadl Digestive & Laser Proctology Center is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information."
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you voluntarily provide when booking appointments or contacting us, including: name, email address, phone number, and relevant medical information.",
            "We also automatically collect usage data such as IP address, browser type, and pages you visit on our website.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "We use your information to coordinate medical appointments and communicate with you about your healthcare.",
            "We do not share your personal information with third parties without your explicit consent, except when legally required.",
          ],
        },
        {
          heading: "Data Protection",
          body: [
            "We use SSL encryption and industry security standards to protect your personal and medical data.",
            "Medical data is stored in compliance with Saudi Ministry of Health requirements and approved medical privacy protocols.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You have the right to request access to, correction of, or deletion of your personal data at any time.",
            "For privacy requests, contact: info@dr-alfadl.com",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Our website uses cookies to improve user experience and analyze site traffic.",
            "You can disable cookies in your browser settings, though this may affect some website functionality.",
          ],
        },
      ]}
    />
  );
}
