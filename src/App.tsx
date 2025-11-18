import React, { useState } from 'react';
import { KineticScene } from './components/webgl/KineticScene';
import { ImageUploadOverlay } from './components/ui/ImageUploadOverlay';
import { ControlPanel } from './components/ui/ControlPanel';
import { useTextureManager } from './hooks/useTextureManager';
import { Button } from './components/ui/button';
import { ArrowRight, Heart, Camera, Menu } from 'lucide-react';

export default function App() {
  const {
    displayState,
    marqueeState,
    animationSpeeds,
    updateDisplayImage,
    updateMarqueeImage,
    resetToDefaults,
    updateAnimationSpeed
  } = useTextureManager();
  
  const [cameraInfo, setCameraInfo] = useState(null);
  
  // Массив изображений для киноленты
  const filmStripImages = [
    'https://images.unsplash.com/photo-1758874960370-af4aeb43fc69?w=400',
    'https://images.unsplash.com/photo-1609796574417-09f9675bfd03?w=400',
    'https://images.unsplash.com/photo-1761933807117-1c16a5b4fd2e?w=400',
    'https://images.unsplash.com/photo-1559054109-82d938dac629?w=400',
    'https://images.unsplash.com/flagged/photo-1545622783-901effb998a8?w=400',
    'https://images.unsplash.com/photo-1758874960466-fb0a3e0007bc?w=400',
    'https://images.unsplash.com/photo-1624448445915-97154f5e688c?w=400',
    'https://images.unsplash.com/photo-1758962036840-1573525f5e61?w=400',
  ];
  
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg text-foreground">Альбом Воспоминаний</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Галерея</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Войти</Button>
            <Button size="sm" className="hidden md:inline-flex">Начать</Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D Cylinder */}
      <section className="relative h-screen flex items-center justify-center pt-16">
        {/* Background 3D Scene */}
        <div className="absolute inset-0">
          <KineticScene
            displayTexture={displayState.texture}
            displayDimensions={displayState.dimensions}
            isDisplayLoading={displayState.isLoading}
            marqueeTexture={marqueeState.texture}
            isMarqueeLoading={marqueeState.isLoading}
            animationSpeed={animationSpeeds}
            onCameraUpdate={setCameraInfo}
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary">✨ Цифровые воспоминания</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Сохраните<br />
              <span className="text-primary">Моменты</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Создайте интерактивную 3D галерею семейных воспоминаний. 
              Традиции, любовь и история вашей семьи в современном формате.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                <Camera className="w-5 h-5" />
                Начать создание
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="gap-2 bg-card/50 backdrop-blur-sm">
                <Heart className="w-5 h-5" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>

        {/* Control Panels */}
        <ImageUploadOverlay
          displayImage={displayState.image}
          marqueeImage={marqueeState.image}
          onDisplayImageChange={updateDisplayImage}
          onMarqueeImageChange={updateMarqueeImage}
          onResetToDefaults={resetToDefaults}
          isLoading={displayState.isLoading || marqueeState.isLoading}
          className="absolute top-24 right-4 z-40 w-60"
        />
        
        <ControlPanel
          onResetToDefaults={resetToDefaults}
          animationSpeeds={animationSpeeds}
          onAnimationSpeedChange={updateAnimationSpeed}
          isLoading={displayState.isLoading || marqueeState.isLoading}
        />
      </section>

      {/* Film Strip Section */}
      <section className="relative py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ваши истории в <span className="text-primary">движении</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От цилиндрической галереи к классической киноленте — 
              просматривайте воспоминания так, как вам удобно
            </p>
          </div>

          {/* Film Strip Container */}
          <div className="relative overflow-hidden py-8">
            {/* Film Strip Perforation Top */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center gap-2 px-4 bg-foreground/5">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-sm bg-foreground/10 flex-shrink-0" />
              ))}
            </div>

            {/* Scrolling Images */}
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {[...filmStripImages, ...filmStripImages].map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden shadow-xl border-4 border-card transform hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={img}
                      alt={`Memory ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Film Strip Perforation Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-8 flex items-center gap-2 px-4 bg-foreground/5">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-sm bg-foreground/10 flex-shrink-0" />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3D галерея</h3>
              <p className="text-sm text-muted-foreground">
                Интерактивный цилиндрический просмотр ваших фотографий
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Семейные традиции</h3>
              <p className="text-sm text-muted-foreground">
                Сохраните историю и традиции для будущих поколений
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Легко делиться</h3>
              <p className="text-sm text-muted-foreground">
                Поделитесь воспоминаниями с близкими в один клик
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Альбом Воспоминаний. Сохраняем моменты, которые важны.
          </p>
        </div>
      </footer>
    </div>
  );
}
