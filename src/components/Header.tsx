import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: string;
  name: string;
  price: number;
  hourlyPrice: number;
  image: string;
  quantity: number;
  rentalType: 'hourly' | 'daily';
}

interface HeaderProps {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  setCartItems: (items: CartItem[]) => void;
}

export default function Header({ 
  cartItems, 
  isCartOpen, 
  setIsCartOpen, 
  updateQuantity, 
  removeFromCart, 
  setCartItems 
}: HeaderProps) {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.rentalType === 'hourly' ? item.hourlyPrice : item.price;
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const updateRentalType = (id: string, rentalType: 'hourly' | 'daily') => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, rentalType } : item
    ));
  };

  const handleOrderSubmit = () => {
    const orderText = `*Заявка на аренду инструментов ToolNord*\n\nТовары:\n${cartItems.map(item => {
      const itemPrice = item.rentalType === 'hourly' ? item.hourlyPrice : item.price;
      const timeUnit = item.rentalType === 'hourly' ? 'час' : 'день';
      const timeUnits = item.rentalType === 'hourly' ? 'часов' : 'дней';
      const unitWord = item.quantity === 1 ? timeUnit : timeUnits;
      const totalPrice = itemPrice * item.quantity;
      return `• ${item.name} - ${item.quantity} ${unitWord} (${itemPrice}₽/${timeUnit}) = ${totalPrice}₽`;
    }).join('\n')}\n\n*Итого: ${getTotalPrice()}₽*\n\nПрошу связаться для оформления заказа.`;
    
    const encodedText = encodeURIComponent(orderText);
    window.open(`https://wa.me/79508924419?text=${encodedText}`, '_blank');
  };

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Mountain" size={32} className="text-white" />
            <h1 className="font-heading text-2xl font-bold">ToolNord</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#catalog" className="hover:text-gray-200 transition-colors">Каталог</a>
            <a href="#prices" className="hover:text-gray-200 transition-colors">Цены</a>
            <a href="#conditions" className="hover:text-gray-200 transition-colors">Условия</a>
            <a href="#contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center space-x-2">
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="secondary" size="sm" className="relative">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Корзина
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-white text-primary min-w-[20px] h-5 flex items-center justify-center text-xs p-0">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                  <SheetDescription>
                    {cartItems.length === 0 ? 'Корзина пуста' : `Товаров в корзине: ${getTotalItems()}`}
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <Icon name="ShoppingCart" size={48} className="text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Корзина пуста</p>
                      <p className="text-sm text-gray-400">Добавьте товары из каталога</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {cartItems.map(item => (
                          <div key={`${item.id}-${item.rentalType}`} className="p-4 border rounded-lg space-y-3">
                            <div className="flex items-start space-x-3">
                              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{item.name}</h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  Цена: {item.price}₽/сутки • {item.hourlyPrice}₽/час
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="w-8 h-8 p-0 text-red-500 hover:text-red-700"
                              >
                                <Icon name="Trash2" size={14} />
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-600">Тип аренды</label>
                                <Select value={item.rentalType} onValueChange={(value: 'hourly' | 'daily') => updateRentalType(item.id, value)}>
                                  <SelectTrigger className="h-8">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="daily">На сутки</SelectItem>
                                    <SelectItem value="hourly">Почасовая</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-600">
                                  Количество {item.rentalType === 'hourly' ? 'часов' : 'дней'}
                                </label>
                                <div className="flex items-center space-x-1">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-6 h-8 p-0"
                                  >
                                    -
                                  </Button>
                                  <Input 
                                    type="number" 
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                    className="h-8 w-12 text-center p-0"
                                    min="1"
                                  />
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-6 h-8 p-0"
                                  >
                                    +
                                  </Button>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center pt-2 border-t">
                              <span className="text-xs text-gray-500">
                                {item.quantity} {item.rentalType === 'hourly' ? (item.quantity === 1 ? 'час' : 'часов') : (item.quantity === 1 ? 'день' : 'дней')}
                              </span>
                              <span className="font-medium">
                                {(item.rentalType === 'hourly' ? item.hourlyPrice : item.price) * item.quantity}₽
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold">Итого:</span>
                          <span className="font-semibold text-lg">{getTotalPrice()}₽</span>
                        </div>
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90"
                          onClick={handleOrderSubmit}
                        >
                          <Icon name="CreditCard" size={16} className="mr-2" />
                          Оформить заказ
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full mt-2"
                          onClick={() => setCartItems([])}
                        >
                          Очистить корзину
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}