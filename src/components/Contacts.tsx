import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <section id="contacts" className="py-16 from-orange-50 to-yellow-100 opacity-0 animate-fade-in bg-gray-200" style={{animationDelay: '1.0s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Контакты</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Icon name="Phone" className="text-primary mr-3" />
                <span className="text-lg">+7 (950) 892-44-19</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="text-primary mr-3" />
                <span className="text-lg">toolnord51@mail.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="text-primary mr-3" />
                <span className="text-lg">г. Кандалакша, ул. Кировская, 42</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="text-primary mr-3" />
                <span className="text-lg">Пн-Вс: 08:00 - 20:00</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Отправить заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Какое оборудование вас интересует?" />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}