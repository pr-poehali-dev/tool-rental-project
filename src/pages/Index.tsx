import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={32} className="text-white" />
              <h1 className="font-heading text-2xl font-bold">ToolNord</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="hover:text-gray-200 transition-colors">Каталог</a>
              <a href="#prices" className="hover:text-gray-200 transition-colors">Цены</a>
              <a href="#conditions" className="hover:text-gray-200 transition-colors">Условия</a>
              <a href="#contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
            </nav>
            <Button variant="secondary" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl font-bold text-primary mb-6">
            Аренда инструментов и туристического снаряжения
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto">
            Профессиональный прокат качественного оборудования в Мурманской области. 
            Всё необходимое для ваших проектов и походов — от строительных инструментов до туристического снаряжения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Search" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Качество и надежность</h3>
              <p className="text-secondary">Все инструменты проходят регулярное техобслуживание</p>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Быстрая выдача</h3>
              <p className="text-secondary">Подготовка заказа за 30 минут</p>
            </div>
            <div className="text-center">
              <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Доставка по области</h3>
              <p className="text-secondary">Привезем оборудование в удобное место</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Популярное оборудование</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tool Cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg" 
                    alt="Дрели и перфораторы" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Дрели и перфораторы</CardTitle>
                <CardDescription>От 500₽/сутки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary">Bosch</Badge>
                  <Badge variant="secondary">Makita</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg" 
                    alt="Туристические палатки" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Палатки туристические</CardTitle>
                <CardDescription>От 800₽/сутки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary">2-4 места</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/img/9f1aebf9-ef6a-4272-acf3-62ee949b88c5.jpg" 
                    alt="Навигационное оборудование" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">Навигационное оборудование</CardTitle>
                <CardDescription>От 300₽/сутки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary">GPS</Badge>
                  <Badge variant="secondary">Компас</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Hammer" size={64} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">Строительный инструмент</CardTitle>
                <CardDescription>От 200₽/сутки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary">Ручной</Badge>
                  <Badge variant="secondary">Электро</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Смотреть весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Тарифы аренды</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
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

            <Card className="text-center border-primary">
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

            <Card className="text-center">
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

      {/* Conditions Section */}
      <section id="conditions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Условия аренды</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
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

            <Card>
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

            <Card>
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

            <Card>
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

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="Phone" className="text-primary mr-3" />
                  <span className="text-lg">+7 (815) 2XX-XX-XX</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-primary mr-3" />
                  <span className="text-lg">info@toolnord.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="text-primary mr-3" />
                  <span className="text-lg">г. Мурманск, ул. Примерная, 123</span>
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

            <Card>
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

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} />
                <h3 className="font-heading text-xl font-bold">ToolNord</h3>
              </div>
              <p className="text-gray-200">
                Надежный прокат инструментов и туристического снаряжения в Мурманской области
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-200">
                <li><a href="#" className="hover:text-white">Строительные инструменты</a></li>
                <li><a href="#" className="hover:text-white">Туристическое снаряжение</a></li>
                <li><a href="#" className="hover:text-white">Садовый инвентарь</a></li>
                <li><a href="#" className="hover:text-white">Электроинструменты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-200">
                <li><a href="#" className="hover:text-white">Доставка</a></li>
                <li><a href="#" className="hover:text-white">Техническая поддержка</a></li>
                <li><a href="#" className="hover:text-white">Консультации</a></li>
                <li><a href="#" className="hover:text-white">Обучение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-200">
                <li>+7 (815) 2XX-XX-XX</li>
                <li>info@toolnord.ru</li>
                <li>г. Мурманск</li>
                <li>Пн-Вс: 08:00-20:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-200">
            <p>&copy; 2024 ToolNord. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}