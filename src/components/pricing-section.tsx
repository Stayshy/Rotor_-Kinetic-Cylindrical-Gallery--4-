import { Check, Sparkles, Crown, Star } from "lucide-react";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Молодой росток",
    price: "0",
    period: "навсегда",
    description: "Посадите первое семя вашей истории",
    icon: Star,
    color: "from-[#A5D4AC] to-[#8FB896]",
    accentColor: "#8FB896",
    features: [
      "До 50 членов семьи",
      "До 100 фотографий",
      "Базовое древо (3 поколения)",
      "Экспорт в PDF",
      "1 ГБ хранилища",
      "Мобильное приложение"
    ],
    cta: "Посадить росток",
    popular: false,
    badge: null,
    plantStage: "seedling"
  },
  {
    name: "Цветущее дерево",
    price: "990",
    period: "в месяц",
    description: "Для пышного сада воспоминаний",
    icon: Sparkles,
    color: "from-[#F4C2C2] to-[#D6A1A1]",
    accentColor: "#F4C2C2",
    features: [
      "Неограниченное количество членов",
      "Неограниченное количество фотографий",
      "Расширенное древо",
      "Книга воспоминаний",
      "50 ГБ облачного хранилища",
      "Совместная работа (5 редакторов)",
      "Приоритетная поддержка",
      "Персонализация дизайна"
    ],
    cta: "Вырастить дерево",
    popular: true,
    badge: "Самый популярный",
    plantStage: "flowering"
  },
  {
    name: "Вековой дуб",
    price: "1990",
    period: "в месяц",
    description: "Могучее древо для больших династий",
    icon: Crown,
    color: "from-[#E8D4A0] to-[#C8A951]",
    accentColor: "#C8A951",
    features: [
      "Всё из тарифа 'Цветущее дерево'",
      "Безлимитное хранилище",
      "Неограниченное количество редакторов",
      "ДНК-интеграция",
      "Профессиональные шаблоны",
      "Печать книг (скидка 30%)",
      "Персональный менеджер",
      "Консультация генеалога",
      "Восстановление фото (AI)"
    ],
    cta: "Создать вековое древо",
    popular: false,
    badge: "Премиум",
    plantStage: "mature"
  }
];

