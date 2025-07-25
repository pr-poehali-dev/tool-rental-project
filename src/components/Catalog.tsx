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
  return (
    <section id="catalog" className="py-16 bg-gray-50 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Популярное оборудование</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
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
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => addToCart({
                  id: 'drill',
                  name: 'Дрели и перфораторы',
                  price: 500,
                  image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg'
                })}
              >
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
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => addToCart({
                  id: 'tent',
                  name: 'Палатки туристические',
                  price: 800,
                  image: '/img/a567fb75-efd9-4c18-9edc-a4cdc9f3d05b.jpg'
                })}
              >
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
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => addToCart({
                  id: 'navigation',
                  name: 'Навигационное оборудование',
                  price: 300,
                  image: '/img/9f1aebf9-ef6a-4272-acf3-62ee949b88c5.jpg'
                })}
              >
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
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => addToCart({
                  id: 'tools',
                  name: 'Строительный инструмент',
                  price: 200,
                  image: '/placeholder.svg'
                })}
              >
                <Icon name="Plus" size={16} className="mr-2" />
                В корзину
              </Button>
            </CardContent>
          </Card>
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