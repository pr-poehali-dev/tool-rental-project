import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative py-20 animate-fade-in overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/2a4f786e-bdf8-4260-a2ae-5011c8d13c40.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Аренда инструментов и туристического снаряжения
        </h2>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">Профессиональный прокат качественного оборудования в городе Кандалакша. Всё необходимое для ваших проектов и походов — от строительных инструментов до туристического снаряжения.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Search" size={20} className="mr-2" />
            Смотреть каталог
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm">
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
}