import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Thermometer, Clock, Car, Umbrella, Package,
  Star, ChevronDown, ChevronUp, MessageCircle, Phone, Truck,
  RotateCcw, HelpCircle, Zap, Sun, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import heroImg from "@/assets/product-car.png";
import productFrontBack from "@/assets/product-front-back.jpg";
import productDimensions from "@/assets/product-dimensions.jpg";
import productBox from "@/assets/product-box.jpg";
import productAd from "@/assets/product-ad.png";

const WHATSAPP_NUMBER = "966500000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً، أرغب بطلب مظلة BrellaShield")}`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-right font-semibold text-foreground hover:text-primary transition-colors"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}
      </button>
      {open && <p className="pb-4 text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">{children}</h2>
      {sub && <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}

export default function Index() {
  const benefits = [
    { icon: <Thermometer className="h-7 w-7" />, title: "تخفيض الحرارة", desc: "يقلل درجة حرارة السيارة الداخلية بشكل ملحوظ" },
    { icon: <ShieldCheck className="h-7 w-7" />, title: "حماية من الأشعة", desc: "يعكس 99% من الأشعة فوق البنفسجية الضارة" },
    { icon: <Zap className="h-7 w-7" />, title: "سريع الاستخدام", desc: "يفتح مثل المظلة في ثوانٍ معدودة" },
    { icon: <Package className="h-7 w-7" />, title: "مدمج وسهل التخزين", desc: "يُطوى بحجم صغير يناسب درج القفازات" },
    { icon: <Car className="h-7 w-7" />, title: "يناسب جميع السيارات", desc: "مقاس عالمي 57×31 بوصة (145×79 سم)" },
    { icon: <Eye className="h-7 w-7" />, title: "يحمي الداخلية", desc: "يحافظ على تابلوه السيارة والمقاعد من التشقق" },
  ];

  const features = [
    "طبقة فضية عاكسة للحرارة وأشعة الشمس",
    "هيكل معدني قوي ومتين",
    "مقبض مريح سهل الإمساك",
    "مقاس 57 × 31 بوصة (145 × 79 سم)",
    "وزن خفيف وسهل الحمل",
    "يُفتح ويُغلق بضغطة واحدة",
    "يأتي مع حقيبة تخزين",
  ];

  const faqs = [
    { q: "هل يناسب سيارتي؟", a: "نعم، المظلة بمقاس عالمي 57×31 بوصة تناسب معظم السيارات الصغيرة والمتوسطة والكبيرة." },
    { q: "كيف يتم تركيبها؟", a: "ببساطة تفتحها مثل المظلة وتضعها على الزجاج الأمامي من الداخل. لا تحتاج أي أدوات." },
    { q: "هل الشحن مجاني؟", a: "نعم، نوفر شحن مجاني لجميع المناطق داخل المملكة." },
    { q: "ما هي مدة التوصيل؟", a: "يتم التوصيل خلال 2-5 أيام عمل حسب منطقتك." },
    { q: "هل يمكن الإرجاع؟", a: "نعم، نوفر سياسة إرجاع خلال 7 أيام من الاستلام في حال وجود عيب." },
    { q: "هل الدفع عند الاستلام متاح؟", a: "نعم، نوفر خيار الدفع عند الاستلام (كاش أون ديليفري)." },
  ];

  const reviews = [
    { name: "أحمد م.", rating: 5, text: "ممتازة جداً! سيارتي صارت باردة حتى في عز الصيف. أنصح الكل فيها." },
    { name: "سارة ع.", rating: 5, text: "سهلة الاستخدام وحجمها صغير. أحسن من الواقيات التقليدية بمراحل." },
    { name: "خالد ر.", rating: 4, text: "جودة ممتازة والتوصيل كان سريع. تستاهل كل ريال." },
  ];

  const images = [
    { src: heroImg, alt: "مظلة BrellaShield مركبة على سيارة" },
    { src: productFrontBack, alt: "الوجه الأمامي والخلفي للمظلة" },
    { src: productDimensions, alt: "أبعاد المظلة" },
    { src: productBox, alt: "علبة المنتج" },
    { src: productAd, alt: "إعلان المنتج" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp}>
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                  🔥 عرض محدود
                </span>
                <h1 className="text-3xl md:text-5xl font-black leading-tight text-foreground">
                  ابقَ بارداً.<br />
                  <span className="text-primary">ظل ذكي لسيارتك.</span>
                </h1>
              </motion.div>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                مظلة الزجاج الأمامي المدمجة التي تفتح بسرعة مثل المظلة — تناسب جميع السيارات وتخزينها سهل جداً.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 ml-2" />
                    اطلب الآن عبر واتساب
                  </a>
                </Button>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Truck className="h-4 w-4 text-primary" /> شحن مجاني</span>
                <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-primary" /> الدفع عند الاستلام</span>
                <span className="flex items-center gap-1"><RotateCcw className="h-4 w-4 text-primary" /> إرجاع خلال 7 أيام</span>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <img src={heroImg} alt="BrellaShield مظلة السيارة" className="w-full rounded-2xl shadow-2xl" loading="eager" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle sub="هل تعاني من هذه المشاكل؟">المشكلة والحل</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="border-destructive/20 bg-destructive/5 h-full">
                <CardContent className="p-6 space-y-3">
                  <Sun className="h-10 w-10 text-destructive" />
                  <h3 className="text-xl font-bold text-foreground">😤 المشكلة</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• سيارتك تتحول لفرن في الصيف</li>
                    <li>• المقود والتابلوه حارقين لا يُلمسون</li>
                    <li>• الجلسات تتشقق من حرارة الشمس</li>
                    <li>• الواقيات التقليدية كبيرة وصعبة التخزين</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="border-primary/20 bg-accent h-full">
                <CardContent className="p-6 space-y-3">
                  <Umbrella className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">✅ الحل: BrellaShield</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• تفتح مثل المظلة في 3 ثوانٍ</li>
                    <li>• تعكس 99% من الأشعة فوق البنفسجية</li>
                    <li>• تخزينها في درج القفازات</li>
                    <li>• تناسب جميع أنواع السيارات</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle sub="لماذا تختار BrellaShield؟">المزايا</SectionTitle>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-primary">
                      {b.icon}
                    </div>
                    <h3 className="font-bold text-foreground">{b.title}</h3>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <SectionTitle>المواصفات التفصيلية</SectionTitle>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <motion.li key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={productDimensions} alt="أبعاد المظلة" className="w-full rounded-xl shadow-lg" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>صور المنتج</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {images.map((img, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle sub="آراء عملائنا">تقييمات العملاء</SectionTitle>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reviews.map((r, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{r.text}"</p>
                    <p className="text-sm font-bold text-foreground">— {r.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / OFFER */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle>احصل عليها الآن!</SectionTitle>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="max-w-md mx-auto border-2 border-primary shadow-xl">
              <CardContent className="p-8 space-y-4">
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  ⏰ عرض لفترة محدودة
                </span>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground line-through">199 ر.س</p>
                  <p className="text-4xl font-black text-primary">99 ر.س</p>
                  <p className="text-sm text-muted-foreground">شامل الشحن المجاني</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Truck className="h-3 w-3" /> شحن مجاني</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> دفع عند الاستلام</span>
                  <span className="flex items-center gap-1"><RotateCcw className="h-3 w-3" /> ضمان إرجاع</span>
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl shadow-lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 ml-2" />
                    اطلب الآن
                  </a>
                </Button>
                <p className="text-xs text-destructive font-semibold animate-pulse">🔥 الكمية محدودة — اطلب قبل نفاد المخزون!</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle sub="إجابات لأكثر الأسئلة شيوعاً">الأسئلة الشائعة</SectionTitle>
          <div className="max-w-2xl mx-auto">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 text-center space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-black text-foreground">
              لا تدع الحرارة تسيطر على سيارتك! 🚗
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              اطلب مظلة BrellaShield الآن واستمتع بسيارة باردة كل يوم.
            </p>
            <div className="mt-6">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-xl shadow-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 ml-2" />
                  اطلب الآن عبر واتساب
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Truck className="h-4 w-4 text-primary" /> شحن مجاني</span>
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-primary" /> دفع عند الاستلام</span>
              <span className="flex items-center gap-1"><RotateCcw className="h-4 w-4 text-primary" /> ضمان إرجاع 7 أيام</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-card/95 backdrop-blur-sm border-t border-border md:hidden">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-5 rounded-xl shadow-lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 ml-2" />
            اطلب الآن — 99 ر.س فقط
          </a>
        </Button>
      </div>

      {/* Bottom spacer for sticky CTA on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
