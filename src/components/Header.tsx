import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
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
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
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
                          <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-sm text-gray-500">{item.price}₽/сутки</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 p-0"
                              >
                                -
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 p-0"
                              >
                                +
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="w-8 h-8 p-0 text-red-500 hover:text-red-700"
                              >
                                <Icon name="Trash2" size={14} />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold">Итого:</span>
                          <span className="font-semibold text-lg">{getTotalPrice()}₽/сутки</span>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90">
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
            <Button variant="secondary" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}