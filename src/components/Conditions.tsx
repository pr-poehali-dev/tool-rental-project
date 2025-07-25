import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Conditions() {
  return (
    <section id="conditions" className="py-16 from-purple-50 to-pink-100 opacity-0 animate-fade-in bg-[#ffffff]" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold border-4 border-purple-400/30 rounded-xl px-8 py-4 bg-purple-50/50 backdrop-blur-sm inline-block">Условия аренды</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="FileText" className="mr-2" />
                Документы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Паспорт гражданина РФ</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Залог (возвращается при сдаче оборудования)</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Договор аренды</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="CreditCard" className="mr-2" />
                Оплата
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Наличными при получении</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Банковской картой</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Безналичный расчет для юр. лиц</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Clock" className="mr-2" />
                График работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Пн-Пт:</span>
                  <span className="font-semibold">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Сб-Вс:</span>
                  <span className="font-semibold">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Выдача/Прием:</span>
                  <span className="font-semibold">Ежедневно</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="AlertTriangle" className="mr-2" />
                Важные условия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Проверка оборудования при получении</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Ответственность за повреждения</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" size={16} className="text-green-600 mr-2 mt-1" />
                  <span>Возврат в чистом виде</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}