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
    { id: 'drill', name: 'Дрели и перфораторы', price: 500, image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg', badges: ['Bosch', 'Makita'] },
    { id: 'screwdriver', name: 'Шуруповерт', price: 300, image: '/placeholder.svg', badges: ['18V', '12V'] },
    { id: 'grinder', name: 'Болгарка', price: 400, image: '/placeholder.svg', badges: ['125мм', '230мм'] },
    { id: 'wrench-set', name: 'Накидные ключи', price: 150, image: '/placeholder.svg', badges: ['Набор', '8-22мм'] },
    { id: 'gas-wrench', name: 'Газовый ключ', price: 200, image: '/placeholder.svg', badges: ['№1', '№2'] },
    { id: 'adjustable-wrench', name: 'Разводной ключ', price: 100, image: '/placeholder.svg', badges: ['250мм', '300мм'] },
    { id: 'sledgehammer', name: 'Молоток', price: 120, image: '/placeholder.svg', badges: ['500г', '1кг'] },
    { id: 'jigsaw', name: 'Лобзик', price: 350, image: '/placeholder.svg', badges: ['Электро', 'Аккум'] },
    { id: 'perforator', name: 'Перфоратор', price: 600, image: '/placeholder.svg', badges: ['SDS+', 'SDS-max'] },
    { id: 'screwdrivers', name: 'Отвертки', price: 80, image: '/placeholder.svg', badges: ['Набор', 'Phillips'] },
    { id: 'level', name: 'Уровень', price: 150, image: '/placeholder.svg', badges: ['60см', '120см'] },
    { id: 'tape-measure', name: 'Рулетка', price: 60, image: '/placeholder.svg', badges: ['5м', '10м'] },
    { id: 'crowbar', name: 'Лом', price: 180, image: '/placeholder.svg', badges: ['60см', '90см'] },
    { id: 'shovel', name: 'Лопаты/грабли', price: 100, image: '/placeholder.svg', badges: ['Штыковая', 'Совковая'] },
    { id: 'square', name: 'Уголок', price: 80, image: '/placeholder.svg', badges: ['250мм', '300мм'] },
    { id: 'stapler', name: 'Строительный степлер', price: 200, image: '/placeholder.svg', badges: ['Механ', 'Пневмо'] }
  ];

  const campingData = [
    { id: 'tent', name: 'Палатки туристические', price: 800, image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg', badges: ['2-4 места'] },
    { id: 'flashlight', name: 'Фонарь', price: 150, image: '/placeholder.svg', badges: ['LED', 'Аккум'] },
    { id: 'backpack', name: 'Рюкзак', price: 300, image: '/placeholder.svg', badges: ['40л', '60л'] },
    { id: 'thermos', name: 'Термос', price: 200, image: '/placeholder.svg', badges: ['1л', '2л'] },
    { id: 'axe', name: 'Топор', price: 250, image: '/placeholder.svg', badges: ['600г', '1кг'] },
    { id: 'pot', name: 'Котелок', price: 180, image: '/placeholder.svg', badges: ['1л', '2л'] },
    { id: 'sleeping-bag', name: 'Спальник', price: 400, image: '/placeholder.svg', badges: ['-5°C', '-15°C'] },
    { id: 'gas-burner', name: 'Горелка газовая', price: 300, image: '/placeholder.svg', badges: ['Портат', 'Туристич'] },
    { id: 'gas-canister', name: 'Газовые баллоны', price: 100, image: '/placeholder.svg', badges: ['220г', '450г'] },
    { id: 'mat', name: 'Пенка сидушка', price: 80, image: '/placeholder.svg', badges: ['Каремат', 'Сидушка'] },
    { id: 'knife', name: 'Нож', price: 150, image: '/placeholder.svg', badges: ['Склад', 'Фикс'] },
    { id: 'chair', name: 'Туристический стул', price: 200, image: '/placeholder.svg', badges: ['Склад', 'Легкий'] }
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
                    {item.image === '/placeholder.svg' ? (
                      <Icon name="Wrench" size={64} className="text-secondary" />
                    ) : (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    )}
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
                    {item.image === '/placeholder.svg' ? (
                      <Icon name="Mountain" size={64} className="text-secondary" />
                    ) : (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    )}
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
          <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-200">
            Смотреть весь каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}