
import * as React from "react";

import { Plus, BookOpen, ArrowRight, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-[#E8DCC4] via-[#F4F2F0] to-[#FAF8F5]">
      {/* Sky background with subtle clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-32 rounded-full bg-white/40 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-40 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute top-60 left-1/3 w-80 h-36 rounded-full bg-white/35 blur-3xl"></div>
      </div>
      
      {/* Falling petals animation */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            background: i % 3 === 0 ? '#D6A1A1' : i % 3 === 1 ? '#C8A951' : '#F4C2C2',
            animation: `fall ${8 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        ></div>
      ))}
      
      {/* Main tree trunk - centered */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[60%] z-10">
        <svg viewBox="0 0 100 400" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#5C4033', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4B2C20', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="woodTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
              <feColorMatrix type="saturate" values="0.3"/>
            </filter>
          </defs>
          {/* Main trunk */}
          <path
            d="M 30 400 Q 35 300 40 200 Q 42 100 45 50 Q 46 20 50 0
               L 50 0 Q 54 20 55 50 Q 58 100 60 200 Q 65 300 70 400 Z"
            fill="url(#trunkGradient)"
            filter="url(#woodTexture)"
            opacity="0.9"
          />
          {/* Bark texture lines */}
          <path d="M 35 350 Q 50 345 65 350" stroke="#3D2817" strokeWidth="0.5" fill="none" opacity="0.6"/>
          <path d="M 37 280 Q 50 275 63 280" stroke="#3D2817" strokeWidth="0.5" fill="none" opacity="0.6"/>
          <path d="M 38 200 Q 50 195 62 200" stroke="#3D2817" strokeWidth="0.5" fill="none" opacity="0.6"/>
          <path d="M 40 120 Q 50 115 60 120" stroke="#3D2817" strokeWidth="0.5" fill="none" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Tree crown with branches and blossoms */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Branch gradient */}
            <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#5C4033', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#7A5E3A', stopOpacity: 0.8 }} />
            </linearGradient>
            
            {/* Blossom gradient */}
            <radialGradient id="blossomGradient">
              <stop offset="0%" style={{ stopColor: '#FFE5E5', stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: '#F4C2C2', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#D6A1A1', stopOpacity: 0.7 }} />
            </radialGradient>
            
            {/* Gold blossom for special items */}
            <radialGradient id="goldBlossomGradient">
              <stop offset="0%" style={{ stopColor: '#FFF9E5', stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: '#E8D4A0', stopOpacity: 0.9 }} />
              <stop offset="100%" style={{ stopColor: '#C8A951', stopOpacity: 0.8 }} />
            </radialGradient>
            
            {/* Leaf gradient */}
            <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8FB896', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#6B9B76', stopOpacity: 0.7 }} />
            </linearGradient>
          </defs>
          
          {/* Left main branch */}
          <path
            d="M 600 500 Q 450 450 350 420 Q 250 400 150 400"
            stroke="url(#branchGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            className="branch-grow"
          />
          <path
            d="M 350 420 Q 320 380 300 350"
            stroke="url(#branchGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="branch-grow"
            style={{ animationDelay: '0.3s' }}
          />
          <path
            d="M 250 400 Q 230 360 220 320"
            stroke="url(#branchGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="branch-grow"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Right main branch */}
          <path
            d="M 600 500 Q 750 450 850 420 Q 950 400 1050 400"
            stroke="url(#branchGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            className="branch-grow"
            style={{ animationDelay: '0.2s' }}
          />
          <path
            d="M 850 420 Q 880 380 900 350"
            stroke="url(#branchGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="branch-grow"
            style={{ animationDelay: '0.4s' }}
          />
          <path
            d="M 950 400 Q 970 360 980 320"
            stroke="url(#branchGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="branch-grow"
            style={{ animationDelay: '0.6s' }}
          />
          
          {/* Center top branch */}
          <path
            d="M 600 500 Q 600 400 600 300 Q 600 250 580 200"
            stroke="url(#branchGradient)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className="branch-grow"
            style={{ animationDelay: '0.1s' }}
          />
          
          {/* Leaves scattered */}
          <ellipse cx="300" cy="350" rx="15" ry="8" fill="url(#leafGradient)" className="leaf-sway" transform="rotate(-30 300 350)"/>
          <ellipse cx="900" cy="350" rx="15" ry="8" fill="url(#leafGradient)" className="leaf-sway" transform="rotate(30 900 350)" style={{ animationDelay: '0.5s' }}/>
          <ellipse cx="220" cy="320" rx="12" ry="7" fill="url(#leafGradient)" className="leaf-sway" transform="rotate(-45 220 320)" style={{ animationDelay: '1s' }}/>
          <ellipse cx="980" cy="320" rx="12" ry="7" fill="url(#leafGradient)" className="leaf-sway" transform="rotate(45 980 320)" style={{ animationDelay: '1.5s' }}/>
          <ellipse cx="580" cy="200" rx="14" ry="9" fill="url(#leafGradient)" className="leaf-sway" transform="rotate(-15 580 200)" style={{ animationDelay: '0.7s' }}/>
          
          {/* Blossoms - pink flowers */}
          <g className="blossom-bloom">
            {/* Left side blossoms */}
            <circle cx="150" cy="400" r="12" fill="url(#blossomGradient)"/>
            <circle cx="145" cy="395" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="155" cy="395" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="145" cy="405" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="155" cy="405" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="150" cy="400" r="5" fill="#C8A951" opacity="0.9"/>
          </g>
          
          <g className="blossom-bloom" style={{ animationDelay: '0.3s' }}>
            {/* Right side blossoms */}
            <circle cx="1050" cy="400" r="12" fill="url(#blossomGradient)"/>
            <circle cx="1045" cy="395" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="1055" cy="395" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="1045" cy="405" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="1055" cy="405" r="8" fill="url(#blossomGradient)" opacity="0.8"/>
            <circle cx="1050" cy="400" r="5" fill="#C8A951" opacity="0.9"/>
          </g>
          
          <g className="blossom-bloom" style={{ animationDelay: '0.6s' }}>
            {/* Top center blossom - golden */}
            <circle cx="580" cy="200" r="15" fill="url(#goldBlossomGradient)"/>
            <circle cx="574" cy="194" r="10" fill="url(#goldBlossomGradient)" opacity="0.8"/>
            <circle cx="586" cy="194" r="10" fill="url(#goldBlossomGradient)" opacity="0.8"/>
            <circle cx="574" cy="206" r="10" fill="url(#goldBlossomGradient)" opacity="0.8"/>
            <circle cx="586" cy="206" r="10" fill="url(#goldBlossomGradient)" opacity="0.8"/>
            <circle cx="580" cy="200" r="6" fill="#7B2D26" opacity="0.6"/>
          </g>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-30">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Floating flower badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border-2 border-[#D6A1A1]/40 shadow-xl">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 bg-[#F4C2C2] rounded-full animate-ping"></div>
                <div className="relative w-full h-full bg-[#D6A1A1] rounded-full"></div>
              </div>
              <span className="text-sm tracking-wider text-[#8C6C44]">🌸 Вырастите своё семейное древо</span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl leading-[0.9] tracking-tight relative">
              <span className="block gold-text embossed relative inline-block">
                Альбом
                <svg className="absolute -right-12 -top-6 w-16 h-16 opacity-60" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="8" fill="#F4C2C2"/>
                  <circle cx="20" cy="20" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="30" cy="20" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="20" cy="30" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="30" cy="30" r="5" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="25" cy="25" r="3" fill="#C8A951"/>
                </svg>
              </span>
              <br />
              <span className="block text-[#7B2D26] mt-4">воспоминаний</span>
            </h1>
            
            {/* Branch divider */}
            <div className="relative h-16 -my-4">
              <svg viewBox="0 0 200 40" className="w-48 h-full">
                <path
                  d="M 0 20 Q 50 10 100 20 Q 150 30 200 20"
                  stroke="#8C6C44"
                  strokeWidth="2"
                  fill="none"
                  className="branch-draw"
                />
                <circle cx="100" cy="20" r="4" fill="#D6A1A1" className="blossom-bloom"/>
                <circle cx="50" cy="15" r="3" fill="#F4C2C2" className="blossom-bloom" style={{ animationDelay: '0.3s' }}/>
                <circle cx="150" cy="25" r="3" fill="#F4C2C2" className="blossom-bloom" style={{ animationDelay: '0.6s' }}/>
              </svg>
            </div>
            
            <div className="relative pl-8 py-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8FB896] via-[#C8A951] to-[#D6A1A1] rounded-full"></div>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="6" fill="#F4C2C2"/>
                  <circle cx="7" cy="7" r="4" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="13" cy="7" r="4" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="7" cy="13" r="4" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="13" cy="13" r="4" fill="#F4C2C2" opacity="0.7"/>
                  <circle cx="10" cy="10" r="3" fill="#C8A951"/>
                </svg>
              </div>
              <p className="text-2xl text-[#4B2C20] italic leading-relaxed">
                Сохрани тепло памяти семьи — пусть твоё древо цветёт вечно
              </p>
            </div>
            
            <p className="text-xl text-[#6B6256] leading-relaxed max-w-xl">
              Создайте живое генеалогическое древо, где каждая ветвь — это история, 
              каждый цветок — драгоценное воспоминание, а каждый плод — связь поколений.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="group relative overflow-hidden rounded-3xl px-10 py-5 shadow-2xl text-white inline-flex items-center text-lg bg-gradient-to-r from-[#8FB896] via-[#C8A951] to-[#D6A1A1] hover:shadow-[0_20px_60px_rgba(200,169,81,0.4)] transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-[#A5D4AC] via-[#E8D4A0] to-[#F4C2C2] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Plus className="mr-3 h-6 w-6 relative z-10" />
                <span className="relative z-10">Посадить своё древо</span>
                <ArrowRight className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="group rounded-3xl px-10 py-5 bg-white/60 backdrop-blur-sm border-2 border-[#8FB896]/40 hover:bg-white hover:border-[#8FB896] shadow-lg transition-all text-lg text-[#4B2C20] inline-flex items-center">
                <BookOpen className="mr-3 h-5 w-5 text-[#8FB896] group-hover:rotate-12 transition-transform" />
                Посмотреть сад примеров
              </button>
            </div>
            
            {/* Stats as fruits on branches */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F4C2C2] to-[#D6A1A1] rounded-full group-hover:scale-110 transition-transform shadow-lg flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white fill-white" />
                  </div>
                  <svg className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8" viewBox="0 0 40 20">
                    <path d="M 20 20 Q 20 10 15 5" stroke="#6B9B76" strokeWidth="2" fill="none"/>
                    <ellipse cx="13" cy="3" rx="6" ry="3" fill="#8FB896" opacity="0.7"/>
                  </svg>
                </div>
                <div className="text-3xl gold-text mb-1">2000+</div>
                <div className="text-xs text-[#6B6256] tracking-wide">Цветущих семей</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8D4A0] to-[#C8A951] rounded-full group-hover:scale-110 transition-transform shadow-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <svg className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8" viewBox="0 0 40 20">
                    <path d="M 20 20 Q 20 10 25 5" stroke="#6B9B76" strokeWidth="2" fill="none"/>
                    <ellipse cx="27" cy="3" rx="6" ry="3" fill="#8FB896" opacity="0.7"/>
                  </svg>
                </div>
                <div className="text-3xl text-[#C8A951] mb-1">50k+</div>
                <div className="text-xs text-[#6B6256] tracking-wide">Сохранённых плодов</div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A5D4AC] to-[#8FB896] rounded-full group-hover:scale-110 transition-transform shadow-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 11.75A2.25 2.25 0 1 1 11.25 14 2.25 2.25 0 0 1 9 11.75zM12.75 6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12.75 6z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                  </div>
                  <svg className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8" viewBox="0 0 40 20">
                    <path d="M 20 20 Q 20 10 20 5" stroke="#6B9B76" strokeWidth="2" fill="none"/>
                    <ellipse cx="20" cy="3" rx="6" ry="3" fill="#8FB896" opacity="0.7"/>
                  </svg>
                </div>
                <div className="text-3xl text-[#8FB896] mb-1">98%</div>
                <div className="text-xs text-[#6B6256] tracking-wide">Расцветают с нами</div>
              </div>
            </div>
          </div>
          
          {/* Right: Photo blossoms on branches */}
          <div className="relative h-[700px] hidden lg:block">
            {/* Branch structure for photos */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 500 700">
              <path d="M 250 350 Q 180 280 150 200" stroke="#7A5E3A" strokeWidth="6" fill="none" className="branch-grow"/>
              <path d="M 250 350 Q 320 280 350 200" stroke="#7A5E3A" strokeWidth="6" fill="none" className="branch-grow" style={{ animationDelay: '0.2s' }}/>
              <path d="M 250 350 Q 200 450 120 550" stroke="#7A5E3A" strokeWidth="6" fill="none" className="branch-grow" style={{ animationDelay: '0.4s' }}/>
              <path d="M 250 350 Q 300 450 380 550" stroke="#7A5E3A" strokeWidth="6" fill="none" className="branch-grow" style={{ animationDelay: '0.6s' }}/>
              <path d="M 250 350 Q 250 250 220 150" stroke="#7A5E3A" strokeWidth="5" fill="none" className="branch-grow" style={{ animationDelay: '0.3s' }}/>
            </svg>
            
            {/* Photos as blossoms */}
            <div className="absolute top-16 left-8 w-48 h-56 rounded-3xl overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer z-20 blossom-bloom border-8 border-white">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#F4C2C2] to-[#D6A1A1] rounded-full flex items-center justify-center shadow-lg z-10">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjBzZXBpYXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vintage photo"
                className="w-full h-full object-cover sepia-[0.3]"
              />
            </div>
            
            <div className="absolute top-16 right-8 w-52 h-40 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer z-20 blossom-bloom border-8 border-white" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#E8D4A0] to-[#C8A951] rounded-full flex items-center justify-center shadow-lg z-10">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMHBvcnRyYWl0JTIwd2FybXxlbnwxfHx8fDE3NjI0NjAzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Portrait"
                className="w-full h-full object-cover sepia-[0.15]"
              />
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-64 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer z-30 blossom-bloom border-8 border-white" style={{ animationDelay: '0.6s' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#A5D4AC] to-[#8FB896] rounded-full flex items-center justify-center shadow-lg z-10">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
                </svg>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573408268160-571b710c06c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90byUyMGFsYnVtJTIwdmludGFnZXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Family photo"
                className="w-full h-full object-cover sepia-[0.2]"
              />
            </div>
            
            <div className="absolute bottom-20 left-4 w-44 h-44 rounded-3xl overflow-hidden shadow-2xl transform -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer z-20 blossom-bloom border-8 border-white" style={{ animationDelay: '0.9s' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjBzZXBpYXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Memory"
                className="w-full h-full object-cover sepia-[0.25]"
              />
            </div>
            
            <div className="absolute bottom-16 right-12 w-40 h-52 rounded-3xl overflow-hidden shadow-2xl transform rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer z-20 blossom-bloom border-8 border-white" style={{ animationDelay: '1.2s' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMHBvcnRyYWl0JTIwd2FybXxlbnwxfHx8fDE3NjI0NjAzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Family"
                className="w-full h-full object-cover sepia-[0.35]"
              />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
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
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: branch-grow 1.5s ease-out forwards;
        }
        
        @keyframes blossom-bloom {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
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
