import { TranslationKeys } from "@/types";

export const translations: Record<string, TranslationKeys> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      treatments: "Treatments",
      store: "Digital Store",
      aiTools: "AI Tools",
      blog: "Blog",
      booking: "Book Appointment",
      language: "العربية",
    },
    hero: {
      badge: "Saudi Arabia's Premier Digestive & Proctology Center",
      title: "Excellence in Digestive Health & Laser Proctology",
      subtitle:
        "Advanced endoscopic procedures, laser proctology, and comprehensive digestive care — delivered with precision, compassion, and the highest medical standards.",
      cta: "Book Your Consultation",
      ctaSecondary: "Explore Services",
      stat1Value: "15+",
      stat1Label: "Years Experience",
      stat2Value: "10,000+",
      stat2Label: "Patients Treated",
      stat3Value: "98%",
      stat3Label: "Patient Satisfaction",
      stat4Value: "500+",
      stat4Label: "Laser Procedures",
    },
    doctor: {
      name: "Dr. Alfadl Abdulfattah",
      title: "Consultant Gastroenterologist & Laser Proctologist",
      specialties: [
        "Advanced Endoscopy",
        "Laser Proctology",
        "Digestive Disease Management",
        "Colorectal Surgery",
        "Hepatology & Liver Disease",
      ],
      bio: "Dr. Alfadl Abdulfattah is a distinguished Consultant Gastroenterologist and Coloproctologist, serving as Assistant Professor at Jazan University. With over 15 years of expertise in advanced endoscopic procedures and laser proctology, he has pioneered minimally invasive treatments that transform patient outcomes across Saudi Arabia and the region.",
      university: "Assistant Professor, Jazan University",
      experience: "15+ Years of Excellence",
    },
    services: {
      sectionBadge: "Our Specialties",
      sectionTitle: "Comprehensive Digestive & Colorectal Care",
      sectionSubtitle:
        "State-of-the-art treatments combining cutting-edge technology with decades of clinical expertise",
      items: [
        {
          title: "Diagnostic & Therapeutic Endoscopy",
          description:
            "Advanced upper and lower GI endoscopy with therapeutic capabilities including polypectomy, hemostasis, and dilation procedures.",
        },
        {
          title: "Laser Hemorrhoidectomy",
          description:
            "Minimally invasive laser treatment for hemorrhoids offering faster recovery, less pain, and superior outcomes compared to traditional surgery.",
        },
        {
          title: "Colonoscopy & Cancer Screening",
          description:
            "Comprehensive colorectal cancer screening with high-definition colonoscopy and real-time biopsy analysis.",
        },
        {
          title: "Liver Disease & Hepatology",
          description:
            "Expert management of fatty liver disease, hepatitis, cirrhosis, and other hepatic conditions with the latest treatment protocols.",
        },
        {
          title: "IBS & Functional Bowel Disorders",
          description:
            "Evidence-based treatment for irritable bowel syndrome, SIBO, and functional gastrointestinal disorders.",
        },
        {
          title: "GERD & Reflux Management",
          description:
            "Comprehensive evaluation and treatment of gastroesophageal reflux disease, including lifestyle optimization and advanced medical therapy.",
        },
        {
          title: "Anal Fissure Treatment",
          description:
            "Non-surgical and minimally invasive laser treatments for chronic anal fissures with high success rates and minimal recovery time.",
        },
        {
          title: "Pilonidal Sinus Laser Treatment",
          description:
            "Advanced laser-assisted procedures for pilonidal disease offering outpatient treatment with dramatically reduced recurrence rates.",
        },
      ],
    },
    laser: {
      badge: "Advanced Technology",
      title: "Laser Proctology",
      subtitle: "Revolutionizing Colorectal Treatment",
      description:
        "Our laser proctology program represents the pinnacle of modern colorectal care. Using state-of-the-art FiLaC® (Fiber-assisted Laser Ablation of the Crypts) and diode laser technology, we offer treatments that were once impossible with conventional surgery. Patients experience significantly less pain, faster return to normal activities, and dramatically lower complication rates.",
      benefits: [
        "Same-day outpatient procedures",
        "Minimal pain and discomfort",
        "Faster healing — return to work in days",
        "No general anesthesia required",
        "Lower recurrence rates",
        "Suitable for complex cases",
      ],
      cta: "Learn About Laser Treatment",
    },
    endoscopy: {
      badge: "Diagnostic Excellence",
      title: "Advanced Endoscopy Center",
      subtitle: "Seeing What Others Miss",
      description:
        "Our state-of-the-art endoscopy suite features the latest Olympus and Pentax high-definition systems with AI-assisted polyp detection, providing unmatched visualization for accurate diagnosis and treatment.",
      procedures: [
        {
          name: "Upper GI Endoscopy (Gastroscopy)",
          description:
            "Detailed examination of the esophagus, stomach, and duodenum with therapeutic capabilities.",
        },
        {
          name: "Colonoscopy",
          description:
            "High-definition colorectal examination with real-time polyp removal and cancer screening.",
        },
        {
          name: "Capsule Endoscopy",
          description:
            "Non-invasive visualization of the small intestine using wireless capsule technology.",
        },
        {
          name: "ERCP",
          description:
            "Advanced therapeutic endoscopy for bile duct and pancreatic conditions.",
        },
      ],
      cta: "Schedule Endoscopy",
    },
    store: {
      sectionBadge: "Digital Health Programs",
      sectionTitle: "Expert-Crafted Health Programs",
      sectionSubtitle:
        "Scientifically designed digital programs to help you manage your digestive health from home",
      addToCart: "Add to Cart",
      buy: "Get Program",
      currency: "SAR",
      products: [
        {
          title: "GERD Relief Program",
          description:
            "Comprehensive 8-week program to manage acid reflux and GERD through evidence-based dietary and lifestyle changes. Includes meal plans, symptom tracker, and expert guidance.",
          price: 299,
          tag: "Bestseller",
        },
        {
          title: "IBS & Bloating Reset Program",
          description:
            "12-week low-FODMAP guided program developed by Dr. Alfadl for IBS management, featuring personalized meal plans, trigger food identification, and stress management techniques.",
          price: 349,
          tag: "Most Popular",
        },
        {
          title: "Fatty Liver Lifestyle Program",
          description:
            "Clinically-designed 10-week program for non-alcoholic fatty liver disease reversal through nutrition optimization, exercise protocols, and medical monitoring guidance.",
          price: 399,
          tag: "New",
        },
        {
          title: "Colonoscopy Preparation Guide",
          description:
            "Complete step-by-step preparation guide for colonoscopy, including diet instructions, prep medication guidance, and what to expect — reducing anxiety and improving procedure success.",
          price: 99,
          tag: "Essential",
        },
        {
          title: "Hemorrhoid & Fissure Recovery Guide",
          description:
            "Post-procedure recovery program with sitz bath protocols, dietary fiber optimization, pain management strategies, and warning signs to watch for.",
          price: 149,
          tag: "Recovery",
        },
      ],
    },
    aiTools: {
      sectionBadge: "AI-Powered Health",
      sectionTitle: "Intelligent Health Assessment Tools",
      sectionSubtitle:
        "Advanced AI tools to help you understand your digestive health and prepare for your consultation",
      tryNow: "Try Now",
      comingSoon: "Coming Soon",
      tools: [
        {
          title: "AI Symptom Checker",
          description:
            "Describe your digestive symptoms and receive an intelligent preliminary assessment with guidance on urgency and recommended next steps.",
          available: true,
        },
        {
          title: "Colonoscopy Prep Assistant",
          description:
            "Step-by-step AI guide for colonoscopy preparation, answering your questions and helping you follow the preparation protocol correctly.",
          available: true,
        },
        {
          title: "IBS Food Trigger Tracker",
          description:
            "Log your meals and symptoms to identify your personal IBS trigger foods using AI pattern recognition and FODMAP analysis.",
          available: false,
        },
        {
          title: "IBD Flare Risk Tracker",
          description:
            "Monitor your inflammatory bowel disease activity score and predict flare risk using validated clinical indices and AI analysis.",
          available: false,
        },
        {
          title: "Fatty Liver Risk Calculator",
          description:
            "Calculate your NAFLD risk score based on clinical parameters and receive personalized lifestyle recommendations from our AI system.",
          available: false,
        },
      ],
    },
    blog: {
      sectionBadge: "Medical Insights",
      sectionTitle: "Expert Health Knowledge",
      sectionSubtitle:
        "Evidence-based articles by Dr. Alfadl to help you understand and manage your digestive health",
      readMore: "Read Article",
      articles: [
        {
          title: "Understanding GERD: Beyond Antacids",
          excerpt:
            "Gastroesophageal reflux disease affects millions. Learn how modern management goes far beyond over-the-counter antacids and what truly works.",
          category: "GERD",
          date: "March 15, 2025",
          readTime: "8 min read",
        },
        {
          title: "Laser Hemorrhoidectomy: What to Expect",
          excerpt:
            "Modern laser treatment has transformed hemorrhoid surgery. Discover what makes laser proctology superior and how to prepare for your procedure.",
          category: "Proctology",
          date: "February 28, 2025",
          readTime: "6 min read",
        },
        {
          title: "The Low-FODMAP Diet: A Guide for IBS Patients",
          excerpt:
            "IBS affects up to 15% of adults. The low-FODMAP diet offers relief for many — here is a practical guide to implementing it effectively.",
          category: "IBS",
          date: "February 10, 2025",
          readTime: "10 min read",
        },
        {
          title: "Fatty Liver Disease: Early Detection Saves Lives",
          excerpt:
            "Non-alcoholic fatty liver disease is a silent epidemic. Learn the risk factors, how it is diagnosed, and what lifestyle changes can reverse it.",
          category: "Liver",
          date: "January 20, 2025",
          readTime: "7 min read",
        },
        {
          title: "When to Get a Colonoscopy: Screening Guidelines",
          excerpt:
            "Colorectal cancer is highly preventable with proper screening. Understand the latest guidelines and why early detection is critical.",
          category: "Endoscopy",
          date: "January 5, 2025",
          readTime: "5 min read",
        },
        {
          title: "IBD vs IBS: Key Differences Explained",
          excerpt:
            "Inflammatory bowel disease and irritable bowel syndrome are often confused. This guide clarifies the critical differences and what each requires.",
          category: "IBD",
          date: "December 18, 2024",
          readTime: "9 min read",
        },
      ],
    },
    booking: {
      sectionBadge: "Book Your Visit",
      sectionTitle: "Schedule Your Consultation",
      sectionSubtitle:
        "Take the first step toward better digestive health. Book your appointment with Dr. Alfadl today.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Select Service",
      date: "Preferred Date",
      message: "Additional Notes (Optional)",
      submit: "Book Appointment",
      whatsapp: "WhatsApp Us",
      services: [
        "Gastroscopy (Upper Endoscopy)",
        "Colonoscopy",
        "Laser Hemorrhoidectomy",
        "GERD Consultation",
        "IBS Management",
        "Liver Disease Consultation",
        "Anal Fissure Treatment",
        "General Digestive Consultation",
        "Other",
      ],
    },
    footer: {
      description:
        "Dr. Alfadl Digestive & Laser Proctology Center — Saudi Arabia's premier destination for advanced endoscopy and minimally invasive colorectal treatments.",
      quickLinks: "Quick Links",
      services: "Our Services",
      contact: "Contact Us",
      address: "Jazan, Saudi Arabia",
      phone: "+966 5X XXX XXXX",
      email: "info@dr-alfadl.com",
      rights: "© 2025 Dr. Alfadl Digestive & Laser Proctology Center. All rights reserved.",
      disclaimer: "Medical Disclaimer",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    whatsapp: {
      title: "Get Immediate Assistance",
      subtitle:
        "Have questions? Our team is available to help you on WhatsApp, seven days a week.",
      cta: "Chat on WhatsApp",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الدكتور",
      services: "الخدمات",
      treatments: "العلاجات",
      store: "المتجر الرقمي",
      aiTools: "أدوات الذكاء الاصطناعي",
      blog: "المدونة",
      booking: "احجز موعدًا",
      language: "English",
    },
    hero: {
      badge: "المركز الأول للجهاز الهضمي وجراحة المستقيم بالليزر في المملكة",
      title: "التميز في صحة الجهاز الهضمي وجراحة المستقيم بالليزر",
      subtitle:
        "إجراءات تنظيرية متقدمة، وعلاج المستقيم بالليزر، ورعاية شاملة للجهاز الهضمي — بدقة عالية ورحمة حقيقية ووفق أعلى المعايير الطبية.",
      cta: "احجز استشارتك",
      ctaSecondary: "استكشف خدماتنا",
      stat1Value: "+15",
      stat1Label: "سنوات خبرة",
      stat2Value: "+10,000",
      stat2Label: "مريض تم علاجه",
      stat3Value: "98%",
      stat3Label: "رضا المرضى",
      stat4Value: "+500",
      stat4Label: "إجراء بالليزر",
    },
    doctor: {
      name: "د. الفضل عبد الفتاح",
      title: "استشاري أمراض الجهاز الهضمي والقولون والمستقيم وجراحة المستقيم بالليزر",
      specialties: [
        "التنظير المتقدم",
        "جراحة المستقيم بالليزر",
        "علاج أمراض الجهاز الهضمي",
        "جراحة القولون والمستقيم",
        "أمراض الكبد والجهاز الهضمي",
      ],
      bio: "الدكتور الفضل عبد الفتاح استشاري بارز في أمراض الجهاز الهضمي والقولون والمستقيم، وأستاذ مساعد في جامعة جازان. بخبرة تتجاوز 15 عامًا في التنظير المتقدم وجراحة المستقيم بالليزر، رائد في علاجات التدخل الجراحي البسيط التي تحوّل نتائج المرضى في المملكة العربية السعودية والمنطقة.",
      university: "أستاذ مساعد، جامعة جازان",
      experience: "+15 سنة من التميز",
    },
    services: {
      sectionBadge: "تخصصاتنا",
      sectionTitle: "رعاية شاملة للجهاز الهضمي والقولون والمستقيم",
      sectionSubtitle:
        "علاجات متطورة تجمع بين أحدث التقنيات وعقود من الخبرة السريرية",
      items: [
        {
          title: "التنظير التشخيصي والعلاجي",
          description:
            "تنظير متقدم للجهاز الهضمي العلوي والسفلي مع قدرات علاجية تشمل استئصال السليلات والإرقاء والتوسيع.",
        },
        {
          title: "استئصال البواسير بالليزر",
          description:
            "علاج البواسير بالليزر الجراحي البسيط لتعافٍ أسرع وألم أقل ونتائج متفوقة مقارنةً بالجراحة التقليدية.",
        },
        {
          title: "تنظير القولون وفحص السرطان",
          description:
            "فحص شامل للقولون والمستقيم بكاميرات عالية الدقة مع تحليل الخزعة الفوري.",
        },
        {
          title: "أمراض الكبد والجهاز الهضمي",
          description:
            "إدارة متخصصة للكبد الدهني والتهاب الكبد وتليفه وغيرها من الحالات الكبدية بأحدث بروتوكولات العلاج.",
        },
        {
          title: "القولون العصبي والاضطرابات الوظيفية",
          description:
            "علاج القولون العصبي وفرط نمو البكتيريا والاضطرابات الوظيفية في الجهاز الهضمي بأسلوب مبني على الأدلة.",
        },
        {
          title: "علاج الارتجاع المعدي المريئي",
          description:
            "تقييم وعلاج شامل لمرض الارتجاع المعدي المريئي يشمل تحسين نمط الحياة والعلاج الدوائي المتقدم.",
        },
        {
          title: "علاج الشق الشرجي",
          description:
            "علاج الشقوق الشرجية المزمنة بدون جراحة أو بالليزر البسيط بمعدلات نجاح عالية وفترة تعافٍ قصيرة.",
        },
        {
          title: "علاج الجيب العصعصي بالليزر",
          description:
            "إجراءات ليزرية متقدمة لعلاج الجيب العصعصي بطريقة خارجية مع تقليل كبير في معدلات الانتكاس.",
        },
      ],
    },
    laser: {
      badge: "تكنولوجيا متقدمة",
      title: "جراحة المستقيم بالليزر",
      subtitle: "ثورة في علاجات القولون والمستقيم",
      description:
        "يمثل برنامج جراحة المستقيم بالليزر لدينا قمة الرعاية الحديثة للقولون والمستقيم. باستخدام تقنية FiLaC® وأحدث أجهزة الليزر الثنائي، نقدم علاجات كانت مستحيلة في الجراحة التقليدية. يعاني المرضى من ألم أقل بكثير، وعودة أسرع للنشاط الطبيعي، ومعدلات مضاعفات أدنى بشكل ملحوظ.",
      benefits: [
        "إجراءات في نفس اليوم بدون إقامة",
        "حد أدنى من الألم والانزعاج",
        "شفاء أسرع — العودة للعمل خلال أيام",
        "لا يحتاج تخديرًا عامًا",
        "معدلات انتكاس أقل",
        "مناسب للحالات المعقدة",
      ],
      cta: "تعرّف على علاج الليزر",
    },
    endoscopy: {
      badge: "التميز التشخيصي",
      title: "مركز التنظير المتقدم",
      subtitle: "نرى ما يعجز الآخرون عن رؤيته",
      description:
        "يضم مركز التنظير لدينا أحدث أنظمة Olympus وPentax عالية الدقة مع الكشف الذكي عن السليلات بالذكاء الاصطناعي، مما يوفر رؤية لا مثيل لها لتشخيص دقيق وعلاج فعّال.",
      procedures: [
        {
          name: "تنظير الجهاز الهضمي العلوي",
          description: "فحص مفصّل للمريء والمعدة والاثني عشر مع قدرات علاجية.",
        },
        {
          name: "تنظير القولون",
          description: "فحص القولون والمستقيم بدقة عالية مع استئصال السليلات وفحص السرطان.",
        },
        {
          name: "تنظير الكبسولة",
          description: "فحص غير جراحي للأمعاء الدقيقة باستخدام كبسولة لاسلكية.",
        },
        {
          name: "ERCP",
          description: "تنظير علاجي متقدم لحالات القناة الصفراوية والبنكرياس.",
        },
      ],
      cta: "احجز تنظيرًا",
    },
    store: {
      sectionBadge: "البرامج الصحية الرقمية",
      sectionTitle: "برامج صحية من تصميم خبراء",
      sectionSubtitle:
        "برامج رقمية مصممة علميًا لمساعدتك على إدارة صحة جهازك الهضمي من المنزل",
      addToCart: "أضف للسلة",
      buy: "احصل على البرنامج",
      currency: "ريال",
      products: [
        {
          title: "برنامج التعافي من الارتجاع المعدي",
          description:
            "برنامج شامل مدته 8 أسابيع لعلاج الارتجاع الحمضي والـGERD من خلال تغييرات غذائية ونمط حياة قائمة على الأدلة، يشمل خطط وجبات ومتابعة أعراض وإرشادات متخصصة.",
          price: 299,
          tag: "الأكثر مبيعًا",
        },
        {
          title: "برنامج إعادة ضبط القولون العصبي",
          description:
            "برنامج مدته 12 أسبوعًا بنظام FODMAP المنخفض لعلاج القولون العصبي، يشمل خطط وجبات شخصية وتحديد الأطعمة المثيرة وتقنيات إدارة التوتر.",
          price: 349,
          tag: "الأكثر شعبية",
        },
        {
          title: "برنامج نمط حياة الكبد الدهني",
          description:
            "برنامج مدته 10 أسابيع مصمم سريريًا لعكس مرض الكبد الدهني غير الكحولي عبر تحسين التغذية وبروتوكولات التمرين والمراقبة الطبية.",
          price: 399,
          tag: "جديد",
        },
        {
          title: "دليل التحضير لتنظير القولون",
          description:
            "دليل تحضير شامل خطوة بخطوة للتنظير، يشمل إرشادات النظام الغذائي وتوجيهات أدوية التحضير وما يمكن توقعه — للحد من القلق وتحسين نجاح الإجراء.",
          price: 99,
          tag: "أساسي",
        },
        {
          title: "دليل التعافي من البواسير والشقوق",
          description:
            "برنامج تعافٍ ما بعد الإجراء يشمل بروتوكولات الحمام المائي وتحسين الألياف الغذائية واستراتيجيات إدارة الألم والأعراض التحذيرية.",
          price: 149,
          tag: "تعافٍ",
        },
      ],
    },
    aiTools: {
      sectionBadge: "الصحة بالذكاء الاصطناعي",
      sectionTitle: "أدوات تقييم صحية ذكية",
      sectionSubtitle:
        "أدوات ذكاء اصطناعي متقدمة لمساعدتك على فهم صحة جهازك الهضمي والاستعداد لاستشارتك",
      tryNow: "جرّب الآن",
      comingSoon: "قريبًا",
      tools: [
        {
          title: "مدقق الأعراض بالذكاء الاصطناعي",
          description:
            "صِف أعراض جهازك الهضمي واحصل على تقييم أولي ذكي مع إرشادات حول مدى الإلحاح والخطوات التالية الموصى بها.",
          available: true,
        },
        {
          title: "مساعد التحضير لتنظير القولون",
          description:
            "دليل ذكاء اصطناعي خطوة بخطوة للتحضير لتنظير القولون، يجيب على أسئلتك ويساعدك على اتباع بروتوكول التحضير بشكل صحيح.",
          available: true,
        },
        {
          title: "متتبع محفزات أعراض القولون العصبي",
          description:
            "سجّل وجباتك وأعراضك لتحديد الأطعمة المحفزة لديك باستخدام التعرف على الأنماط بالذكاء الاصطناعي وتحليل FODMAP.",
          available: false,
        },
        {
          title: "متتبع مخاطر نوبات التهاب الأمعاء",
          description:
            "راقب نشاط التهاب الأمعاء وتوقع مخاطر النوبات باستخدام مؤشرات سريرية معتمدة وتحليل الذكاء الاصطناعي.",
          available: false,
        },
        {
          title: "حاسبة مخاطر الكبد الدهني",
          description:
            "احسب درجة مخاطر NAFLD بناءً على المعاملات السريرية واحصل على توصيات نمط حياة شخصية من نظام الذكاء الاصطناعي.",
          available: false,
        },
      ],
    },
    blog: {
      sectionBadge: "رؤى طبية",
      sectionTitle: "معرفة صحية متخصصة",
      sectionSubtitle:
        "مقالات مبنية على الأدلة بقلم الدكتور الفضل لمساعدتك على فهم صحة جهازك الهضمي وإدارتها",
      readMore: "اقرأ المقال",
      articles: [
        {
          title: "فهم الارتجاع المعدي: ما وراء مضادات الحموضة",
          excerpt:
            "يؤثر الارتجاع المعدي المريئي على الملايين. تعرّف كيف تتخطى الإدارة الحديثة مضادات الحموضة وما الذي يُحدث فرقًا حقيقيًا.",
          category: "الارتجاع المعدي",
          date: "15 مارس 2025",
          readTime: "8 دقائق قراءة",
        },
        {
          title: "استئصال البواسير بالليزر: ماذا تتوقع",
          excerpt:
            "حوّل علاج الليزر الحديث جراحة البواسير. اكتشف ما يجعل جراحة المستقيم بالليزر متفوقة وكيف تستعد لإجرائك.",
          category: "جراحة المستقيم",
          date: "28 فبراير 2025",
          readTime: "6 دقائق قراءة",
        },
        {
          title: "نظام FODMAP المنخفض: دليل مرضى القولون العصبي",
          excerpt:
            "يؤثر القولون العصبي على 15% من البالغين. نظام FODMAP المنخفض يوفر الراحة للكثيرين — إليك دليلًا عمليًا لتطبيقه بفعالية.",
          category: "القولون العصبي",
          date: "10 فبراير 2025",
          readTime: "10 دقائق قراءة",
        },
        {
          title: "الكبد الدهني: الكشف المبكر ينقذ الأرواح",
          excerpt:
            "مرض الكبد الدهني غير الكحولي وباء صامت. تعرّف على عوامل الخطر وكيف يُشخَّص وما التغييرات في نمط الحياة التي يمكنها عكسه.",
          category: "الكبد",
          date: "20 يناير 2025",
          readTime: "7 دقائق قراءة",
        },
        {
          title: "متى تجري تنظير القولون: إرشادات الفحص",
          excerpt:
            "سرطان القولون والمستقيم قابل للوقاية إلى حد كبير بالفحص المناسب. افهم أحدث الإرشادات ولماذا الاكتشاف المبكر حاسم.",
          category: "التنظير",
          date: "5 يناير 2025",
          readTime: "5 دقائق قراءة",
        },
        {
          title: "التهاب الأمعاء والقولون العصبي: الفروقات الرئيسية",
          excerpt:
            "كثيرًا ما يُخلط بين مرض التهاب الأمعاء والقولون العصبي. يوضح هذا الدليل الفروق الحاسمة وما يحتاجه كل منهما.",
          category: "التهاب الأمعاء",
          date: "18 ديسمبر 2024",
          readTime: "9 دقائق قراءة",
        },
      ],
    },
    booking: {
      sectionBadge: "احجز زيارتك",
      sectionTitle: "جدولة استشارتك",
      sectionSubtitle:
        "اتخذ الخطوة الأولى نحو صحة هضمية أفضل. احجز موعدك مع الدكتور الفضل اليوم.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      service: "اختر الخدمة",
      date: "التاريخ المفضل",
      message: "ملاحظات إضافية (اختياري)",
      submit: "احجز الموعد",
      whatsapp: "تواصل عبر واتساب",
      services: [
        "تنظير الجهاز الهضمي العلوي",
        "تنظير القولون",
        "استئصال البواسير بالليزر",
        "استشارة الارتجاع المعدي",
        "علاج القولون العصبي",
        "استشارة أمراض الكبد",
        "علاج الشق الشرجي",
        "استشارة هضمية عامة",
        "أخرى",
      ],
    },
    footer: {
      description:
        "مركز د. الفضل للجهاز الهضمي وجراحة المستقيم بالليزر — الوجهة الأولى في المملكة العربية السعودية للتنظير المتقدم وعلاجات القولون والمستقيم البسيطة.",
      quickLinks: "روابط سريعة",
      services: "خدماتنا",
      contact: "تواصل معنا",
      address: "جازان، المملكة العربية السعودية",
      phone: "XXXX XXX 966+",
      email: "info@dr-alfadl.com",
      rights: "© 2025 مركز د. الفضل للجهاز الهضمي وجراحة المستقيم بالليزر. جميع الحقوق محفوظة.",
      disclaimer: "إخلاء المسؤولية الطبية",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
    whatsapp: {
      title: "احصل على مساعدة فورية",
      subtitle: "لديك أسئلة؟ فريقنا متاح لمساعدتك على واتساب، سبعة أيام في الأسبوع.",
      cta: "تحدث معنا على واتساب",
    },
  },
};
