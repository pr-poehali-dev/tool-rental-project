import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface CatalogProps {
  addToCart: (item: CartItem) => void;
}

export default function Catalog({ addToCart }: CatalogProps) {
  const toolsData = [
    { id: 'generator', name: 'Электрогенератор', price: 1200, image: '/img/46fc1203-245a-4cb8-8105-c1f78c936cc0.jpg', badges: ['3кВт', '5кВт'] },
    { id: 'steam-cleaner', name: 'Пароочиститель', price: 400, image: '/img/9a27bb5b-52a8-4818-b3a3-51486a8a4105.jpg', badges: ['1500Вт', '2000Вт'] },
    { id: 'window-cleaner', name: 'Мойщик окон', price: 200, image: '/img/31413823-7d75-4329-9859-505e84fc5d64.jpg', badges: ['Проф', 'Эконом'] },
    { id: 'grinder', name: 'Болгарка', price: 400, image: '/img/4db31d9d-eba9-482a-9692-25a7544aca68.jpg', badges: ['125мм', '230мм'] },
    { id: 'screwdriver', name: 'Шуруповерт', price: 300, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['18V', '12V'] },
    { id: 'jigsaw', name: 'Лобзик', price: 350, image: '/img/8d13799b-c272-4b6e-8431-343f50155b8e.jpg', badges: ['Электро', 'Аккум'] },
    { id: 'circular-saw', name: 'Циркулярная пила', price: 450, image: '/img/e67dac9f-7d1f-456c-b6f9-a4910f280dce.jpg', badges: ['160мм', '190мм'] },
    { id: 'reciprocating-saw', name: 'Сабельная пила', price: 400, image: '/img/7f49204b-35e2-4835-9e2c-02f1321bcd1e.jpg', badges: ['Электро', 'Аккум'] },
    { id: 'drill', name: 'Дрели и перфораторы', price: 500, image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg', badges: ['Bosch', 'Makita'] },
    { id: 'wrench-set', name: 'Накидные ключи', price: 150, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['Набор', '8-22мм'] },
    { id: 'gas-wrench', name: 'Газовый ключ', price: 200, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['№1', '№2'] },
    { id: 'adjustable-wrench', name: 'Разводной ключ', price: 100, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['250мм', '300мм'] },
    { id: 'sledgehammer', name: 'Молоток', price: 120, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['500г', '1кг'] },
    { id: 'perforator', name: 'Перфоратор', price: 600, image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg', badges: ['SDS+', 'SDS-max'] },
    { id: 'screwdrivers', name: 'Отвертки', price: 80, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['Набор', 'Phillips'] },
    { id: 'level', name: 'Уровень', price: 150, image: '/img/59600e85-c1d2-41bf-8d48-c794aec24f92.jpg', badges: ['60см', '120см'] },
    { id: 'concrete-mixer', name: 'Бетономешалка', price: 800, image: '/img/46fc1203-245a-4cb8-8105-c1f78c936cc0.jpg', badges: ['150л', '200л'] },
    { id: 'impact-hammer', name: 'Отбойный молоток', price: 700, image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg', badges: ['SDS-max', 'Пневмо'] },
    { id: 'heat-gun', name: 'Строительный фен', price: 250, image: '/img/4db31d9d-eba9-482a-9692-25a7544aca68.jpg', badges: ['1800Вт', '2000Вт'] },
    { id: 'vacuum-cleaner', name: 'Строительный пылесос', price: 300, image: '/img/4fcd20e2-5b36-49fd-b63b-30264773ccab.jpg', badges: ['1200Вт', '1400Вт'] },
    { id: 'paint-sprayer', name: 'Краскопульт', price: 350, image: '/img/2989e866-3828-42a2-bc2d-d4c407f099e4.jpg', badges: ['Электр', 'Пневмо'] },
    { id: 'hydraulic-jack', name: 'Домкрат подкатной', price: 200, image: '/img/aa1d29f1-0130-4eb1-9974-6fd1be6b89ef.jpg', badges: ['2т', '3т'] },
    { id: 'work-light', name: 'Прожектор строительный', price: 180, image: '/img/c22ac40a-641a-4ace-b343-cf6c059fa27a.jpg', badges: ['50Вт', '100Вт'] }
  ];

  const campingData = [
    { id: 'tent', name: 'Палатки туристические', price: 800, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['2-4 места'] },
    { id: 'flashlight', name: 'Фонарь', price: 150, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['LED', 'Аккум'] },
    { id: 'backpack', name: 'Рюкзак', price: 300, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['40л', '60л'] },
    { id: 'thermos', name: 'Термос', price: 200, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['1л', '2л'] },
    { id: 'axe', name: 'Топор', price: 250, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['600г', '1кг'] },
    { id: 'pot', name: 'Котелок', price: 180, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['1л', '2л'] },
    { id: 'sleeping-bag', name: 'Спальник', price: 400, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['-5°C', '-15°C'] },
    { id: 'gas-burner', name: 'Горелка газовая', price: 300, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['Портат', 'Туристич'] },
    { id: 'gas-canister', name: 'Газовые баллоны', price: 100, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['220г', '450г'] },
    { id: 'mat', name: 'Пенка сидушка', price: 80, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['Каремат', 'Сидушка'] },
    { id: 'knife', name: 'Нож', price: 150, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['Склад', 'Фикс'] },
    { id: 'chair', name: 'Туристический стул', price: 200, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['Склад', 'Легкий'] }
  ];

  return (
    <section id="catalog" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Популярное оборудование</h2>
        
        {/* Инструменты */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-center mb-8 text-primary">🔧 Инструменты и оборудование</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolsData.map((item) => (
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
                  <CardDescription>От {item.price}₽/сутки</CardDescription>
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

        {/* Туристическое снаряжение */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl font-semibold text-center mb-8 text-primary">⛺ Туристическое снаряжение</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campingData.map((item) => (
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
                  <CardDescription>От {item.price}₽/сутки</CardDescription>
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