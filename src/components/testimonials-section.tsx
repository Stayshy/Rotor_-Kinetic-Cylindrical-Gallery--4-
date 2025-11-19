import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Елена Соколова",
    role: "Историк семьи, Москва",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjQ2MDM0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Невероятная платформа! Наконец-то смогла собрать всю историю нашей семьи в одном месте. Интерактивное древо помогло найти связи, о которых я даже не подозревала. Спасибо за возможность сохранить память для моих внуков!",
    rating: 5
  },
  {
    name: "Дмитрий Петров",
    role: "Генеалог-любитель, Санкт-Петербург",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI0NjAzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Уже 10 лет занимаюсь изучением генеалогии. Перепробовал множество сервисов, но 'Альбом воспоминаний' — лучшее, что я видел. Книга памяти получилась настолько красивой, что распечатал для всех родственников!",
    rating: 5
  },
  {
    name: "Анна Михайлова",
    role: "Многодетная мама, Казань",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NjI0NjAzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Замечательный подарок для моей бабушки на 85-летие! Вся семья приняла участие в создании книги — добавляли фотографии, истории. Бабушка была в восторге! Теперь каждый праздник мы вместе пролистываем страницы.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#4B2C20] to-[#5C4033]">
      {/* Ornamental background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <circle cx="200" cy="200" r="150" fill="none" stroke="#C8A951" strokeWidth="1"/>
          <circle cx="600" cy="400" r="180" fill="none" stroke="#C8A951" strokeWidth="1"/>
          <path d="M0,300 Q200,280 400,300 T800,300" fill="none" stroke="#C8A951" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
            <span className="text-sm tracking-widest text-[#C8A951] uppercase">Отзывы</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
          </div>
          
          <h2 className="text-5xl mb-6 text-[#FAF8F5]">
            <span className="gold-text">Что говорят</span>
            <br />
            <span className="text-[#D6A1A1]">наши пользователи</span>
          </h2>
          
          <div className="h-px w-96 mx-auto bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent mb-6"></div>
          
          <p className="text-xl text-[#C4C1A4] max-w-3xl mx-auto leading-relaxed">
            Более 2000 семей уже доверили нам свои самые ценные воспоминания
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-[#C8A951]/20 paper-texture group hover:shadow-[0_20px_60px_rgba(200,169,81,0.3)] transition-all duration-300 hover:scale-105 relative"
            >
              {/* Quote icon decoration */}
              <div className="absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C8A951] to-[#8C6C44] flex items-center justify-center shadow-xl">
                <Quote className="w-7 h-7 text-white" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C8A951] text-[#C8A951]" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-[#4B2C20] leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              
              {/* Decorative separator */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-[#C8A951]/30 to-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A951]"></div>
                <div className="flex-1 h-px bg-gradient-to-l from-[#C8A951]/30 to-transparent"></div>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C8A951]/30 to-[#8C6C44]/30 blur"></div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#1B1B1B] tracking-wide">{testimonial.name}</h4>
                  <p className="text-sm text-[#8C6C44] tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust badges */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-12">
          <div className="text-center">
            <div className="text-4xl gold-text mb-2">4.9/5</div>
            <p className="text-sm text-[#C4C1A4] tracking-wide">Средняя оценка</p>
          </div>
          <div className="w-px h-16 bg-[#C8A951]/30"></div>
          <div className="text-center">
            <div className="text-4xl text-[#D6A1A1] mb-2">98%</div>
            <p className="text-sm text-[#C4C1A4] tracking-wide">Рекомендуют друзьям</p>
          </div>
          <div className="w-px h-16 bg-[#C8A951]/30"></div>
          <div className="text-center">
            <div className="text-4xl text-[#C8A951] mb-2">2000+</div>
            <p className="text-sm text-[#C4C1A4] tracking-wide">Довольных семей</p>
          </div>
        </div>
      </div>
    </section>
  );
}
