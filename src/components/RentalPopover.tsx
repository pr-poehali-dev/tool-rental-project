import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

interface RentalPopoverProps {
  item: {
    name: string;
    price: number;
    hourlyPrice: number;
  };
  buttonRef: HTMLButtonElement;
  onAddToCart: (rentalType: 'hourly' | 'daily') => void;
  onClose: () => void;
}

export default function RentalPopover({ item, buttonRef, onAddToCart, onClose }: RentalPopoverProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const rect = buttonRef.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + scrollTop
      });
    };

    updatePosition();
    
    // Обновляем позицию при скролле или изменении размера окна
    const handleResize = () => updatePosition();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updatePosition);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [buttonRef]);

  const modalWidth = 256; // w-64 = 256px
  const leftPosition = Math.max(16, Math.min(position.x - modalWidth / 2, window.innerWidth - modalWidth - 16));

  return (
    <div 
      className="fixed z-[9999] bg-white rounded-lg shadow-xl p-4 w-64"
      style={{
        left: `${leftPosition}px`,
        top: `${position.y - 20}px`,
        transform: 'translateY(-100%)'
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">Выберите тип аренды</h3>
        <button onClick={onClose}>
          <Icon name="X" size={16} />
        </button>
      </div>
      
      <div className="mb-3">
        <h4 className="font-medium text-sm">{item.name}</h4>
      </div>

      <div className="space-y-2">
        <Button
          className="w-full text-left justify-start h-auto py-2"
          variant="outline"
          onClick={() => onAddToCart('daily')}
        >
          <div className="text-left">
            <div className="font-medium text-sm">На сутки</div>
            <div className="text-xs text-gray-500">{item.price}₽/сутки</div>
          </div>
        </Button>
        
        <Button
          className="w-full text-left justify-start h-auto py-2"
          variant="outline"
          onClick={() => onAddToCart('hourly')}
        >
          <div className="text-left">
            <div className="font-medium text-sm">Почасовая</div>
            <div className="text-xs text-gray-500">{item.hourlyPrice}₽/час</div>
          </div>
        </Button>
      </div>
      
      {/* Arrow pointing down to the item */}
      <div 
        className="absolute top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"
        style={{
          left: `${position.x - leftPosition - 8}px`
        }}
      />
    </div>
  );
}