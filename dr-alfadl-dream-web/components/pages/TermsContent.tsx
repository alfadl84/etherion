"use client";

import { useI18n } from "@/lib/i18n";
import { LegalPage } from "./LegalPage";

export function TermsContent() {
  const { isRTL } = useI18n();

  if (isRTL) {
    return (
      <LegalPage
        badge="القانوني"
        title="شروط الخدمة"
        lastUpdated="آخر تحديث: 1 يناير 2025"
        intro="باستخدامك لموقع مركز د. الفضل للجهاز الهضمي وجراحة المستقيم بالليزر وخدماته، فإنك توافق على هذه الشروط والأحكام."
        sections={[
          { heading: "قبول الشروط", body: ["باستخدام هذا الموقع أو أي من خدماتنا، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.", "نحتفظ بحق تعديل هذه الشروط في أي وقت، وسنُخطرك بأي تغييرات جوهرية."] },
          { heading: "الخدمات الطبية", body: ["الخدمات الطبية المقدمة تخضع للوائح وزارة الصحة السعودية والمتطلبات التنظيمية المعمول بها.", "يجب أن يكون المرضى صادقين في تقديم تاريخهم الطبي والأعراض لضمان الرعاية المناسبة."] },
          { heading: "المنتجات الرقمية", body: ["عند شراء أي برنامج رقمي، تحصل على ترخيص شخصي غير قابل للتحويل للاستخدام الفردي.", "يُحظر إعادة بيع أو توزيع أي من محتوياتنا الرقمية دون إذن كتابي مسبق."] },
          { heading: "إخلاء المسؤولية الرقمية", body: ["أدوات الذكاء الاصطناعي والمحتوى الصحي على الموقع هي للأغراض التعليمية فقط ولا تُشكّل استشارة طبية.", "القرارات الطبية يجب دائمًا اتخاذها بالتشاور مع الطبيب المختص."] },
          { heading: "الملكية الفكرية", body: ["جميع المحتويات على هذا الموقع — بما في ذلك النصوص والصور والبرامج — محمية بموجب قوانين حقوق الملكية الفكرية السعودية والدولية.", "يُحظر نسخ أي محتوى أو استخدامه تجاريًا دون إذن صريح."] },
          { heading: "القانون الحاكم", body: ["تخضع هذه الشروط وتُفسَّر وفقًا لقوانين المملكة العربية السعودية.", "أي نزاع يُحال إلى المحاكم السعودية المختصة في منطقة جازان."] },
        ]}
      />
    );
  }

  return (
    <LegalPage
      badge="Legal"
      title="Terms of Service"
      lastUpdated="Last Updated: January 1, 2025"
      intro="By using the Dr. Alfadl Digestive & Laser Proctology Center website and services, you agree to these terms and conditions."
      sections={[
        { heading: "Acceptance of Terms", body: ["By using this website or any of our services, you agree to be bound by these terms. If you do not agree, please do not use our services.", "We reserve the right to modify these terms at any time and will notify you of any material changes."] },
        { heading: "Medical Services", body: ["Medical services provided are subject to Saudi Ministry of Health regulations and applicable regulatory requirements.", "Patients must be truthful in providing their medical history and symptoms to ensure appropriate care."] },
        { heading: "Digital Products", body: ["When purchasing any digital program, you receive a personal, non-transferable license for individual use only.", "Reselling or distributing any of our digital content without prior written permission is strictly prohibited."] },
        { heading: "Digital Disclaimer", body: ["AI tools and health content on the website are for educational purposes only and do not constitute medical advice.", "Medical decisions must always be made in consultation with a qualified physician."] },
        { heading: "Intellectual Property", body: ["All content on this website — including text, images, and programs — is protected under Saudi and international intellectual property laws.", "Copying or commercial use of any content without explicit permission is prohibited."] },
        { heading: "Governing Law", body: ["These terms are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia.", "Any disputes shall be referred to the competent Saudi courts in the Jazan region."] },
      ]}
    />
  );
}
