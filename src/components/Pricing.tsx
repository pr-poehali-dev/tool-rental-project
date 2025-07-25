import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  return (
    <section id="prices" className="py-16 from-emerald-50 to-teal-100 opacity-0 animate-fade-in bg-[#ffffff]" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Тарифы аренды</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Сутки</CardTitle>
              <CardDescription>До 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">100%</div>
              <p className="text-secondary mb-4">Базовая стоимость</p>
              <ul className="text-sm space-y-2">
                <li>✓ Полная комплектация</li>
                <li>✓ Техническая поддержка</li>
                <li>✓ Замена при поломке</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-emerald-400 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <CardHeader>
              <Badge className="mb-2">Популярно</Badge>
              <CardTitle className="text-2xl text-primary">Неделя</CardTitle>
              <CardDescription>7 суток</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4 text-primary">70%</div>
              <p className="text-secondary mb-4">от суточной стоимости за день</p>
              <ul className="text-sm space-y-2">
                <li>✓ Всё из тарифа "Сутки"</li>
                <li>✓ Скидка 30%</li>
                <li>✓ Приоритетная поддержка</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Месяц</CardTitle>
              <CardDescription>30 суток</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-4">50%</div>
              <p className="text-secondary mb-4">от суточной стоимости за день</p>
              <ul className="text-sm space-y-2">
                <li>✓ Всё из предыдущих тарифов</li>
                <li>✓ Скидка 50%</li>
                <li>✓ Бесплатная доставка</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}