export function PricingSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Forest background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8DCC4] via-[#D4C5A9] to-[#C4B89A]"></div>
      
      {/* Sun rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-1 h-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 243, 176, 0.8), transparent)',
              transform: `rotate(${i * 22.5 - 90}deg)`,
              transformOrigin: 'top center'
            }}
          ></div>
        ))}
      </div>
      
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#6B9B76]/30 to-transparent"></div>
      
      {/* Decorative flowers in foreground */}
      <div className="absolute bottom-12 left-10 opacity-60">
        <svg width="80" height="100" viewBox="0 0 80 100">
          {/* Stem */}
          <line x1="40" y1="100" x2="40" y2="30" stroke="#6B9B76" strokeWidth="3"/>
          {/* Flower */}
          <circle cx="40" cy="25" r="12" fill="#F4C2C2"/>
          <circle cx="34" cy="19" r="8" fill="#F4C2C2" opacity="0.8"/>
          <circle cx="46" cy="19" r="8" fill="#F4C2C2" opacity="0.8"/>
          <circle cx="34" cy="31" r="8" fill="#F4C2C2" opacity="0.8"/>
          <circle cx="46" cy="31" r="8" fill="#F4C2C2" opacity="0.8"/>
          <circle cx="40" cy="25" r="6" fill="#C8A951"/>
        </svg>
      </div>
      
      <div className="absolute bottom-12 right-16 opacity-60">
        <svg width="80" height="100" viewBox="0 0 80 100">
          <line x1="40" y1="100" x2="40" y2="30" stroke="#6B9B76" strokeWidth="3"/>
          <circle cx="40" cy="25" r="12" fill="#E8D4A0"/>
          <circle cx="34" cy="19" r="8" fill="#E8D4A0" opacity="0.8"/>
          <circle cx="46" cy="19" r="8" fill="#E8D4A0" opacity="0.8"/>
          <circle cx="34" cy="31" r="8" fill="#E8D4A0" opacity="0.8"/>
          <circle cx="46" cy="31" r="8" fill="#E8D4A0" opacity="0.8"/>
          <circle cx="40" cy="25" r="6" fill="#7B2D26"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          {/* Birds flying */}
          <div className="relative mb-12">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute left-1/2 opacity-30"
                style={{
                  top: `${20 + i * 10}px`,
                  animation: `fly ${6 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 1}s`
                }}
              >
                <svg width="30" height="20" viewBox="0 0 30 20">
                  <path d="M 5 10 Q 10 5 15 10 Q 20 5 25 10" stroke="#7B2D26" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            ))}
          </div>
          
          <div className="inline-flex items-center gap-4 mb-8 bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full border-2 border-[#8FB896]/40 shadow-lg">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="#F4C2C2"/>
              <circle cx="9" cy="9" r="5" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="15" cy="9" r="5" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="9" cy="15" r="5" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="15" cy="15" r="5" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="12" cy="12" r="4" fill="#C8A951"/>
            </svg>
            <span className="text-sm tracking-[0.3em] text-[#5C4033] uppercase">Выберите своё дерево</span>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8" fill="#E8D4A0"/>
              <circle cx="9" cy="9" r="5" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="15" cy="9" r="5" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="9" cy="15" r="5" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="15" cy="15" r="5" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="12" cy="12" r="4" fill="#7B2D26"/>
            </svg>
          </div>
          
          <h2 className="text-6xl lg:text-7xl mb-8 leading-tight">
            <span className="block gold-text embossed">Вырастите древо</span>
            <span className="block text-[#7B2D26] mt-2">своей мечты</span>
          </h2>
          
          <p className="text-2xl text-[#6B6256] max-w-3xl mx-auto leading-relaxed">
            От первого ростка до могучего дерева — выберите стадию роста вашей семейной истории
          </p>
        </div>
        
        {/* Pricing cards as trees */}
        <div className="grid lg:grid-cols-3 gap-12 items-end">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-700 ${
                plan.popular ? 'lg:scale-110' : ''
              }`}
              style={{
                animation: `treeGrow 1.2s ease-out forwards`,
                animationDelay: `${index * 0.3}s`,
                opacity: 0
              }}
            >
              {/* Popular badge as butterfly */}
              {plan.popular && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-30">
                  <div className="relative animate-bounce">
                    <Badge className="bg-gradient-to-r from-[#F4C2C2] to-[#D6A1A1] text-[#4B2C20] px-6 py-2 shadow-2xl text-sm tracking-wider border-4 border-white rounded-full">
                      🦋 {plan.badge}
                    </Badge>
                  </div>
                </div>
              )}
              
              {/* Tree trunk/pot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-32 z-0">
                <svg viewBox="0 0 100 150" className="w-full h-full">
                  {/* Pot */}
                  <path
                    d="M 30 100 L 25 150 L 75 150 L 70 100 Z"
                    fill="#8C6C44"
                    stroke="#5C4033"
                    strokeWidth="2"
                  />
                  <ellipse cx="50" cy="100" rx="25" ry="8" fill="#7A5E3A"/>
                  {/* Soil */}
                  <ellipse cx="50" cy="100" rx="22" ry="6" fill="#6B5B44"/>
                  {/* Trunk growing from pot */}
                  <rect
                    x="45"
                    y={plan.plantStage === 'seedling' ? '80' : plan.plantStage === 'flowering' ? '50' : '20'}
                    width="10"
                    height={plan.plantStage === 'seedling' ? '20' : plan.plantStage === 'flowering' ? '50' : '80'}
                    fill="#5C4033"
                    rx="2"
                  />
                </svg>
              </div>
              
              {/* Card as tree canopy */}
              <div className={`relative h-full bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-all duration-500 mb-16`}>
                {/* Tree canopy shape at top */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full opacity-10"
                     style={{ background: `radial-gradient(circle, ${plan.accentColor}, transparent)` }}></div>
                
                {/* Header with gradient */}
                <div className={`relative p-10 bg-gradient-to-br ${plan.color} overflow-hidden`}>
                  {/* Leaves decoration */}
                  <div className="absolute -right-8 -top-8 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx={60 + i * 15}
                        cy={30 + i * 10}
                        rx="20"
                        ry="12"
                        fill="white"
                        transform={`rotate(${i * 30} ${60 + i * 15} ${30 + i * 10})`}
                        className="leaf-sway"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <plan.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl text-white mb-2 tracking-wide">{plan.name}</h3>
                    <p className="text-white/90 text-sm mb-6 italic">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl text-white tracking-tight">₽{plan.price}</span>
                      <span className="text-xl text-white/80">/ {plan.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="p-10">
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, fIndex) => (
                      <li 
                        key={fIndex} 
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="relative flex-shrink-0 mt-1">
                          {/* Leaf checkmark */}
                          <svg width="24" height="24" viewBox="0 0 24 24" className="group-hover/item:scale-110 transition-transform">
                            <ellipse cx="12" cy="12" rx="10" ry="6" fill={plan.accentColor} opacity="0.8" transform="rotate(-30 12 12)"/>
                            <path d="M 7 12 L 11 16 L 17 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <span className="text-[#4B2C20] leading-relaxed text-lg">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button 
                    className={`w-full rounded-2xl px-8 py-5 transition-all duration-500 text-lg relative overflow-hidden group/btn shadow-lg hover:shadow-xl ${
                      plan.popular 
                        ? `bg-gradient-to-r ${plan.color} text-white` 
                        : 'bg-white border-2 border-current text-[#4B2C20]'
                    }`}
                    style={{ borderColor: plan.accentColor }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {plan.cta}
                      <svg width="20" height="20" viewBox="0 0 20 20" className="group-hover/btn:translate-x-2 transition-transform">
                        <circle cx="10" cy="10" r="6" fill="currentColor" opacity="0.3"/>
                        <path d="M 7 10 L 13 10 M 10 7 L 13 10 L 10 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
                
                {/* Corner flower decoration */}
                {plan.badge && (
                  <div className="absolute bottom-8 right-8">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="animate-spin" style={{ animationDuration: '20s' }}>
                      <circle cx="20" cy="20" r="10" fill={plan.accentColor}/>
                      <circle cx="15" cy="15" r="6" fill={plan.accentColor} opacity="0.7"/>
                      <circle cx="25" cy="15" r="6" fill={plan.accentColor} opacity="0.7"/>
                      <circle cx="15" cy="25" r="6" fill={plan.accentColor} opacity="0.7"/>
                      <circle cx="25" cy="25" r="6" fill={plan.accentColor} opacity="0.7"/>
                      <circle cx="20" cy="20" r="5" fill="#FFFFFF"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom garden bed */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-4 border-[#8FB896]/40 shadow-xl">
            <p className="text-[#4B2C20] text-xl mb-4">
              Нужен целый лес для музея или архива?
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8FB896] to-[#6B9B76] hover:from-[#A5D4AC] hover:to-[#8FB896] px-8 py-4 rounded-2xl transition-all text-white shadow-lg hover:shadow-xl">
              <span>Вырастить корпоративный сад</span>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M 5 10 L 15 10 M 12 7 L 15 10 L 12 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fly {
          0%, 100% {
            transform: translateX(-100px);
          }
          50% {
            transform: translateX(100px);
          }
        }
        
        @keyframes treeGrow {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.5);
          }
          60% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes leaf-sway {
          0%, 100% {
            transform: rotate(var(--rotation, 0deg)) translateX(0);
          }
          50% {
            transform: rotate(var(--rotation, 0deg)) translateX(5px);
          }
        }
        
        .leaf-sway {
          animation: leaf-sway 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
