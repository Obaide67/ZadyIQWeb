import { useState } from "react"; import { motion } from "framer-motion"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { Moon, Sun, Download } from "lucide-react";

export default function ZadyIQLanding() { const [dark, setDark] = useState(true); const [isAndroid, setIsAndroid] = useState(false);

// كشف نوع الجهاز useState(() => { if (typeof navigator !== "undefined") { const userAgent = navigator.userAgent || navigator.vendor || window.opera; if (/android/i.test(userAgent)) { setIsAndroid(true); } } }, []);

return ( <div className={dark ? "dark" : ""} dir="rtl"> <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 font-[Cairo]"> {/* Header */} <header className="flex justify-between items-center p-6 max-w-6xl mx-auto"> <div className="flex items-center gap-3"> <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"> <span className="font-bold text-white">Z</span> </div> <h1 className="text-2xl font-bold">ZadyIQ</h1> </div>

<Button
        variant="outline"
        onClick={() => setDark(!dark)}
        className="rounded-2xl"
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </Button>
    </header>

    {/* Hero Section */}
    <section className="text-center py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        تطبيق التسوق الالكتروني الاول في الرمادي
      </motion.h2>

      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-80">
        ZadyIQ هو تطبيق توصيل وشراء المنتجات الغذائية بكل سهولة. اطلب
        احتياجاتك اليومية من السوبرماركت والمتاجر المحلية في الرمادي
        واستلمها حتى باب منزلك بسرعة وأمان.
      </p>

      {isAndroid ? (
        <a href="https://github.com/Obaide67/Zady/raw/refs/heads/main/base%20(2)%20(2).apk" download>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-2xl shadow-xl w-full md:w-auto">
            <Download className="ml-2" /> تحميل التطبيق الآن
          </Button>
        </a>
      ) : (
        <div className="text-red-500 font-semibold mt-4">
          التطبيق متاح لأجهزة Android فقط 📱
        </div>
      )}
    </section>

    {/* Features */}
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-3">توصيل سريع</h3>
          <p className="opacity-70">
            خدمة توصيل سريعة داخل الرمادي مع متابعة الطلب لحظة بلحظة.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-3">متاجر متعددة</h3>
          <p className="opacity-70">
            تسوق من عدة متاجر غذائية وسوبرماركت داخل تطبيق واحد.
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-3">دفع آمن</h3>
          <p className="opacity-70">
            خيارات دفع متعددة وآمنة مع حماية كاملة لبيانات المستخدم.
          </p>
        </CardContent>
      </Card>
    </section>

    {/* Privacy Policy */}
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">سياسة الخصوصية</h2>
      <p className="opacity-80 leading-8">
        نحن في ZadyIQ نحترم خصوصيتك. نقوم بجمع البيانات الضرورية فقط لإتمام
        عمليات الشراء والتوصيل وتحسين تجربة المستخدم. لا نقوم بمشاركة
        معلوماتك الشخصية مع أي طرف ثالث دون موافقتك، ويتم تخزين البيانات
        باستخدام أنظمة حماية متقدمة لضمان الأمان.
      </p>
    </section>

    {/* Footer */}
    <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-800">
      <p className="opacity-60">© 2026 ZadyIQ - جميع الحقوق محفوظة</p>
    </footer>
  </div>
</div>

); }
