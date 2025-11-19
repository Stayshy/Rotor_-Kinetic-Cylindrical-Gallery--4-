import * as React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Download, Share2, BookMarked } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookPage {
  id: number;
  type: "cover" | "photo" | "story" | "tree";
  title?: string;
  content?: string;
  image?: string;
}

const mockPages: BookPage[] = [
  {
    id: 0,
    type: "cover",
    title: "Семья Петровых",
    content: "Книга воспоминаний"
  },
  {
    id: 1,
    type: "story",
    title: "Глава 1: Начало истории",
    content: "Наша семейная история началась в небольшом городке на юге России, где родился Иван Петров в 1920 году. Он был старшим из пяти детей в семье учителя и швеи. С детства Иван отличался любознательностью и тягой к знаниям. Его мечтой было стать инженером и строить мосты, соединяющие города и судьбы людей...",
    image: "https://images.unsplash.com/photo-1573408268160-571b710c06c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90byUyMGFsYnVtJTIwdmludGFnZXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    type: "photo",
    title: "Семейный архив",
    image: "https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjBzZXBpYXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Фотография 1945 года. День Победы в Москве."
  },
  {
    id: 3,
    type: "story",
    title: "Глава 2: Военные годы",
    content: "Великая Отечественная война изменила судьбы миллионов семей, не обошла она стороной и нашу. Иван ушёл на фронт в первые месяцы войны, оставив дома молодую жену Марию и маленькую дочь. Письма с фронта были редки, но каждое из них хранилось как величайшее сокровище..."
  }
];

