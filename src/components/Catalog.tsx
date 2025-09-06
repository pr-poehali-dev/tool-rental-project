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
    { id: 'grinder', name: 'Болгарка', price: 270, hourlyPrice: 110, image: '/img/4db31d9d-eba9-482a-9692-25a7544aca68.jpg', badges: ['125мм'] },
    { id: 'screwdriver', name: 'Шуруповерт', price: 140, hourlyPrice: 60, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['18V'] },
    { id: 'jigsaw', name: 'Лобзик', price: 220, hourlyPrice: 90, image: 'https://cdn.poehali.dev/files/377e8f2d-35c6-43ff-85bd-7ae4fe7ee688.jpg', badges: ['Аккум'] },
    { id: 'circular-saw', name: 'Циркулярная пила', price: 250, hourlyPrice: 100, image: '/img/e67dac9f-7d1f-456c-b6f9-a4910f280dce.jpg', badges: ['190мм'] },
    { id: 'reciprocating-saw', name: 'Сабельная пила', price: 200, hourlyPrice: 80, image: '/img/7f49204b-35e2-4835-9e2c-02f1321bcd1e.jpg', badges: ['Аккум'] },
    { id: 'perforator', name: 'Перфоратор', price: 600, hourlyPrice: 250, image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg', badges: ['SDS+'] },
    { id: 'heat-gun', name: 'Строительный фен', price: 100, hourlyPrice: 40, image: '/img/c595f387-16fe-4eb9-974a-401c46098843.jpg', badges: ['2000Вт'] },
    { id: 'renovator', name: 'Реноватор', price: 320, hourlyPrice: 130, image: '/img/15b1e73f-02b7-4cbd-95d4-eddc56dd38bb.jpg', badges: ['Насадки'] },

    { id: 'sander', name: 'Шлифовальная машинка', price: 280, hourlyPrice: 110, image: '/img/c3cba4e6-8d40-4b89-b871-f7b577415f1b.jpg', badges: ['Орбитальная'] },
    { id: 'planer', name: 'Электрорубанок', price: 250, hourlyPrice: 100, image: '/img/4cf73f13-8f19-48a6-8144-a2eebf92980c.jpg', badges: ['110мм'] },
    { id: 'impact-wrench', name: 'Гайковёрт', price: 310, hourlyPrice: 130, image: '/img/40568c3e-7785-4034-bcb0-ff6260bbbd0c.jpg', badges: ['1/2"'] }
  ];

  const cleaningData = [
    { id: 'steam-cleaner', name: 'Пароочиститель', price: 100, hourlyPrice: 40, image: '/img/9a27bb5b-52a8-4818-b3a3-51486a8a4105.jpg', badges: ['1000Вт'] },
    { id: 'window-cleaner', name: 'Мойщик окон', price: 270, hourlyPrice: 110, image: '/img/31413823-7d75-4329-9859-505e84fc5d64.jpg', badges: ['Проф'] },
    { id: 'vacuum-cleaner', name: 'Строительный пылесос', price: 240, hourlyPrice: 100, image: '/img/4fcd20e2-5b36-49fd-b63b-30264773ccab.jpg', badges: ['1000Вт'] },
    { id: 'paint-sprayer', name: 'Краскопульт', price: 230, hourlyPrice: 100, image: '/img/2989e866-3828-42a2-bc2d-d4c407f099e4.jpg', badges: ['Электр'] }
  ];

  const equipmentData = [

    { id: 'hydraulic-jack', name: 'Домкрат подкатной', price: 240, hourlyPrice: 100, image: '/img/aa1d29f1-0130-4eb1-9974-6fd1be6b89ef.jpg', badges: ['2,5Т'] },
    { id: 'work-light', name: 'Прожектор строительный', price: 60, hourlyPrice: 25, image: '/img/c22ac40a-641a-4ace-b343-cf6c059fa27a.jpg', badges: ['50Вт'] },
    { id: 'concrete-mixer', name: 'Бетономешалка', price: 815, hourlyPrice: 330, image: '/img/8980d89d-d890-49ee-a50d-6d199bf37431.jpg', badges: ['160л'] },
    { id: 'battery-charger', name: 'Зарядное устройство/пуск', price: 65, hourlyPrice: 30, image: '/img/65d208ad-24a9-4b01-9f36-3c91077d4f86.jpg', badges: ['12V'] },
    { id: 'pipe-scissors', name: 'Ножницы для пластиковых труб', price: 50, hourlyPrice: 20, image: 'https://cdn.poehali.dev/files/0a3b0459-1aae-4baf-a9f3-a797071ca17f.jpg', badges: ['42мм'] },
    { id: 'pipe-welder', name: 'Паяльник для пластиковых труб', price: 100, hourlyPrice: 40, image: '/img/38e415b6-3942-4f6e-9e73-c57f5b24cc1f.jpg', badges: ['1000Вт'] },
    { id: 'stands', name: 'Козлы подпорки (пара)', price: 140, hourlyPrice: 60, image: '/img/62efdb6e-017c-412e-a412-67bcba628673.jpg', badges: ['Складные'] },
    { id: 'extension-cord', name: 'Удлинитель (катушка с кабелем)', price: 90, hourlyPrice: 40, image: '/img/b09373e0-024a-46f8-820f-b6e4b2b8711b.jpg', badges: ['50м'] },
    { id: 'magnetic-level', name: 'Длинный уровень на магните', price: 50, hourlyPrice: 20, image: '/img/79882584-ad60-4dfc-8779-b9c6c447536b.jpg', badges: ['600мм'] },
    { id: 'straps-set', name: 'Набор стяжек/ленты/щипцы', price: 70, hourlyPrice: 30, image: '/img/d50cfa22-ef13-49fc-aa90-8a8f767ca973.jpg', badges: ['Разные'] },
    { id: 'clamps', name: 'Струбцины', price: 50, hourlyPrice: 20, image: 'https://cdn.poehali.dev/files/279fabff-2482-455c-ace9-16b4cbd97e92.jpg', badges: ['F-обр'] }
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