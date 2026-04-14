import { useState, type FormEvent } from "react";
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

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxNGlwy4YMrLN4Oodey9t9-Zcm-snuqw8xwsGKInCw8PVVxNqXfk89TZT98L4CGpcWm/exec";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    phone?: string;
    city?: string;
    quantity?: string;
  }>({});
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const rawFormData = new FormData(form);

    const name = String(rawFormData.get("name") ?? "").trim();
    const phone = String(rawFormData.get("phone") ?? "").trim();
    const city = String(rawFormData.get("city") ?? "").trim();
    const quantityRaw = String(rawFormData.get("quantity") ?? "").trim();
    const quantity = Number(quantityRaw);

    const errors: {
      name?: string;
      phone?: string;
      city?: string;
      quantity?: string;
    } = {};

    if (name.length < 2) {
      errors.name = "الاسم لازم يكون واضح (حرفين على الأقل).";
    }

    if (!/^[0-9+()\-\s]{7,20}$/.test(phone)) {
      errors.phone = "رقم الهاتف غير صحيح.";
    }

    if (city.length < 2) {
      errors.city = "اكتب اسم مدينة صحيح.";
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      errors.quantity = "الكمية لازم تكون من 1 إلى 99.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitMessage({
        type: "error",
        text: "راجع البيانات قبل الإرسال.",
      });
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("city", city);
    formData.append("quantity", String(quantity));
    formData.append("product", "BrellaShield");

    try {
      const request = fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      await Promise.race([
        request,
        new Promise((resolve) => setTimeout(resolve, 1800)),
      ]);

      setSubmitMessage({
        type: "success",
        text: "تم إرسال الطلب بنجاح، بنواصلوا معاك قريب.",
      });

      form.reset();
      const quantityInput = form.elements.namedItem("quantity") as HTMLInputElement | null;
      if (quantityInput) {
        quantityInput.value = "1";
      }
    } catch (error) {
      console.error("Error sending order:", error);
      setSubmitMessage({
        type: "error",
        text: "صار خطأ أثناء إرسال الطلب، حاول مرة ثانية.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    { src: productBox, alt: "علبة المنتج" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="w-full p-0 m-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <img src={productAd} alt="BrellaShield إعلان المنتج" className="block w-full h-auto" loading="eager" />
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
                  {/* <p className="text-sm text-muted-foreground line-through">199 ر.س</p> */}
                  <p className="text-4xl font-black text-primary">175 دينار</p>
                  <p className="text-sm text-muted-foreground">شامل الشحن المجاني</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Truck className="h-3 w-3" /> شحن مجاني</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> دفع عند الاستلام</span>
                  <span className="flex items-center gap-1"><RotateCcw className="h-3 w-3" /> ضمان إرجاع</span>
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl shadow-lg" asChild>
                  <a href="#order-form">
                    اطلب الآن
                  </a>
                </Button>
                <p className="text-xs text-destructive font-semibold animate-pulse">🔥 الكمية محدودة — اطلب قبل نفاد المخزون!</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order-form" className="py-16 md:py-20 bg-card scroll-mt-24" dir="rtl">
        <div className="container mx-auto px-4">
          <SectionTitle sub="عبّي البيانات ونرسل طلبك مباشرة للفريق">اطلب المنتج بكل سهولة</SectionTitle>
          <div className="grid items-start gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            <Card className="border-border bg-background shadow-sm">
              <CardContent className="p-6 md:p-8">
                <form dir="rtl" onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2" noValidate>
                  <label className="block text-sm font-medium text-foreground md:col-span-1">
                    الاسم الكامل
                    <input
                      type="text"
                      name="name"
                      placeholder="اكتب اسمك الكامل"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-right text-base text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                      required
                    />
                    {fieldErrors.name ? <p className="mt-1 text-xs text-destructive">{fieldErrors.name}</p> : null}
                  </label>

                  <label className="block text-sm font-medium text-foreground md:col-span-1">
                    رقم الهاتف
                    <input
                      type="tel"
                      name="phone"
                      placeholder="اكتب رقم هاتفك"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-right text-base text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                      required
                    />
                    {fieldErrors.phone ? <p className="mt-1 text-xs text-destructive">{fieldErrors.phone}</p> : null}
                  </label>

                  <label className="block text-sm font-medium text-foreground md:col-span-1">
                    المدينة
                    <input
                      type="text"
                      name="city"
                      placeholder="اكتب المدينة"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-right text-base text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                      required
                    />
                    {fieldErrors.city ? <p className="mt-1 text-xs text-destructive">{fieldErrors.city}</p> : null}
                  </label>

                  <label className="block text-sm font-medium text-foreground md:col-span-1">
                    الكمية
                    <input
                      type="number"
                      name="quantity"
                      min={1}
                      max={99}
                      step={1}
                      defaultValue={1}
                      placeholder="1"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-right text-base text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
                      required
                    />
                    {fieldErrors.quantity ? <p className="mt-1 text-xs text-destructive">{fieldErrors.quantity}</p> : null}
                  </label>

                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-xl shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "جارٍ إرسال الطلب..." : "اطلب الآن"}
                    </Button>
                    {submitMessage ? (
                      <p
                        className={`mt-3 text-sm ${submitMessage.type === "success" ? "text-emerald-700" : "text-destructive"}`}
                        role="status"
                        aria-live="polite"
                      >
                        {submitMessage.text}
                      </p>
                    ) : null}
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="border-border bg-background shadow-sm">
              <CardContent className="p-5">
                <div className="overflow-hidden rounded-xl border border-border">
                  <img src={productAd} alt="صورة المنتج" className="h-auto w-full object-cover" loading="lazy" />
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">صورة المنتج للمعاينة قبل إتمام الطلب.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            {/* SOCIAL PROOF (moved to last) */}
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
              اطلب مظلة  الآن واستمتع بسيارة باردة كل يوم.
            </p>
            <div className="mt-6">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-xl shadow-lg" asChild>
                <a href="#order-form">
                  اطلب الآن
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
          <a href="#order-form">
            اطلب الآن — 175 دينار فقط
          </a>
        </Button>
      </div>

      {/* Bottom spacer for sticky CTA on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
