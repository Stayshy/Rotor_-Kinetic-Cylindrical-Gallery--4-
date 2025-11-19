import * as React from "react";

import { GitBranch, Image, BookOpen, Cloud, Shield, Smartphone } from "lucide-react";
const features = [
  {
    icon: GitBranch,
    title: "Интерактивное древо",
    description: "Визуализируйте связи вашей семьи в красивом интерактивном формате с неограниченным количеством поколений.",
    color: "from-[#8FB896] to-[#6B9B76]",
    fruitColor: "#8FB896"
  },
  {
    icon: Image,
    title: "Безлимитное хранилище",
    description: "Загружайте неограниченное количество семейных фотографий в высоком качестве с автоматической организацией.",
    color: "from-[#C8A951] to-[#B89943]",
    fruitColor: "#C8A951"
  },
  {
    icon: BookOpen,
    title: "Книга воспоминаний",
    description: "Автоматически генерируйте красивые цифровые книги с историями, фотографиями и генеалогическими данными.",
    color: "from-[#D6A1A1] to-[#C78F8F]",
    fruitColor: "#D6A1A1"
  },
  {
    icon: Cloud,
    title: "Облачное хранение",
    description: "Ваши данные надёжно сохранены в облаке с автоматическим резервным копированием каждый день.",
    color: "from-[#A5D4AC] to-[#8FB896]",
    fruitColor: "#A5D4AC"
  },
  {
    icon: Shield,
    title: "Приватность",
    description: "Управляйте доступом к семейным данным, делитесь только тем, что хотите, с кем хотите.",
    color: "from-[#E8D4A0] to-[#C8A951]",
    fruitColor: "#E8D4A0"
  },
  {
    icon: Smartphone,
    title: "Мобильное приложение",
    description: "Доступ к вашей семейной истории в любое время с любого устройства - телефон, планшет, компьютер.",
    color: "from-[#F4C2C2] to-[#D6A1A1]",
    fruitColor: "#F4C2C2"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4F2F0] to-[#E8DCC4]">
      {/* Ground/grass */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#6B9B76]/20 to-transparent"></div>
      
      {/* Butterflies */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${20 + Math.random() * 40}%`,
            animation: `butterfly ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`
          }}
        >
          <svg width="30" height="30" viewBox="0 0 40 40">
            <ellipse cx="15" cy="20" rx="10" ry="15" fill={i % 2 === 0 ? "#F4C2C2" : "#E8D4A0"} opacity="0.8"/>
            <ellipse cx="25" cy="20" rx="10" ry="15" fill={i % 2 === 0 ? "#F4C2C2" : "#E8D4A0"} opacity="0.8"/>
            <circle cx="20" cy="20" r="2" fill="#4B2C20"/>
            <line x1="20" y1="15" x2="20" y2="25" stroke="#4B2C20" strokeWidth="1"/>
          </svg>
        </div>
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header as tree canopy */}
        <div className="text-center mb-24 relative">
          {/* Branch above title */}
          <svg className="mx-auto mb-8" width="300" height="60" viewBox="0 0 300 60">
            <path
              d="M 0 30 Q 75 20 150 30 Q 225 40 300 30"
              stroke="#7A5E3A"
              strokeWidth="3"
              fill="none"
              className="branch-draw"
            />
            {/* Leaves on branch */}
            <ellipse cx="75" cy="15" rx="12" ry="7" fill="#8FB896" opacity="0.8" className="leaf-sway" transform="rotate(-20 75 15)"/>
            <ellipse cx="150" cy="25" rx="14" ry="8" fill="#6B9B76" opacity="0.8" className="leaf-sway" style={{ animationDelay: '0.5s' }} transform="rotate(10 150 25)"/>
            <ellipse cx="225" cy="35" rx="12" ry="7" fill="#8FB896" opacity="0.8" className="leaf-sway" style={{ animationDelay: '1s' }} transform="rotate(-15 225 35)"/>
            
            {/* Small blossoms */}
            <g className="blossom-bloom">
              <circle cx="110" cy="22" r="5" fill="#F4C2C2"/>
              <circle cx="107" cy="19" r="3" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="113" cy="19" r="3" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="107" cy="25" r="3" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="113" cy="25" r="3" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="110" cy="22" r="2" fill="#C8A951"/>
            </g>
            
            <g className="blossom-bloom" style={{ animationDelay: '0.3s' }}>
              <circle cx="190" cy="32" r="5" fill="#E8D4A0"/>
              <circle cx="187" cy="29" r="3" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="193" cy="29" r="3" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="187" cy="35" r="3" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="193" cy="35" r="3" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="190" cy="32" r="2" fill="#7B2D26"/>
            </g>
          </svg>
          
          <h2 className="text-6xl lg:text-7xl mb-8 leading-tight">
            <span className="block gold-text embossed">Плоды нашего</span>
            <span className="block text-[#7B2D26] mt-2">древа возможностей</span>
          </h2>
          
          <p className="text-2xl text-[#6B6256] max-w-3xl mx-auto leading-relaxed">
            Каждая функция — спелый плод, готовый обогатить вашу семейную историю
          </p>
        </div>
        
        {/* Features as fruits hanging from branches */}
        <div className="relative">
          {/* Main branch structure */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="mainBranch" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#7A5E3A', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#5C4033', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#7A5E3A', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            
            {/* Horizontal main branch */}
            <path
              d="M 100 100 Q 600 80 1100 100"
              stroke="url(#mainBranch)"
              strokeWidth="15"
              fill="none"
              strokeLinecap="round"
              className="branch-grow"
            />
            
            {/* Hanging branches for each feature */}
            <path d="M 200 100 Q 200 150 200 200" stroke="#7A5E3A" strokeWidth="4" fill="none" className="branch-grow" style={{ animationDelay: '0.5s' }}/>
            <path d="M 400 90 Q 400 140 400 190" stroke="#7A5E3A" strokeWidth="4" fill="none" className="branch-grow" style={{ animationDelay: '0.6s' }}/>
            <path d="M 600 85 Q 600 135 600 185" stroke="#7A5E3A" strokeWidth="4" fill="none" className="branch-grow" style={{ animationDelay: '0.7s' }}/>
            <path d="M 800 90 Q 800 140 800 190" stroke="#7A5E3A" strokeWidth="4" fill="none" className="branch-grow" style={{ animationDelay: '0.8s' }}/>
            <path d="M 1000 100 Q 1000 150 1000 200" stroke="#7A5E3A" strokeWidth="4" fill="none" className="branch-grow" style={{ animationDelay: '0.9s' }}/>
            
            {/* Additional decorative branches */}
            <path d="M 300 95 Q 300 130 280 160" stroke="#7A5E3A" strokeWidth="3" fill="none" className="branch-grow" style={{ animationDelay: '1s' }}/>
            <path d="M 700 88 Q 700 125 720 155" stroke="#7A5E3A" strokeWidth="3" fill="none" className="branch-grow" style={{ animationDelay: '1.1s' }}/>
            
            {/* Leaves scattered on branches */}
            <ellipse cx="280" cy="160" rx="10" ry="6" fill="#8FB896" className="leaf-sway" transform="rotate(-25 280 160)" opacity="0.8"/>
            <ellipse cx="720" cy="155" rx="10" ry="6" fill="#6B9B76" className="leaf-sway" transform="rotate(25 720 155)" opacity="0.8" style={{ animationDelay: '0.7s' }}/>
            <ellipse cx="500" cy="75" rx="12" ry="7" fill="#8FB896" className="leaf-sway" transform="rotate(-10 500 75)" opacity="0.8" style={{ animationDelay: '1.2s' }}/>
            <ellipse cx="900" cy="85" rx="11" ry="6" fill="#6B9B76" className="leaf-sway" transform="rotate(15 900 85)" opacity="0.8" style={{ animationDelay: '1.5s' }}/>
          </svg>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 pt-16 relative z-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  animation: `fruitGrow 1s ease-out forwards`,
                  animationDelay: `${1 + index * 0.2}s`,
                  opacity: 0
                }}
              >
                {/* Stem connecting to branch */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-[#6B9B76] to-transparent"></div>
                
                {/* Leaf near fruit */}
                <svg className="absolute -top-14 left-1/2 -translate-x-1/2 translate-x-6 w-8 h-8 opacity-70" viewBox="0 0 30 30">
                  <ellipse cx="15" cy="15" rx="12" ry="7" fill="#8FB896" className="leaf-sway" transform="rotate(-30 15 15)"/>
                </svg>
                
                {/* Feature card as fruit */}
                <div className={`h-full bg-white rounded-[2rem] p-8 shadow-xl border-4 border-white relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group-hover:scale-105`}>
                  {/* Fruit color glow */}
                  <div 
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${feature.fruitColor}, transparent 70%)`
                    }}
                  ></div>
                  
                  {/* Shine effect */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white opacity-20 blur-xl"></div>
                  
                  <div className="relative z-10">
                    {/* Icon as fruit core */}
                    <div className="relative mb-6 inline-block">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative`}>
                        {/* Fruit shine */}
                        <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white opacity-40 blur-sm"></div>
                        <feature.icon className="w-10 h-10 text-white relative z-10" />
                      </div>
                      
                      {/* Fruit shadow */}
                      <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full blur-md opacity-30`}
                           style={{ background: feature.fruitColor }}></div>
                    </div>
                    
                    <h3 className="text-2xl text-[#1B1B1B] mb-4 tracking-wide group-hover:text-[#5C4033] transition-colors">
                      {feature.title}
                    </h3>
                    
                    {/* Branch divider */}
                    <svg className="w-24 h-8 mb-4" viewBox="0 0 100 20">
                      <path d="M 0 10 Q 25 5 50 10 Q 75 15 100 10" stroke="#8FB896" strokeWidth="2" fill="none" opacity="0.5"/>
                      <circle cx="50" cy="10" r="2" fill={feature.fruitColor} className="blossom-bloom"/>
                    </svg>
                    
                    <p className="text-[#6B6256] leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Seeds/details indicator */}
                    <div className="mt-6 flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{ 
                            background: feature.fruitColor,
                            opacity: 0.6
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative vine */}
        <div className="mt-32 relative">
          <svg className="mx-auto" width="600" height="100" viewBox="0 0 600 100">
            <path
              d="M 0 50 Q 100 30 200 50 Q 300 70 400 50 Q 500 30 600 50"
              stroke="#6B9B76"
              strokeWidth="3"
              fill="none"
              className="branch-draw"
            />
            {/* Small flowers along vine */}
            {[100, 200, 300, 400, 500].map((x, i) => (
              <g key={i} className="blossom-bloom" style={{ animationDelay: `${2 + i * 0.2}s` }}>
                <circle cx={x} cy={i % 2 === 0 ? 35 : 65} r="6" fill="#F4C2C2"/>
                <circle cx={x - 4} cy={i % 2 === 0 ? 31 : 61} r="4" fill="#F4C2C2" opacity="0.7"/>
                <circle cx={x + 4} cy={i % 2 === 0 ? 31 : 61} r="4" fill="#F4C2C2" opacity="0.7"/>
                <circle cx={x - 4} cy={i % 2 === 0 ? 39 : 69} r="4" fill="#F4C2C2" opacity="0.7"/>
                <circle cx={x + 4} cy={i % 2 === 0 ? 39 : 69} r="4" fill="#F4C2C2" opacity="0.7"/>
                <circle cx={x} cy={i % 2 === 0 ? 35 : 65} r="3" fill="#C8A951"/>
              </g>
            ))}
          </svg>
        </div>
      </div>
      
      <style>{`
        @keyframes butterfly {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -20px) rotate(10deg);
          }
          50% {
            transform: translate(60px, 0) rotate(-10deg);
          }
          75% {
            transform: translate(30px, 20px) rotate(5deg);
          }
        }
        
        @keyframes fruitGrow {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.5);
          }
          60% {
            transform: translateY(0) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes branch-grow {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }
        
        .branch-grow {
          animation: branch-grow 2s ease-out forwards;
        }
        
        .branch-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: branch-grow 2s ease-out forwards;
        }
        
        @keyframes blossom-bloom {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .blossom-bloom {
          animation: blossom-bloom 1s ease-out forwards;
          transform-origin: center;
        }
        
        @keyframes leaf-sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        .leaf-sway {
          animation: leaf-sway 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
