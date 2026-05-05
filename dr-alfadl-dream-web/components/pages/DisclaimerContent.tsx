"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LegalPage } from "./LegalPage";

export function DisclaimerContent() {
  const { isRTL } = useI18n();

  const banner = (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4 mb-10 max-w-3xl mx-auto">
      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
        <AlertTriangle className="w-5 h-5 text-amber-700" />
      </div>
      <p className="text-amber-800 text-sm leading-relaxed">
        {isRTL
          ? "هذا الموقع يُقدّم معلومات طبية تعليمية فقط. إنه لا يُشكّل تشخيصًا طبيًا أو وصفة علاجية. استشر طبيبك دائمًا قبل اتخاذ أي قرار طبي."
          : "This website provides educational medical information only. It does not constitute a medical diagnosis or prescription. Always consult your physician before making any medical decision."}
      </p>
    </div>
  );

  if (isRTL) {
    return (
      <>
        <LegalPage
          badge="القانوني"
          title="إخلاء المسؤولية الطبية"
          lastUpdated="آخر تحديث: 1 يناير 2025"
          intro="يُرجى قراءة هذا الإخلاء من المسؤولية بعناية قبل استخدام أي محتوى أو أداة على موقع مركز د. الفضل للجهاز الهضمي وجراحة المستقيم بالليزر."
          sections={[
            { heading: "ليس بديلاً عن الاستشارة الطبية", body: ["المحتوى الوارد في هذا الموقع، بما في ذلك المقالات وأدوات الذكاء الاصطناعي والبرامج الصحية، هو لأغراض تعليمية وتوعوية فقط.", "لا يُشكّل هذا المحتوى تشخيصًا طبيًا أو وصفة علاجية أو توصية طبية فردية.", "يجب استشارة طبيب مؤهل دائمًا قبل البدء في أي علاج أو تغيير في نمط الحياة."] },
            { heading: "أدوات الذكاء الاصطناعي", body: ["أدوات الذكاء الاصطناعي المتاحة على الموقع هي أدوات تعليمية فقط ولا تُقدّم تشخيصًا طبيًا.", "نتائج هذه الأدوات لا تُغني عن الفحص السريري والتقييم الطبي المتخصص."] },
            { heading: "حالات الطوارئ", body: ["في حال وجود حالة طبية طارئة، اتصل فورًا بالإسعاف أو اذهب لأقرب طوارئ مستشفى.", "لا تعتمد على هذا الموقع أو أدواته في حالات الطوارئ."] },
            { heading: "دقة المعلومات", body: ["نسعى جاهدين لتقديم معلومات دقيقة ومحدّثة، إلا أن الطب علم متطور باستمرار.", "المعلومات الواردة قد لا تعكس دائمًا أحدث المستجدات الطبية، وقد تختلف التوصيات من حالة لأخرى."] },
            { heading: "المنتجات الرقمية", body: ["البرامج الصحية الرقمية هي إرشادات عامة مبنية على أدلة طبية، وليست علاجات فردية مخصصة.", "يجب مناقشة أي برنامج صحي مع طبيبك قبل تطبيقه، خاصةً إذا كنت تعاني من حالات طبية مزمنة."] },
          ]}
        />
        <div className="container-max -mt-8 pb-12">{banner}</div>
      </>
    );
  }

  return (
    <>
      <LegalPage
        badge="Legal"
        title="Medical Disclaimer"
        lastUpdated="Last Updated: January 1, 2025"
        intro="Please read this disclaimer carefully before using any content or tool on the Dr. Alfadl Digestive & Laser Proctology Center website."
        sections={[
          { heading: "Not a Substitute for Medical Advice", body: ["Content on this website, including articles, AI tools, and health programs, is for educational and awareness purposes only.", "This content does not constitute a medical diagnosis, prescription, or individual medical recommendation.", "A qualified physician must always be consulted before starting any treatment or lifestyle change."] },
          { heading: "AI Tools", body: ["AI tools available on the website are educational tools only and do not provide medical diagnosis.", "Results from these tools do not replace clinical examination and specialist medical evaluation."] },
          { heading: "Medical Emergencies", body: ["In case of a medical emergency, call emergency services immediately or go to the nearest hospital emergency department.", "Do not rely on this website or its tools in emergency situations."] },
          { heading: "Accuracy of Information", body: ["We strive to provide accurate and up-to-date information, but medicine is a constantly evolving science.", "Information provided may not always reflect the latest medical developments, and recommendations may vary from case to case."] },
          { heading: "Digital Products", body: ["Digital health programs are general evidence-based guidelines, not individualized treatments.", "Any health program should be discussed with your physician before implementation, especially if you have chronic medical conditions."] },
        ]}
      />
      <div className="container-max -mt-8 pb-12">{banner}</div>
    </>
  );
}
