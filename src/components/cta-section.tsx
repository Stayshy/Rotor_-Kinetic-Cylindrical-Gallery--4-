import { ArrowRight, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFE5CC] via-[#FFD4A3] to-[#FFC47A]"></div>
      
      {/* Sunset rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 243, 176, 0.6), transparent)',
              transform: `rotate(${i * 30 - 180}deg) translateY(-50%)`,
              transformOrigin: '50% 0'
            }}
          ></div>
        ))}
      </div>
      
      {/* Fireflies/magic particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-200 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `firefly ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            boxShadow: '0 0 10px rgba(255, 243, 176, 0.8)'
          }}
        ></div>
      ))}
      
      {/* Giant magical tree silhouette in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-10">
        <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
          {/* Trunk */}
          <path
            d="M 180 600 Q 185 500 190 400 Q 192 300 195 200 Q 197 100 200 50
               L 200 50 Q 203 100 205 200 Q 208 300 210 400 Q 215 500 220 600 Z"
            fill="#5C4033"
            opacity="0.6"
          />
          {/* Massive canopy */}
          <ellipse cx="200" cy="200" rx="180" ry="150" fill="#6B9B76" opacity="0.4"/>
          <ellipse cx="150" cy="180" rx="100" ry="80" fill="#8FB896" opacity="0.3"/>
          <ellipse cx="250" cy="180" rx="100" ry="80" fill="#8FB896" opacity="0.3"/>
          <ellipse cx="200" cy="150" rx="120" ry="100" fill="#A5D4AC" opacity="0.3"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Floating flower wreath */}
        <div className="relative inline-block mb-12">
          <svg width="200" height="80" viewBox="0 0 200 80" className="mx-auto">
            {/* Vine */}
            <path
              d="M 20 40 Q 60 20 100 40 Q 140 60 180 40"
              stroke="#8FB896"
              strokeWidth="3"
              fill="none"
              className="branch-draw"
            />
            {/* Flowers along vine */}
            {[40, 100, 160].map((x, i) => (
              <g key={i} className="blossom-bloom" style={{ animationDelay: `${i * 0.3}s` }}>
                <circle cx={x} cy={i === 1 ? 40 : i === 0 ? 30 : 30} r="10" fill="#F4C2C2"/>
                <circle cx={x - 6} cy={i === 1 ? 34 : i === 0 ? 24 : 24} r="6" fill="#F4C2C2" opacity="0.8"/>
                <circle cx={x + 6} cy={i === 1 ? 34 : i === 0 ? 24 : 24} r="6" fill="#F4C2C2" opacity="0.8"/>
                <circle cx={x - 6} cy={i === 1 ? 46 : i === 0 ? 36 : 36} r="6" fill="#F4C2C2" opacity="0.8"/>
                <circle cx={x + 6} cy={i === 1 ? 46 : i === 0 ? 36 : 36} r="6" fill="#F4C2C2" opacity="0.8"/>
                <circle cx={x} cy={i === 1 ? 40 : i === 0 ? 30 : 30} r="5" fill="#C8A951"/>
              </g>
            ))}
            {/* Small leaves */}
            <ellipse cx="70" cy="25" rx="8" ry="5" fill="#8FB896" opacity="0.7" className="leaf-sway" transform="rotate(-30 70 25)"/>
            <ellipse cx="130" cy="55" rx="8" ry="5" fill="#6B9B76" opacity="0.7" className="leaf-sway" transform="rotate(30 130 55)" style={{ animationDelay: '0.5s' }}/>
          </svg>
        </div>
        
        {/* Main CTA content */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-[4rem] p-16 lg:p-20 shadow-2xl border-8 border-white overflow-hidden">
          {/* Decorative flowers in corners */}
          <div className="absolute top-8 left-8">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="15" fill="#E8D4A0"/>
              <circle cx="24" cy="24" r="10" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="36" cy="24" r="10" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="24" cy="36" r="10" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="36" cy="36" r="10" fill="#E8D4A0" opacity="0.7"/>
              <circle cx="30" cy="30" r="8" fill="#C8A951"/>
            </svg>
          </div>
          
          <div className="absolute bottom-8 right-8">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="15" fill="#F4C2C2"/>
              <circle cx="24" cy="24" r="10" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="36" cy="24" r="10" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="24" cy="36" r="10" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="36" cy="36" r="10" fill="#F4C2C2" opacity="0.7"/>
              <circle cx="30" cy="30" r="8" fill="#7B2D26"/>
            </svg>
          </div>
          
          {/* Garden background pattern */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${(i % 6) * 20}%`,
                  top: `${Math.floor(i / 6) * 25}%`
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <ellipse cx="20" cy="20" rx="15" ry="10" fill="#8FB896" opacity="0.5" transform="rotate(-30 20 20)"/>
                </svg>
              </div>
            ))}
          </div>
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8FB896] to-[#6B9B76] text-white px-8 py-3 rounded-full shadow-xl mb-12">
              <Heart className="w-5 h-5 fill-white" />
              <span className="tracking-wider">Пусть ваше древо цветёт вечно</span>
              <Heart className="w-5 h-5 fill-white" />
            </div>
            
            {/* Main heading */}
            <h2 className="text-6xl lg:text-8xl mb-8 leading-[0.95]">
              <span className="block gold-text embossed mb-4">
                Посадите семя
              </span>
              <span className="block text-[#7B2D26]">
                памяти сегодня
              </span>
            </h2>
            
            {/* Decorative vine divider */}
            <svg className="mx-auto my-12" width="400" height="60" viewBox="0 0 400 60">
              <path
                d="M 50 30 Q 125 15 200 30 Q 275 45 350 30"
                stroke="#6B9B76"
                strokeWidth="3"
                fill="none"
                className="branch-draw"
              />
              {/* Tiny flowers */}
              {[125, 200, 275].map((x, i) => (
                <g key={i} className="blossom-bloom" style={{ animationDelay: `${1 + i * 0.2}s` }}>
                  <circle cx={x} cy={i === 1 ? 30 : i === 0 ? 20 : 40} r="6" fill={i === 1 ? "#C8A951" : "#F4C2C2"}/>
                  <circle cx={x} cy={i === 1 ? 30 : i === 0 ? 20 : 40} r="3" fill="white"/>
                </g>
              ))}
            </svg>
            
            {/* Description */}
            <p className="text-3xl text-[#4B2C20] mb-6 italic max-w-3xl mx-auto leading-relaxed">
              Вырастите древо, которое будет жить веками
            </p>
            
            <p className="text-xl text-[#6B6256] mb-12 max-w-2xl mx-auto leading-relaxed">
              Первые <span className="text-[#8FB896]">30 дней бесплатно</span>. 
              Начните растить вашу семейную историю прямо сейчас.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#8FB896] via-[#C8A951] to-[#F4C2C2] rounded-3xl px-12 py-6 shadow-2xl hover:shadow-[0_20px_60px_rgba(140,180,150,0.4)] transition-all text-white inline-flex items-center text-xl transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#A5D4AC] via-[#E8D4A0] to-[#FFD4D4] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg className="mr-3 w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
                <span className="relative z-10 tracking-wide">Посадить моё древо</span>
                <ArrowRight className="ml-4 h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="group rounded-3xl px-12 py-6 bg-white border-4 border-[#8FB896] hover:bg-[#8FB896]/10 shadow-lg hover:shadow-xl transition-all text-xl text-[#4B2C20] inline-flex items-center transform hover:scale-105">
                <svg className="mr-3 w-6 h-6 text-[#8FB896] group-hover:scale-125 transition-transform" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="8" fill="#F4C2C2"/>
                  <circle cx="9" cy="9" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="15" cy="9" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="9" cy="15" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="15" cy="15" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="12" cy="12" r="4" fill="currentColor"/>
                </svg>
                <span>Прогуляться по саду примеров</span>
              </button>
            </div>
            
            {/* Trust indicators as fruits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t-4 border-[#8FB896]/30">
              <div className="group cursor-pointer">
                <div className="relative inline-block mb-4">
                  {/* Apple fruit */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#C92A2A] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform relative">
                    <div className="absolute top-2 left-4 w-6 h-6 rounded-full bg-white opacity-40 blur-sm"></div>
                    <svg className="w-10 h-10 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 11.75A2.25 2.25 0 1 1 11.25 14 2.25 2.25 0 0 1 9 11.75zM12.75 6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12.75 6z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                  {/* Stem */}
                  <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8" viewBox="0 0 20 20">
                    <path d="M 10 20 Q 10 10 8 5" stroke="#6B9B76" strokeWidth="2" fill="none"/>
                    <ellipse cx="7" cy="4" rx="4" ry="2" fill="#8FB896"/>
                  </svg>
                </div>
                <div className="text-3xl text-[#1B1B1B] mb-1">4.9★</div>
                <div className="text-sm text-[#6B6256] tracking-wide">Сладкие отзывы</div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative inline-block mb-4">
                  {/* Orange fruit */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFB84D] to-[#FF8C00] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform relative">
                    <div className="absolute top-2 left-4 w-6 h-6 rounded-full bg-white opacity-40 blur-sm"></div>
                    <svg className="w-10 h-10 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8" viewBox="0 0 20 20">
                    <path d="M 10 20 Q 10 10 10 5" stroke="#6B9B76" strokeWidth="2" fill="none"/>
                    <ellipse cx="10" cy="4" rx="4" ry="2" fill="#8FB896"/>
                  </svg>
                </div>
                <div className="text-3xl text-[#1B1B1B] mb-1">100%</div>
                <div className="text-sm text-[#6B6256] tracking-wide">Защищённый сад</div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative inline-block mb-4">
                  {/* Plum fruit */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9B59B6] to-[#6C3483] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform relative">
                    <div className="absolute top-2 left-4 w-6 h-6 rounded-full bg-white opacity-40 blur-sm"></div>
                    <Heart className="w-10 h-10 text-white fill-white relative z-10" />
                  </div>
                  <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8" viewBox="0 0 20 20">
                    <path d="M 10 20 Q 10 10 12 5" stroke="#6B9B76" strokeWidth="2" fill="none"/>
                    <ellipse cx="13" cy="4" rx="4" ry="2" fill="#8FB896"/>
                  </svg>
                </div>
                <div className="text-3xl text-[#1B1B1B] mb-1">2000+</div>
                <div className="text-sm text-[#6B6256] tracking-wide">Расцветших семей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes firefly {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px);
          }
        }
        
        @keyframes branch-draw {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }
        
        .branch-draw {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: branch-draw 2s ease-out forwards;
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
