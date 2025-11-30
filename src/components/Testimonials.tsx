import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <img
                src="https://cdn.poehali.dev/files/3cf4ccb7-7789-4142-885a-82e2dcbc1428.jpg"
                alt="Отзыв клиента"
                className="w-full h-auto object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
