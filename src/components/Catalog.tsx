import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: string;
  name: string;
  price: number;
  hourlyPrice: number;
  image: string;
}

interface CatalogProps {
  addToCart: (item: CartItem) => void;
}

export default function Catalog({ addToCart }: CatalogProps) {
  const powerToolsData = [
    { id: 'grinder', name: 'Болгарка', price: 270, hourlyPrice: 110, image: '/img/4db31d9d-eba9-482a-9692-25a7544aca68.jpg', badges: ['125мм', '230мм'] },
    { id: 'screwdriver', name: 'Шуруповерт', price: 140, hourlyPrice: 60, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['18V'] },
    { id: 'jigsaw', name: 'Лобзик', price: 220, hourlyPrice: 90, image: '/img/8d13799b-c272-4b6e-8431-343f50155b8e.jpg', badges: ['Аккум'] },
    { id: 'circular-saw', name: 'Циркулярная пила', price: 250, hourlyPrice: 100, image: '/img/e67dac9f-7d1f-456c-b6f9-a4910f280dce.jpg', badges: ['190мм'] },
    { id: 'reciprocating-saw', name: 'Сабельная пила', price: 200, hourlyPrice: 80, image: '/img/7f49204b-35e2-4835-9e2c-02f1321bcd1e.jpg', badges: ['Электро', 'Аккум'] },
    { id: 'perforator', name: 'Перфоратор', price: 600, hourlyPrice: 250, image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg', badges: ['SDS+', 'SDS-max'] },
    { id: 'heat-gun', name: 'Строительный фен', price: 100, hourlyPrice: 40, image: '/img/c595f387-16fe-4eb9-974a-401c46098843.jpg', badges: ['2000Вт'] },
    { id: 'renovator', name: 'Реноватор', price: 320, hourlyPrice: 130, image: '/img/15b1e73f-02b7-4cbd-95d4-eddc56dd38bb.jpg', badges: ['Насадки'] },
    { id: 'electronic-level', name: 'Электронный уровень', price: 180, hourlyPrice: 70, image: '/img/8f06c9a1-9869-42c7-9362-bfd0da351f06.jpg', badges: ['Лазер', 'Цифровой'] },
    { id: 'sander', name: 'Шлифовальная машинка', price: 280, hourlyPrice: 110, image: '/img/c3cba4e6-8d40-4b89-b871-f7b577415f1b.jpg', badges: ['Орбитальная'] },
    { id: 'planer', name: 'Электрорубанок', price: 250, hourlyPrice: 100, image: '/img/4cf73f13-8f19-48a6-8144-a2eebf92980c.jpg', badges: ['82мм', '110мм'] },
    { id: 'impact-wrench', name: 'Гайковёрт', price: 310, hourlyPrice: 130, image: '/img/gaikover.jpg', badges: ['1/2"'] }
  ];

  const cleaningData = [
    { id: 'steam-cleaner', name: 'Пароочиститель', price: 100, hourlyPrice: 40, image: '/img/9a27bb5b-52a8-4818-b3a3-51486a8a4105.jpg', badges: ['1500Вт', '2000Вт'] },
    { id: 'window-cleaner', name: 'Мойщик окон', price: 270, hourlyPrice: 110, image: '/img/31413823-7d75-4329-9859-505e84fc5d64.jpg', badges: ['Проф', 'Эконом'] },
    { id: 'vacuum-cleaner', name: 'Строительный пылесос', price: 240, hourlyPrice: 100, image: '/img/4fcd20e2-5b36-49fd-b63b-30264773ccab.jpg', badges: ['1200Вт', '1400Вт'] },
    { id: 'paint-sprayer', name: 'Краскопульт', price: 230, hourlyPrice: 100, image: '/img/2989e866-3828-42a2-bc2d-d4c407f099e4.jpg', badges: ['Электр', 'Пневмо'] }
  ];

  const equipmentData = [
    { id: 'generator', name: 'Электрогенератор', price: 1200, hourlyPrice: 500, image: '/img/46fc1203-245a-4cb8-8105-c1f78c936cc0.jpg', badges: ['3кВт', '5кВт'] },
    { id: 'hydraulic-jack', name: 'Домкрат подкатной', price: 240, hourlyPrice: 100, image: '/img/aa1d29f1-0130-4eb1-9974-6fd1be6b89ef.jpg', badges: ['2т', '3т'] },
    { id: 'work-light', name: 'Прожектор строительный', price: 60, hourlyPrice: 25, image: '/img/c22ac40a-641a-4ace-b343-cf6c059fa27a.jpg', badges: ['50Вт', '100Вт'] },
    { id: 'concrete-mixer', name: 'Бетономешалка', price: 815, hourlyPrice: 330, image: '/img/8980d89d-d890-49ee-a50d-6d199bf37431.jpg', badges: ['150л', '200л'] },
    { id: 'battery-charger', name: 'Зарядное устройство/пуск', price: 65, hourlyPrice: 30, image: '/img/65d208ad-24a9-4b01-9f36-3c91077d4f86.jpg', badges: ['12V', '24V'] },
    { id: 'pipe-scissors', name: 'Ножницы для пластиковых труб', price: 50, hourlyPrice: 20, image: '/img/scissors.jpg', badges: ['20-40мм', '16-63мм'] },
    { id: 'pipe-welder', name: 'Паяльник для пластиковых труб', price: 100, hourlyPrice: 40, image: '/img/welder.jpg', badges: ['800Вт', '1200Вт'] },
    { id: 'stands', name: 'Козлы подпорки (пара)', price: 140, hourlyPrice: 60, image: '/img/stands.jpg', badges: ['Регул', 'Складные'] },
    { id: 'extension-cord', name: 'Удлинитель (катушка с кабелем)', price: 90, hourlyPrice: 40, image: '/img/extension.jpg', badges: ['50м', '100м'] },
    { id: 'magnetic-level', name: 'Длинный уровень на магните', price: 50, hourlyPrice: 20, image: '/img/level.jpg', badges: ['1м', '2м'] },
    { id: 'straps-set', name: 'Набор стяжек/ленты/щипцы', price: 70, hourlyPrice: 30, image: '/img/straps.jpg', badges: ['Комплект', 'Разные'] },
    { id: 'clamps', name: 'Струбцины', price: 50, hourlyPrice: 20, image: '/img/clamps.jpg', badges: ['G-обр', 'F-обр'] }
  ];



  return (
    <section id="catalog" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Каталог инструментов</h2>
        
        {/* Электроинструменты */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-center mb-8 text-primary">⚡ Электроинструменты</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {powerToolsData.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>
                    {item.price}₽/сутки • {item.hourlyPrice}₽/час
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {item.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary">{badge}</Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      hourlyPrice: item.hourlyPrice,
                      image: item.image
                    })}
                  >
                    <Icon name="Plus" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Уборка и покраска */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-center mb-8 text-primary">🧽 Уборка и покраска</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningData.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>
                    {item.price}₽/сутки • {item.hourlyPrice}₽/час
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {item.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary">{badge}</Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      hourlyPrice: item.hourlyPrice,
                      image: item.image
                    })}
                  >
                    <Icon name="Plus" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Оборудование */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-center mb-8 text-primary">🏗️ Оборудование</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentData.map((item) => (
              <Card key={item.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white hover:scale-105">
                <CardHeader className="pb-3">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>
                    {item.price}₽/сутки • {item.hourlyPrice}₽/час
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {item.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary">{badge}</Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      hourlyPrice: item.hourlyPrice,
                      image: item.image
                    })}
                  >
                    <Icon name="Plus" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        
        <div className="text-center mt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200"
            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть весь каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}