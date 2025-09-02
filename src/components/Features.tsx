import Icon from "@/components/ui/icon";

export default function Features() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="py-16 bg-white opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-center mb-12">Категории инструментов</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className="text-center opacity-0 animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-200" 
            style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}
            onClick={scrollToCatalog}
          >
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="font-heading text-xl font-semibold mb-2">Электроинструменты</h3>
            <p className="text-secondary">Болгарки, шуруповерты, лобзики, пилы, перфораторы, реноваторы</p>
          </div>
          <div 
            className="text-center opacity-0 animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-200" 
            style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}
            onClick={scrollToCatalog}
          >
            <div className="text-6xl mb-4">🧽</div>
            <h3 className="font-heading text-xl font-semibold mb-2">Уборка и покраска</h3>
            <p className="text-secondary">Пароочистители, пылесосы, краскопульты</p>
          </div>
          <div 
            className="text-center opacity-0 animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-200" 
            style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}
            onClick={scrollToCatalog}
          >
            <div className="text-6xl mb-4">🏗️</div>
            <h3 className="font-heading text-xl font-semibold mb-2">Оборудование</h3>
            <p className="text-secondary">Генераторы, домкраты, прожекторы, бетономешалки, зарядные устройства</p>
          </div>
        </div>
      </div>
    </section>
  );
}