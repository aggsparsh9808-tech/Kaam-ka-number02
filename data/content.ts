import { Language, TranslationStrings } from '../types';

import heroImg from '../assets/images/hero_delivery_partner_1786514494974.jpg';
import benefitsImg from '../assets/images/benefits_team_group_1786514525161.jpg';
import videoManImg from '../assets/images/testimonial_video_man_1786514545584.jpg';
import referGroupImg from '../assets/images/refer_earn_group_1786514570042.jpg';
import avatarAyush from '../assets/images/avatar_ayush_1786514592455.jpg';
import avatarAtish from '../assets/images/avatar_atish_1786514614711.jpg';

export const ASSETS = {
  hero: heroImg,
  benefitsTeam: benefitsImg,
  testimonialVideo: videoManImg,
  referGroup: referGroupImg,
  avatarAyush: avatarAyush,
  avatarAtish: avatarAtish,
};

export const BRAND_CONFIG = {
  name: 'KAAM KA NUMBER',
  number: '89200 89200',
  formattedNumber: '89200 89200',
  rawPhone: '918920089200',
  whatsappNumber: '918920089200',
  defaultWhatsAppMessage: 'Hi, mujhe delivery partner registration ke baare mein jaana hai.',
  referralWhatsAppMessage: 'Hi, mere paas delivery partner banne ke liye reference hai. Registration details chahiye.',
  initialLanguage: 'hinglish' as Language,
};

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  hinglish: {
    brand: {
      name: 'KAAM KA NUMBER',
      number: '89200 89200',
    },
    nav: {
      home: 'HOME',
      impact: 'IMPACT',
      benefits: 'BENEFITS',
      testimonials: 'TESTIMONIALS',
      faq: "FAQ'S",
      referAndEarn: 'Refer and earn',
    },
    hero: {
      headline: 'Kaam chahiye?\nAaj se shuru karo',
      subheadline: 'Mahine ka ₹30,000 tak kamao, Apni marzi se',
      formTitle: 'Abhi register karein',
      phoneLabel: 'Contact number',
      phonePlaceholder: 'Enter 10-digit number',
      termsLabel: 'T&C applied',
      submitBtn: 'Submit',
      submittingBtn: 'Submitting...',
      whatsappNote: 'Submit details, get an instant WhatsApp reply',
      badges: {
        credited: 'Credited',
        foodDelivery: 'Food delivery work',
        panIndia: 'Pan-India Hiring',
      },
    },
    onboarding: {
      title: 'Onboarding 3 simple steps mein',
      steps: [
        {
          number: '01',
          title: '89200 89200 pe misssed call ya WA karo',
          description: 'Bas ek missed call ya WhatsApp text bhejo aur instant registration link pao.',
        },
        {
          number: '02',
          title: 'Document upload karo',
          description: 'Aadhaar Card, Driving License aur basic details direct WhatsApp par upload karo.',
        },
        {
          number: '03',
          title: '10 min mai kaam shuru karo',
          description: 'Verification hote hi orders receive karna start karo aur daily payout pao.',
        },
      ],
    },
    impact: {
      eyebrow: 'THE IMPACT SO FAR',
      heading: 'Our Collective Strength.',
      stats: [
        {
          value: '6 lakh+',
          numericValue: 600000,
          suffix: ' lakh+',
          prefix: '',
          label: 'Active partners',
        },
        {
          value: '₹30,000+',
          numericValue: 30000,
          prefix: '₹',
          suffix: '+',
          label: 'Monthly earning potential',
        },
        {
          value: '₹450 Cr+',
          numericValue: 450,
          prefix: '₹',
          suffix: ' Cr+',
          label: 'Monthly payout to delivery partners',
        },
      ],
    },
    benefits: {
      eyebrow: 'JUDNE KE FAYDE',
      heading: 'Zyada Kamai, Zyada Aazadi',
      centerTitle: 'work part-time\nor full time',
      items: [
        {
          title: 'Flexible working hours',
          description: 'Apni suvidha ke anusar shifts aur timings select karo.',
          icon: 'clock',
          position: 'left',
        },
        {
          title: 'Anytime cash withdrawal',
          description: 'Apni kamai ko jab chahein tab apne bank account mein transfer karo.',
          icon: 'cash',
          position: 'left',
        },
        {
          title: 'vehicle rental available',
          description: 'Bina gaadi ke bhi kaam shuru karne ke liye EV aur petrol scooter rent par uplabdh.',
          icon: 'bike',
          position: 'left',
        },
        {
          title: 'Incentives and bonuses available',
          description: 'Peak hours, festivals aur weekend milestones par extra kamai.',
          icon: 'gift',
          position: 'right',
        },
        {
          title: 'Medical and accident cover up to ₹10 lakh',
          description: 'Aapki aur aapke parivaar ki suraksha ke liye comprehensive health coverage.',
          icon: 'shield',
          position: 'right',
        },
        {
          title: '24x7 emergency support for delivery partners',
          description: 'On-road aur in-app kisi bhi samasya ke liye round-the-clock live team assistance.',
          icon: 'support',
          position: 'right',
        },
      ],
    },
    testimonials: {
      heading: 'Log Kya Kehte Hai?',
      items: [
        {
          id: 't1',
          type: 'quote',
          name: 'Ayush Kumar',
          role: 'Delivery partner',
          location: 'Gujarat',
          quote: '“Apne hours khud choose karta hoon, har week earning ho jaati hai. Routine bhi manage ho jaata hai aur payment ki tension bhi nahi.”',
          avatar: avatarAyush,
        },
        {
          id: 't2',
          type: 'video',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          videoThumbnail: videoManImg,
          videoDuration: '1:45 min',
          videoHighlights: [
            'Daily ₹1,200+ earning on flexible peak shifts',
            'Smooth on-boarding process within 10 minutes',
            'Weekly payouts directly to bank without delay',
          ],
        },
        {
          id: 't3',
          type: 'quote',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          quote: '“Main evenings mein part-time kaam karta hoon, jisse har week extra income ho jaati hai. Hours flexible hain aur payment time par milti hai.”',
          avatar: avatarAtish,
        },
      ],
    },
    referBanner: {
      sectionHeading: 'Refer & Earn more',
      headline: '₹1 lakh tak kamao',
      subheadline: 'Bas doston ko refer karo',
      cta: 'Refer now',
    },
    faq: {
      eyebrow: 'GOT QUESTIONS?',
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'Delivery partner banne ke liye kya documents chahiye?',
          answer: 'Aapko basic identity aur verification documents submit karne honge (Aadhaar Card, PAN Card, Driving License agar 2-wheeler chala rahe hain, aur Bank Account details). Exact requirements onboarding ke time par bata di jayengi.',
        },
        {
          question: 'Kya main part-time kaam kar sakta hoon?',
          answer: 'Haan, available working flexibility ke according aap part-time ya full-time kaam kar sakte hain. Aap morning, evening ya weekend shifts apni pasand ke hisaab se chun sakte hain.',
        },
        {
          question: 'Main kitna kama sakta hoon?',
          answer: 'Earning aapke working hours, location, orders aur applicable incentives par depend karti hai. Current communication mein monthly earning potential ₹30,000+ tak diya gaya hai.',
        },
        {
          question: 'Onboarding mein kitna time lagta hai?',
          answer: 'Approved communication ke according basic onboarding complete hone ke baad aap around 10 minutes mein kaam shuru kar sakte hain, subject to verification.',
        },
        {
          question: 'Mujhe help chahiye toh main kisse contact kar sakta hoon?',
          answer: 'Website par available WhatsApp contact button se directly 89200 89200 par support team se connect kiya ja sakta hai.',
        },
      ],
      helpText: 'Still have doubts or need registration help?',
      whatsappBtn: 'Chat on WhatsApp',
    },
    footer: {
      links: {
        home: 'Home',
        benefits: 'Benefits',
        testimonials: 'Testimonials',
        nextSteps: 'Next steps',
        referAndEarn: 'Refer and earn',
      },
      legal: {
        copyright: '©2026 - 8920089200. All Rights Reserved.',
        terms: 'Term and Conditions',
        privacy: 'Privacy Policy',
      },
    },
    liveCounter: {
      liveBadge: 'LIVE',
      activeText: '2,847 people are currently active',
      joinedText: '312 people joined today',
      ctaText: 'Need help?',
    },
    referPage: {
      headline: '₹1 lakh tak kamao',
      subheadline: 'Bas doston ko refer karo aur har successful onboarding par instant reward pao',
      cta: 'Refer now on WhatsApp',
      calculatorTitle: 'Calculate Your Referral Earning',
      calculatorSubtitle: 'Select how many friends you want to refer',
      howItWorksTitle: 'How Refer & Earn Works',
      steps: [
        {
          step: '01',
          title: 'Share Referral Link',
          desc: 'Apne doston ko apna unique WhatsApp referral link ya code share karein.',
        },
        {
          step: '02',
          title: 'Friend Completes Onboarding',
          desc: 'Aapka dost 89200 89200 par documents upload karke apni pehli 20 deliveries complete karta hai.',
        },
        {
          step: '03',
          title: 'Receive Instant Payout',
          desc: 'Har successful delivery partner referral par ₹2,000 se ₹5,000 tak seedhe bank account mein paayein.',
        },
      ],
      benefitsTitle: 'Referral Benefits',
      benefits: [
        'Unlimited referrals – kamao jitna chaho',
        'Direct bank account transfer within 48 hours',
        'Special milestone bonus on referring 5+ partners in a month',
        'Real-time status updates on WhatsApp for your referrals',
      ],
      whoCanReferTitle: 'Who Can Refer?',
      whoCanRefer: [
        'Existing Active Delivery Partners',
        'Anyone who knows individuals looking for flexible earning opportunities',
        'Students, workers, or friends seeking extra income in their network',
      ],
    },
  },

  hindi: {
    brand: {
      name: 'KAAM KA NUMBER',
      number: '89200 89200',
    },
    nav: {
      home: 'होम',
      impact: 'प्रभाव',
      benefits: 'फायदे',
      testimonials: 'समीक्षाएं',
      faq: 'सवाल-जवाब',
      referAndEarn: 'रेफर करें और कमाएं',
    },
    hero: {
      headline: 'काम चाहिए?\nआज से शुरू करो',
      subheadline: 'महीने का ₹30,000 तक कमाओ, अपनी मर्जी से',
      formTitle: 'अभी रजिस्टर करें',
      phoneLabel: 'संपर्क नंबर',
      phonePlaceholder: '10 अंकों का नंबर दर्ज करें',
      termsLabel: 'नियम व शर्तें लागू',
      submitBtn: 'सबमिट करें',
      submittingBtn: 'जमा हो रहा है...',
      whatsappNote: 'विवरण सबमिट करते ही तुरंत व्हाट्सएप रिप्लाई पाएं',
      badges: {
        credited: 'जमा हुआ',
        foodDelivery: 'फूड डिलीवरी कार्य',
        panIndia: 'अखिल भारतीय भर्ती',
      },
    },
    onboarding: {
      title: 'ऑनबोर्डिंग 3 आसान चरणों में',
      steps: [
        {
          number: '01',
          title: '89200 89200 पर मिस्ड कॉल या व्हाट्सएप करें',
          description: 'बस एक मिस्ड कॉल या व्हाट्सएप संदेश भेजें और तुरंत पंजीकरण लिंक पाएं।',
        },
        {
          number: '02',
          title: 'दस्तावेज़ अपलोड करें',
          description: 'आधार कार्ड, ड्राइविंग लाइसेंस और बुनियादी जानकारी सीधे व्हाट्सएप पर अपलोड करें।',
        },
        {
          number: '03',
          title: '10 मिनट में काम शुरू करें',
          description: 'सत्यापन होते ही ऑर्डर प्राप्त करना शुरू करें और दैनिक भुगतान पाएं।',
        },
      ],
    },
    impact: {
      eyebrow: 'अब तक का प्रभाव',
      heading: 'हमारी सामूहिक शक्ति।',
      stats: [
        {
          value: '6 लाख+',
          numericValue: 600000,
          suffix: ' लाख+',
          prefix: '',
          label: 'सक्रिय डिलीवरी पार्टनर्स',
        },
        {
          value: '₹30,000+',
          numericValue: 30000,
          prefix: '₹',
          suffix: '+',
          label: 'मासिक कमाई की संभावना',
        },
        {
          value: '₹450 करोड़+',
          numericValue: 450,
          prefix: '₹',
          suffix: ' करोड़+',
          label: 'पार्टनर्स को मासिक भुगतान',
        },
      ],
    },
    benefits: {
      eyebrow: 'जुड़ने के फायदे',
      heading: 'ज्यादा कमाई, ज्यादा आजादी',
      centerTitle: 'पार्ट-टाइम या\nफुल-टाइम काम करें',
      items: [
        {
          title: 'लचीले काम के घंटे',
          description: 'अपनी सुविधा अनुसार शिफ्ट और समय चुनें।',
          icon: 'clock',
          position: 'left',
        },
        {
          title: 'कभी भी नकद निकासी',
          description: 'अपनी कमाई जब चाहें बैंक खाते में ट्रांसफर करें।',
          icon: 'cash',
          position: 'left',
        },
        {
          title: 'वाहन किराए पर उपलब्ध',
          description: 'बिना वाहन के भी काम शुरू करने के लिए ईवी और पेट्रोल स्कूटर किराए पर उपलब्ध।',
          icon: 'bike',
          position: 'left',
        },
        {
          title: 'इंसेंटिव और बोनस उपलब्ध',
          description: 'पीक आवर्स और वीकेंड पर अतिरिक्त कमाई।',
          icon: 'gift',
          position: 'right',
        },
        {
          title: '₹10 लाख तक का मेडिकल और दुर्घटना बीमा',
          description: 'आपके और आपके परिवार की सुरक्षा के लिए पूर्ण स्वास्थ्य सुरक्षा।',
          icon: 'shield',
          position: 'right',
        },
        {
          title: '24x7 आपातकालीन सहायता',
          description: 'सड़क पर या ऐप में किसी भी समस्या के लिए 24 घंटे सहायता।',
          icon: 'support',
          position: 'right',
        },
      ],
    },
    testimonials: {
      heading: 'लोग क्या कहते हैं?',
      items: [
        {
          id: 't1',
          type: 'quote',
          name: 'आयुष कुमार',
          role: 'डिलीवरी पार्टनर',
          location: 'गुजरात',
          quote: '“अपने घंटे खुद चुनता हूँ, हर हफ्ते कमाई हो जाती है। रूटीन भी मैनेज हो जाता है और पेमेंट की कोई चिंता नहीं।”',
          avatar: avatarAyush,
        },
        {
          id: 't2',
          type: 'video',
          name: 'अतीश वर्मा',
          role: 'डिलीवरी पार्टनर',
          location: 'दिल्ली',
          videoThumbnail: videoManImg,
          videoDuration: '1:45 मिनट',
          videoHighlights: [
            'पीक शिफ्ट में रोजाना ₹1,200+ की कमाई',
            '10 मिनट के भीतर आसान ऑनबोर्डिंग',
            'बिना किसी देरी के सीधा बैंक भुगतान',
          ],
        },
        {
          id: 't3',
          type: 'quote',
          name: 'अतीश वर्मा',
          role: 'डिलीवरी पार्टनर',
          location: 'दिल्ली',
          quote: '“मैं शाम को पार्ट-टाइम काम करता हूँ, जिससे हर हफ्ते अतिरिक्त आय हो जाती है। घंटे लचीले हैं और भुगतान समय पर मिलता है।”',
          avatar: avatarAtish,
        },
      ],
    },
    referBanner: {
      sectionHeading: 'रेफर करें और ज्यादा कमाएं',
      headline: '₹1 लाख तक कमाओ',
      subheadline: 'बस दोस्तों को रेफर करो',
      cta: 'अभी रेफर करें',
    },
    faq: {
      eyebrow: 'कोई सवाल?',
      heading: 'अक्सर पूछे जाने वाले प्रश्न',
      items: [
        {
          question: 'डिलीवरी पार्टनर बनने के लिए क्या दस्तावेज चाहिए?',
          answer: 'आपको बुनियादी पहचान और सत्यापन दस्तावेज (आधार कार्ड, पैन कार्ड, ड्राइविंग लाइसेंस और बैंक खाता विवरण) जमा करने होंगे।',
        },
        {
          question: 'क्या मैं पार्ट-टाइम काम कर सकता हूँ?',
          answer: 'हाँ, आप अपनी सुविधा अनुसार पार्ट-टाइम या फुल-टाइम काम कर सकते हैं।',
        },
        {
          question: 'मैं कितना कमा सकता हूँ?',
          answer: 'कमाई आपके काम के घंटों, स्थान और ऑर्डर पर निर्भर करती है। मासिक संभावित कमाई ₹30,000+ तक हो सकती है।',
        },
        {
          question: 'ऑनबोर्डिंग में कितना समय लगता है?',
          answer: 'दस्तावेज़ जमा करने के बाद आप लगभग 10 मिनट में काम शुरू कर सकते हैं।',
        },
        {
          question: 'मदद के लिए किससे संपर्क करें?',
          answer: 'वेबसाइट पर दिए गए व्हाट्सएप बटन से सीधे 89200 89200 पर सपोर्ट टीम से संपर्क करें।',
        },
      ],
      helpText: 'क्या आपके पास और सवाल हैं?',
      whatsappBtn: 'व्हाट्सएप पर बात करें',
    },
    footer: {
      links: {
        home: 'होम',
        benefits: 'फायदे',
        testimonials: 'समीक्षाएं',
        nextSteps: 'अगले कदम',
        referAndEarn: 'रेफर करें और कमाएं',
      },
      legal: {
        copyright: '©2026 - 8920089200. सर्वाधिकार सुरक्षित।',
        terms: 'नियम व शर्तें',
        privacy: 'गोपनीयता नीति',
      },
    },
    liveCounter: {
      liveBadge: 'लाइव',
      activeText: '2,847 लोग अभी सक्रिय हैं',
      joinedText: 'आज 312 लोग जुड़े',
      ctaText: 'मदद चाहिए?',
    },
    referPage: {
      headline: '₹1 लाख तक कमाओ',
      subheadline: 'बस दोस्तों को रेफर करें और हर सफल जॉइनिंग पर इनाम पाएं',
      cta: 'व्हाट्सएप पर रेफर करें',
      calculatorTitle: 'अपनी रेफरल कमाई की गणना करें',
      calculatorSubtitle: 'चुनें कि आप कितने दोस्तों को रेफर करना चाहते हैं',
      howItWorksTitle: 'यह कैसे काम करता है',
      steps: [
        {
          step: '01',
          title: 'रेफरल लिंक साझा करें',
          desc: 'अपने दोस्तों के साथ अपना अनूठा व्हाट्सएप रेफरल लिंक साझा करें।',
        },
        {
          step: '02',
          title: 'दोस्त ऑनबोर्डिंग पूरा करता है',
          desc: 'आपका दोस्त 89200 89200 पर दस्तावेज़ अपलोड कर पहली 20 डिलीवरी पूरी करता है।',
        },
        {
          step: '03',
          title: 'तुरंत भुगतान प्राप्त करें',
          desc: 'हर सफल पार्टनर पर ₹2,000 से ₹5,000 तक सीधे बैंक में पाएं।',
        },
      ],
      benefitsTitle: 'रेफरल के फायदे',
      benefits: [
        'असीमित रेफरल – जितना चाहें उतना कमाएं',
        '48 घंटों के भीतर बैंक खाते में सीधा ट्रांसफर',
        'महीने में 5+ रेफरल पर विशेष मील का पत्थर बोनस',
        'व्हाट्सएप पर रेफरल की रीयल-टाइम स्थिति अपडेट',
      ],
      whoCanReferTitle: 'कौन रेफर कर सकता है?',
      whoCanRefer: [
        'मौजूदा सक्रिय डिलीवरी पार्टनर्स',
        'कोई भी व्यक्ति जो ऐसे लोगों को जानता है जो अतिरिक्त आय चाहते हैं',
        'छात्र, कर्मचारी या रिश्तेदार',
      ],
    },
  },

  english: {
    brand: {
      name: 'KAAM KA NUMBER',
      number: '89200 89200',
    },
    nav: {
      home: 'HOME',
      impact: 'IMPACT',
      benefits: 'BENEFITS',
      testimonials: 'TESTIMONIALS',
      faq: "FAQ'S",
      referAndEarn: 'Refer and earn',
    },
    hero: {
      headline: 'Need work?\nStart today',
      subheadline: 'Earn up to ₹30,000 per month, on your own terms',
      formTitle: 'Register now',
      phoneLabel: 'Contact number',
      phonePlaceholder: 'Enter 10-digit number',
      termsLabel: 'T&C applied',
      submitBtn: 'Submit',
      submittingBtn: 'Submitting...',
      whatsappNote: 'Submit details, get an instant WhatsApp reply',
      badges: {
        credited: 'Credited',
        foodDelivery: 'Food delivery work',
        panIndia: 'Pan-India Hiring',
      },
    },
    onboarding: {
      title: 'Onboarding in 3 simple steps',
      steps: [
        {
          number: '01',
          title: 'Give a missed call or WhatsApp on 89200 89200',
          description: 'Simply send a WhatsApp message or give a missed call to get your instant joining link.',
        },
        {
          number: '02',
          title: 'Upload documents',
          description: 'Upload your Aadhaar Card, Driving License, and basic details directly on WhatsApp.',
        },
        {
          number: '03',
          title: 'Start working in 10 minutes',
          description: 'Start receiving food delivery orders right after verification with daily payouts.',
        },
      ],
    },
    impact: {
      eyebrow: 'THE IMPACT SO FAR',
      heading: 'Our Collective Strength.',
      stats: [
        {
          value: '6 lakh+',
          numericValue: 600000,
          suffix: ' lakh+',
          prefix: '',
          label: 'Active partners',
        },
        {
          value: '₹30,000+',
          numericValue: 30000,
          prefix: '₹',
          suffix: '+',
          label: 'Monthly earning potential',
        },
        {
          value: '₹450 Cr+',
          numericValue: 450,
          prefix: '₹',
          suffix: ' Cr+',
          label: 'Monthly payout to delivery partners',
        },
      ],
    },
    benefits: {
      eyebrow: 'BENEFITS OF JOINING',
      heading: 'Higher Earnings, Greater Freedom',
      centerTitle: 'work part-time\nor full time',
      items: [
        {
          title: 'Flexible working hours',
          description: 'Choose shifts and hours that fit your schedule.',
          icon: 'clock',
          position: 'left',
        },
        {
          title: 'Anytime cash withdrawal',
          description: 'Transfer your earnings to your bank account anytime you want.',
          icon: 'cash',
          position: 'left',
        },
        {
          title: 'vehicle rental available',
          description: 'EV and petrol two-wheelers available on rent so you can start without owning a bike.',
          icon: 'bike',
          position: 'left',
        },
        {
          title: 'Incentives and bonuses available',
          description: 'Earn extra through peak-hour incentives and weekend surge payouts.',
          icon: 'gift',
          position: 'right',
        },
        {
          title: 'Medical and accident cover up to ₹10 lakh',
          description: 'Comprehensive health and emergency insurance for you and your family.',
          icon: 'shield',
          position: 'right',
        },
        {
          title: '24x7 emergency support for delivery partners',
          description: 'Round-the-clock dedicated on-road emergency and app support team.',
          icon: 'support',
          position: 'right',
        },
      ],
    },
    testimonials: {
      heading: 'What People Say',
      items: [
        {
          id: 't1',
          type: 'quote',
          name: 'Ayush Kumar',
          role: 'Delivery partner',
          location: 'Gujarat',
          quote: '“I choose my own working hours and earn reliably every week. My daily routine stays balanced without any payout worries.”',
          avatar: avatarAyush,
        },
        {
          id: 't2',
          type: 'video',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          videoThumbnail: videoManImg,
          videoDuration: '1:45 min',
          videoHighlights: [
            'Daily ₹1,200+ earnings during peak evening hours',
            'Completed WhatsApp onboarding in 10 minutes',
            'Instant payouts transferred directly to bank account',
          ],
        },
        {
          id: 't3',
          type: 'quote',
          name: 'Atish Verma',
          role: 'Delivery partner',
          location: 'Delhi',
          quote: '“I work part-time in the evenings to make extra supplemental income. The hours are flexible and payments always arrive on time.”',
          avatar: avatarAtish,
        },
      ],
    },
    referBanner: {
      sectionHeading: 'Refer & Earn more',
      headline: 'Earn up to ₹1 lakh',
      subheadline: 'Simply refer your friends',
      cta: 'Refer now',
    },
    faq: {
      eyebrow: 'GOT QUESTIONS?',
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'What documents are required to become a delivery partner?',
          answer: 'You will need to submit standard identity and verification documents (Aadhaar Card, PAN Card, Driving License if using a 2-wheeler, and Bank Account details). Exact steps will be provided during WhatsApp onboarding.',
        },
        {
          question: 'Can I work part-time?',
          answer: 'Yes, you can work part-time or full-time according to your personal availability. You can pick morning, evening, or weekend slots freely.',
        },
        {
          question: 'How much can I earn?',
          answer: 'Earnings depend on your active working hours, city location, completed orders, and surge incentives. Our active partner communication indicates earning potential up to ₹30,000+ per month.',
        },
        {
          question: 'How long does onboarding take?',
          answer: 'Following the verified digital onboarding flow, you can complete document submission and begin deliveries in approximately 10 minutes.',
        },
        {
          question: 'How do I reach support if I need assistance?',
          answer: 'You can directly connect with our dedicated support team on WhatsApp at 89200 89200.',
        },
      ],
      helpText: 'Still have questions or need assistance?',
      whatsappBtn: 'Chat on WhatsApp',
    },
    footer: {
      links: {
        home: 'Home',
        benefits: 'Benefits',
        testimonials: 'Testimonials',
        nextSteps: 'Next steps',
        referAndEarn: 'Refer and earn',
      },
      legal: {
        copyright: '©2026 - 8920089200. All Rights Reserved.',
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy',
      },
    },
    liveCounter: {
      liveBadge: 'LIVE',
      activeText: '2,847 people are currently active',
      joinedText: '312 people joined today',
      ctaText: 'Need help?',
    },
    referPage: {
      headline: 'Earn up to ₹1 lakh',
      subheadline: 'Refer friends and earn instant cash rewards on every verified onboarding',
      cta: 'Refer now on WhatsApp',
      calculatorTitle: 'Calculate Your Referral Rewards',
      calculatorSubtitle: 'Select how many friends you want to refer',
      howItWorksTitle: 'How Refer & Earn Works',
      steps: [
        {
          step: '01',
          title: 'Share Referral Link',
          desc: 'Share your personal WhatsApp referral link with friends and contacts.',
        },
        {
          step: '02',
          title: 'Friend Completes Onboarding',
          desc: 'Your friend submits documents on 89200 89200 and completes their first 20 deliveries.',
        },
        {
          step: '03',
          title: 'Receive Instant Payout',
          desc: 'Get ₹2,000 to ₹5,000 per successful partner credited directly to your bank account.',
        },
      ],
      benefitsTitle: 'Referral Benefits',
      benefits: [
        'Unlimited referrals – earn as much as you can',
        'Direct bank transfer within 48 hours',
        'Special milestone bonus on referring 5+ partners in a month',
        'Real-time WhatsApp tracking status for your referrals',
      ],
      whoCanReferTitle: 'Who Can Refer?',
      whoCanRefer: [
        'Existing Active Delivery Partners',
        'Anyone looking to help friends find flexible earning opportunities',
        'Students, workers, and professionals in our delivery network',
      ],
    },
  },
};
