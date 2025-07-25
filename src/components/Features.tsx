import Icon from "@/components/ui/icon";

export default function Features() {
  return (
    <section className="py-16 bg-white opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
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
  );
}