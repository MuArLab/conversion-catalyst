import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="bg-card rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold text-primary mb-4">شكراً لطلبك!</h1>
        <p className="text-lg text-foreground mb-6">
          تم استلام طلبك بنجاح. سنقوم بالتواصل معك قريباً لتأكيد التفاصيل وإتمام عملية التوصيل.
        </p>
        <Button className="w-full" onClick={() => navigate("/")}>العودة للصفحة الرئيسية</Button>
      </div>
    </div>
  );
}
