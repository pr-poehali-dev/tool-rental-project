import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import RentalPopover from "./RentalPopover";

interface CartItem {
  id: string;
  name: string;
  price: number;
  hourlyPrice: number;
  image: string;
  rentalType: 'hourly' | 'daily';
}

interface CatalogProps {
  addToCart: (item: CartItem) => void;
}

export default function Catalog({ addToCart }: CatalogProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [rentalModal, setRentalModal] = useState<{ 
    item: any; 
    isOpen: boolean; 
    buttonRef: HTMLButtonElement | null;
  }>({ 
    item: null, 
    isOpen: false, 
    buttonRef: null 
  });

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openRentalModal = (item: any, event: React.MouseEvent) => {
    const button = event.currentTarget as HTMLButtonElement;
    setRentalModal({ item, isOpen: true, buttonRef: button });
  };

  const closeRentalModal = () => {
    setRentalModal({ item: null, isOpen: false, buttonRef: null });
  };

  const handleAddToCart = (rentalType: 'hourly' | 'daily') => {
    if (rentalModal.item) {
      addToCart({
        id: rentalModal.item.id,
        name: rentalModal.item.name,
        price: rentalModal.item.price,
        hourlyPrice: rentalModal.item.hourlyPrice,
        image: rentalModal.item.image,
        rentalType
      });
      closeRentalModal();
    }
  };
  const powerToolsData = [
    { id: 'grinder', name: 'Болгарка', price: 270, hourlyPrice: 110, image: '/img/4db31d9d-eba9-482a-9692-25a7544aca68.jpg', badges: ['125мм'] },
    { id: 'screwdriver', name: 'Шуруповерт', price: 140, hourlyPrice: 60, image: 'https://cdn.poehali.dev/files/dd2430c0-4dd0-4080-958b-d377e7b10714.jpg', badges: ['18V'] },
    { id: 'jigsaw', name: 'Лобзик', price: 220, hourlyPrice: 90, image: 'https://cdn.poehali.dev/files/377e8f2d-35c6-43ff-85bd-7ae4fe7ee688.jpg', badges: ['Электро'] },
    { id: 'circular-saw', name: 'Циркулярная пила', price: 250, hourlyPrice: 100, image: 'https://cdn.poehali.dev/files/99b766fa-eb73-4444-af05-30de294c8d05.jpg', badges: ['190мм'] },
    { id: 'reciprocating-saw', name: 'Сабельная пила', price: 200, hourlyPrice: 80, image: '/img/7f49204b-35e2-4835-9e2c-02f1321bcd1e.jpg', badges: ['Аккум'] },
    { id: 'perforator', name: 'Перфоратор', price: 600, hourlyPrice: 250, image: '/img/8e692f85-62a5-44a8-b9f1-04eeb0249b8a.jpg', badges: ['SDS+'] },
    { id: 'heat-gun', name: 'Строительный фен', price: 100, hourlyPrice: 40, image: '/img/c595f387-16fe-4eb9-974a-401c46098843.jpg', badges: ['2000Вт'] },
    { id: 'renovator', name: 'Реноватор', price: 320, hourlyPrice: 130, image: 'https://cdn.poehali.dev/files/cedc8e4e-efe5-45c4-a448-40b5ac107452.jpg', badges: ['Насадки'] },

    { id: 'sander', name: 'Шлифовальная машинка', price: 280, hourlyPrice: 110, image: '/img/c3cba4e6-8d40-4b89-b871-f7b577415f1b.jpg', badges: ['Орбитальная'] },
    { id: 'planer', name: 'Электрорубанок', price: 250, hourlyPrice: 100, image: '/img/4cf73f13-8f19-48a6-8144-a2eebf92980c.jpg', badges: ['110мм'] },
    { id: 'impact-wrench', name: 'Гайковёрт', price: 310, hourlyPrice: 130, image: '/img/40568c3e-7785-4034-bcb0-ff6260bbbd0c.jpg', badges: ['1/2"'] },
    { id: 'miter-saw', name: 'Торцовочная пила', price: 380, hourlyPrice: 150, image: 'https://cdn.poehali.dev/files/91ce55a9-9daa-4954-b87d-609f495af26f.jpg', badges: ['210мм'] },
    { id: 'router', name: 'Фрезер', price: 290, hourlyPrice: 120, image: 'https://cdn.poehali.dev/files/41c775d7-842f-48f0-bed8-a388840c73c8.jpg', badges: ['Набор фрез'] }
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
    { id: 'pipe-welder', name: 'Паяльник для пластиковых труб', price: 100, hourlyPrice: 40, image: 'https://cdn.poehali.dev/files/de474d95-c34d-48aa-aae0-54803392e1c5.jpg', badges: ['1000Вт'] },
    { id: 'stands', name: 'Козлы подпорки (пара)', price: 140, hourlyPrice: 60, image: '/img/62efdb6e-017c-412e-a412-67bcba628673.jpg', badges: ['Складные'] },
    { id: 'extension-cord', name: 'Удлинитель (катушка с кабелем)', price: 90, hourlyPrice: 40, image: '/img/b09373e0-024a-46f8-820f-b6e4b2b8711b.jpg', badges: ['50м'] },
    { id: 'magnetic-level', name: 'Длинный уровень на магните', price: 50, hourlyPrice: 20, image: '/img/79882584-ad60-4dfc-8779-b9c6c447536b.jpg', badges: ['600мм'] },
    { id: 'straps-set', name: 'Набор стяжек/ленты/щипцы', price: 70, hourlyPrice: 30, image: '/img/d50cfa22-ef13-49fc-aa90-8a8f767ca973.jpg', badges: ['Разные'] },
    { id: 'clamps', name: 'Струбцины', price: 50, hourlyPrice: 20, image: 'https://cdn.poehali.dev/files/279fabff-2482-455c-ace9-16b4cbd97e92.jpg', badges: ['F-обр'] },
    { id: 'rivet-gun', name: 'Клепальник', price: 80, hourlyPrice: 35, image: 'https://cdn.poehali.dev/files/d94c2f75-ee9f-4118-b623-4ad384dc6b7a.jpg', badges: ['Ручной'] }
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
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center cursor-pointer group relative"
                       onClick={() => openImageModal(item.image, item.name)}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                      <Icon name="ZoomIn" size={24} className="text-white opacity-0 group-hover:opacity-80" />
                    </div>
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
                    onClick={(e) => openRentalModal(item, e)}
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
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center cursor-pointer group relative"
                       onClick={() => openImageModal(item.image, item.name)}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                      <Icon name="ZoomIn" size={24} className="text-white opacity-0 group-hover:opacity-80" />
                    </div>
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
                    onClick={(e) => openRentalModal(item, e)}
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
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center cursor-pointer group relative"
                       onClick={() => openImageModal(item.image, item.name)}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                      <Icon name="ZoomIn" size={24} className="text-white opacity-0 group-hover:opacity-80" />
                    </div>
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
                    onClick={(e) => openRentalModal(item, e)}
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

      {/* Modal for image zoom */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4"
             onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Modal for rental type selection */}
      {rentalModal.isOpen && rentalModal.item && rentalModal.buttonRef && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-[9998]"
               onClick={closeRentalModal} />
          <RentalPopover 
            item={rentalModal.item}
            buttonRef={rentalModal.buttonRef}
            onAddToCart={handleAddToCart}
            onClose={closeRentalModal}
          />
        </>
      )}
    </section>
  );
}