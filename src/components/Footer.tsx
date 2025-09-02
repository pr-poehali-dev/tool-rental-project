import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Mountain" size={24} />
              <h3 className="font-heading text-xl font-bold">ToolNord</h3>
            </div>
            <p className="text-gray-200">Надежный прокат инструментов и туристического снаряжения в г. Кандалакша </p>
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
              <li><a href="#" className="hover:text-white"></a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-200">
              <li>+7 (950) 892-44-19</li>
              <li>toolnord51@mail.ru</li>
              <li>г. Кандалакша
</li>
              <li>Пн-Вс: 09:00-20:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-200">
          <p>© 2025 ToolNord. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}