export function BookPreview() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  const handleNextPage = () => {
    if (currentPage < mockPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };
  
  const page = mockPages[currentPage];
  
  return (
    <div className="flex flex-col h-full">
      {/* Book controls */}
      <div className="flex justify-between items-center mb-8 px-4">
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="rounded-xl border-2 border-[#C8A951]/40 hover:bg-[#C8A951]/10 shadow-md hover:shadow-lg transition-all" 
            size="sm"
          >
            <Download className="mr-2 h-4 w-4 text-[#8C6C44]" />
            <span className="text-[#4B2C20]">Скачать PDF</span>
          </Button>
          <Button 
            variant="outline" 
            className="rounded-xl border-2 border-[#8C6C44]/40 hover:bg-[#8C6C44]/10 shadow-md hover:shadow-lg transition-all" 
            size="sm"
          >
            <Share2 className="mr-2 h-4 w-4 text-[#8C6C44]" />
            <span className="text-[#4B2C20]">Поделиться</span>
          </Button>
        </div>
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border-2 border-[#C8A951]/20">
          <BookMarked className="h-4 w-4 text-[#C8A951]" />
          <span className="text-sm text-[#4B2C20] tracking-wide">Страница {currentPage + 1} из {mockPages.length}</span>
        </div>
      </div>
      
      {/* Book pages */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-5xl aspect-[1.5/1]">
            {/* Book shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 blur-3xl transform translate-y-12 scale-95"></div>
            
            {/* Pages container with luxurious styling */}
            <div className="relative h-full rounded-3xl shadow-2xl overflow-hidden">
              {/* Golden book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-[#8C6C44] via-[#C8A951] to-[#8C6C44] shadow-inner z-20"></div>
              
              {/* Page content */}
              <div 
                className={`h-full old-paper transition-all duration-500 ${isFlipping ? 'opacity-70 scale-[0.98]' : 'opacity-100 scale-100'}`}
              >
                {page.type === "cover" && (
                  <div className="h-full flex flex-col items-center justify-center p-16 relative overflow-hidden">
                    {/* Ornamental background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="150" fill="none" stroke="#C8A951" strokeWidth="1"/>
                        <circle cx="200" cy="200" r="120" fill="none" stroke="#8C6C44" strokeWidth="1"/>
                        <circle cx="200" cy="200" r="90" fill="none" stroke="#C8A951" strokeWidth="1"/>
                      </svg>
                    </div>
                    
                    <div className="text-center space-y-12 relative z-10">
                      {/* Decorative top border */}
                      <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
                        <div className="w-3 h-3 rounded-full bg-[#C8A951] border-4 border-[#EADCC2]"></div>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
                      </div>
                      
                      {/* Book emblem */}
                      <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[#C8A951]/20 to-[#8C6C44]/20 flex items-center justify-center shadow-xl border-4 border-[#C8A951]/30 mb-12">
                        <BookMarked className="w-20 h-20 text-[#C8A951]" />
                      </div>
                      
                      <h1 className="text-6xl gold-text embossed tracking-wide">{page.title}</h1>
                      <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-[#7B2D26] to-transparent"></div>
                      <p className="text-3xl text-[#7B2D26] italic tracking-wider">{page.content}</p>
                      
                      {/* Decorative bottom element */}
                      <div className="pt-12">
                        <div className="inline-block px-8 py-4 border-3 border-[#C8A951]/40 rounded-2xl bg-white/50 shadow-lg">
                          <p className="text-[#6B6256] tracking-widest text-sm">НОЯБРЬ 2025</p>
                        </div>
                      </div>
                      
                      {/* Bottom ornament */}
                      <div className="flex items-center justify-center gap-4 mt-12">
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
                        <div className="w-3 h-3 rounded-full bg-[#C8A951] border-4 border-[#EADCC2]"></div>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {page.type === "story" && (
                  <div className="h-full grid grid-cols-2 gap-12 p-16">
                    <div className="space-y-8 flex flex-col justify-center">
                      {/* Chapter ornament */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-[#C8A951]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#C8A951]"></div>
                      </div>
                      
                      <h2 className="text-[#7B2D26] tracking-wide leading-tight">{page.title}</h2>
                      
                      <div className="h-px bg-gradient-to-r from-[#C8A951] via-[#C8A951]/30 to-transparent"></div>
                      
                      <p className="text-[#1B1B1B] leading-loose text-justify indent-8">
                        {page.content}
                      </p>
                      
                      {/* Page number ornament */}
                      <div className="flex items-center gap-3 pt-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C8A951]/30"></div>
                        <span className="text-sm text-[#8C6C44] tracking-widest">{currentPage + 1}</span>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C8A951]/30"></div>
                      </div>
                    </div>
                    
                    {page.image && (
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* Shadow frame */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C8A951]/20 to-[#8C6C44]/20 rounded-3xl transform rotate-2 blur-sm"></div>
                          {/* Photo frame */}
                          <div className="relative photo-frame rounded-3xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                              src={page.image}
                              alt="Story photo"
                              className="w-full h-96 object-cover sepia-[0.2]"
                            />
                            {/* Vintage overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#4B2C20]/20 via-transparent to-[#C8A951]/10"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {page.type === "photo" && (
                  <div className="h-full flex flex-col items-center justify-center p-16">
                    <div className="flex items-center gap-3 mb-12">
                      <div className="w-16 h-px bg-[#C8A951]"></div>
                      <h2 className="text-[#7B2D26] tracking-wider">{page.title}</h2>
                      <div className="w-16 h-px bg-[#C8A951]"></div>
                    </div>
                    
                    <div className="relative max-w-3xl">
                      {/* Decorative frame shadows */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C8A951]/30 to-[#7B2D26]/20 rounded-3xl transform -rotate-3 blur-md"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-[#8C6C44]/20 to-[#C8A951]/30 rounded-3xl transform rotate-2 blur-sm"></div>
                      
                      {/* Main photo */}
                      <div className="relative photo-frame rounded-3xl overflow-hidden shadow-2xl">
                        {page.image && (
                          <>
                            <ImageWithFallback
                              src={page.image}
                              alt={page.title}
                              className="w-full h-[500px] object-cover sepia-[0.3]"
                            />
                            {/* Luxurious vintage overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A951]/10 via-transparent to-[#7B2D26]/10"></div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {page.content && (
                      <div className="mt-12 text-center max-w-2xl">
                        <div className="bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border-2 border-[#C8A951]/20">
                          <p className="text-[#4B2C20] italic leading-relaxed">{page.content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Page edge effect */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#8C6C44]">
                  <path d="M100,100 L100,80 Q90,85 80,90 L70,95 Q85,90 100,100 Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-8 px-4">
        <Button
          variant="outline"
          size="lg"
          className="rounded-2xl px-8 border-2 border-[#C8A951]/40 hover:bg-[#C8A951]/10 hover:border-[#C8A951] shadow-lg hover:shadow-xl transition-all disabled:opacity-40"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeft className="mr-2 h-5 w-5 text-[#8C6C44]" />
          <span className="text-[#4B2C20]">Назад</span>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-2xl px-8 border-2 border-[#C8A951]/40 hover:bg-[#C8A951]/10 hover:border-[#C8A951] shadow-lg hover:shadow-xl transition-all disabled:opacity-40"
          onClick={handleNextPage}
          disabled={currentPage === mockPages.length - 1}
        >
          <span className="text-[#4B2C20]">Вперёд</span>
          <ChevronRight className="ml-2 h-5 w-5 text-[#8C6C44]" />
        </Button>
      </div>
    </div>
  );
}
