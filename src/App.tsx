import { useState } from 'react';
import React from "react";

import { KineticScene } from './components/webgl/KineticScene';
import { ImageUploadOverlay } from './components/ui/ImageUploadOverlay';
import { ControlPanel } from './components/ui/ControlPanel';
import { useTextureManager } from './hooks/useTextureManager';
import { ArrowRight, Heart, Camera, Menu } from 'lucide-react';

import { HeroSection } from "./components/hero-section";
import { PersonCard } from "./components/person-card";
import { FamilyTreeView } from "./components/family-tree-view";
import { BookPreview } from "./components/book-preview";
import { AddPersonDialog } from "./components/add-person-dialog";
import { FeaturesSection } from "./components/features-section";
import { PricingSection } from "./components/pricing-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CTASection } from "./components/cta-section";

import { Button } from "./components/ui/button";
import {
  Home,
  Users,
  GitBranch,
  BookOpen,
  Settings,
  Plus,
  Sparkles,
} from "lucide-react";

// -------------------- Mock-данные для альбома --------------------

const mockPeople = [
  {
    id: "1",
    name: "Иван Петров",
    relation: "Прадедушка",
    years: "1920 - 2005",
    image:
      "https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMHBvcnRyYWl0JTIwd2FybXxlbnwxfHx8fDE3NjI0NjAzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "Участник Великой Отечественной войны, награждён медалью за отвагу. После войны работал учителем истории.",
  },
  {
    id: "2",
    name: "Мария Петрова",
    relation: "Прабабушка",
    years: "1925 - 2010",
    image:
      "https://images.unsplash.com/photo-1573408268160-571b710c06c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90byUyMGFsYnVtJTIwdmludGFnZXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "Врач-педиатр, посвятила жизнь помощи детям. Воспитала четверых детей и помогала растить внуков.",
  },
  {
    id: "3",
    name: "Алексей Иванов",
    relation: "Дедушка",
    years: "1945 - н.в.",
    image:
      "https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjBzZXBpYXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "Инженер-конструктор, работал в авиационной промышленности. Увлекается рыбалкой и шахматами.",
  },
  {
    id: "4",
    name: "Елена Иванова",
    relation: "Бабушка",
    years: "1948 - н.в.",
    image:
      "https://images.unsplash.com/photo-1573408268160-571b710c06c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90byUyMGFsYnVtJTIwdmludGFnZXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "Учительница младших классов. Любит вязать и готовить традиционные семейные блюда.",
  },
  {
    id: "5",
    name: "Анна Петрова",
    relation: "Тётя",
    years: "1950 - н.в.",
    image:
      "https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMHBvcnRyYWl0JTIwd2FybXxlbnwxfHx8fDE3NjI0NjAzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "Художница, создала множество портретов членов семьи. Её картины хранятся в семейном архиве.",
  },
  {
    id: "6",
    name: "Дмитрий Смирнов",
    relation: "Дядя",
    years: "1948 - н.в.",
    image:
      "https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjBzZXBpYXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    story:
      "Военный лётчик, служил в дальней авиации. После службы стал инструктором в лётном училище.",
  },
];

// -------------------- Вариант 1: Elegant Family (альбом) --------------------

function ElegantFamilyView() {
  const [activeTab, setActiveTab] = useState<"home" | "list" | "tree" | "book">(
    "home"
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b-2 border-[#C8A951]/20 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C8A951] to-[#8C6C44] flex items-center justify-center shadow-lg ring-2 ring-[#C8A951]/30">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="gold-text tracking-wide">Альбом воспоминаний</h2>
                <p className="text-xs text-[#8C6C44] tracking-widest uppercase">
                  Семейная летопись
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              <Button
                variant={activeTab === "home" ? "default" : "ghost"}
                className={`rounded-xl transition-all ${
                  activeTab === "home"
                    ? "noble-button text-[#1B1B1B] shadow-md"
                    : "hover:bg-[#C8A951]/10 text-[#4B2C20]"
                }`}
                onClick={() => setActiveTab("home")}
              >
                <Home className="mr-2 h-4 w-4" />
                Главная
              </Button>
              <Button
                variant={activeTab === "list" ? "default" : "ghost"}
                className={`rounded-xl transition-all ${
                  activeTab === "list"
                    ? "noble-button text-[#1B1B1B] shadow-md"
                    : "hover:bg-[#C8A951]/10 text-[#4B2C20]"
                }`}
                onClick={() => setActiveTab("list")}
              >
                <Users className="mr-2 h-4 w-4" />
                Список
              </Button>
              <Button
                variant={activeTab === "tree" ? "default" : "ghost"}
                className={`rounded-xl transition-all ${
                  activeTab === "tree"
                    ? "noble-button text-[#1B1B1B] shadow-md"
                    : "hover:bg-[#C8A951]/10 text-[#4B2C20]"
                }`}
                onClick={() => setActiveTab("tree")}
              >
                <GitBranch className="mr-2 h-4 w-4" />
                Дерево
              </Button>
              <Button
                variant={activeTab === "book" ? "default" : "ghost"}
                className={`rounded-xl transition-all ${
                  activeTab === "book"
                    ? "noble-button text-[#1B1B1B] shadow-md"
                    : "hover:bg-[#C8A951]/10 text-[#4B2C20]"
                }`}
                onClick={() => setActiveTab("book")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Книга
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <AddPersonDialog />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-[#C8A951]/10 transition-all"
              >
                <Settings className="h-5 w-5 text-[#8C6C44]" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {activeTab === "home" && (
          <div>
            <HeroSection />

            {/* Quick Stats */}
            <section className="py-20 px-6 relative">
              <div className="absolute inset-0 warm-gradient opacity-50"></div>
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#C8A951]/20 paper-texture group hover:shadow-2xl transition-all hover:scale-105 duration-300">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C8A951]/20 to-[#C8A951]/10 flex items-center justify-center group-hover:from-[#C8A951]/30 group-hover:to-[#C8A951]/20 transition-all">
                        <Users className="w-8 h-8 text-[#C8A951]" />
                      </div>
                      <div>
                        <div className="text-4xl gold-text">
                          {mockPeople.length}
                        </div>
                        <div className="text-sm text-[#6B6256] tracking-wide">
                          Членов семьи
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#8C6C44]/20 paper-texture group hover:shadow-2xl transition-all hover:scale-105 duration-300">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8C6C44]/20 to-[#8C6C44]/10 flex items-center justify-center group-hover:from-[#8C6C44]/30 group-hover:to-[#8C6C44]/20 transition-all">
                        <GitBranch className="w-8 h-8 text-[#8C6C44]" />
                      </div>
                      <div>
                        <div className="text-4xl text-[#8C6C44]">4</div>
                        <div className="text-sm text-[#6B6256] tracking-wide">
                          Поколения
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#7B2D26]/20 paper-texture group hover:shadow-2xl transition-all hover:scale-105 duration-300">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2D26]/20 to-[#7B2D26]/10 flex items-center justify-center group-hover:from-[#7B2D26]/30 group-hover:to-[#7B2D26]/20 transition-all">
                        <BookOpen className="w-8 h-8 text-[#7B2D26]" />
                      </div>
                      <div>
                        <div className="text-4xl text-[#7B2D26]">12</div>
                        <div className="text-sm text-[#6B6256] tracking-wide">
                          Историй
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent additions */}
            <section className="py-20 px-6 bg-gradient-to-br from-[#FAF8F5] to-[#EADCC2]/40">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="w-6 h-6 text-[#C8A951]" />
                      <h2 className="text-[#7B2D26] tracking-wide">
                        Недавно добавленные
                      </h2>
                    </div>
                    <div className="h-px w-48 bg-gradient-to-r from-[#C8A951] to-transparent"></div>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-xl border-2 border-[#C8A951]/40 hover:bg-[#C8A951]/10 shadow-md hover:shadow-lg transition-all text-[#4B2C20]"
                    onClick={() => setActiveTab("list")}
                  >
                    Смотреть всех
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mockPeople.slice(0, 3).map((person) => (
                    <PersonCard
                      key={person.id}
                      name={person.name}
                      relation={person.relation}
                      years={person.years}
                      image={person.image}
                      story={person.story}
                      onEdit={() => console.log("Edit", person.id)}
                      onViewStory={() => console.log("View story", person.id)}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "list" && (
          <section className="py-16 px-6 min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F4F2F0]">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-8 h-8 text-[#C8A951]" />
                    <h1 className="text-[#7B2D26]">Члены семьи</h1>
                  </div>
                  <div className="h-px w-64 bg-gradient-to-r from-[#C8A951] to-transparent mb-2"></div>
                  <p className="text-[#6B6256] tracking-wide">
                    Все люди в вашем семейном древе
                  </p>
                </div>
                <AddPersonDialog>
                  <Button className="noble-button rounded-2xl shadow-lg text-[#1B1B1B]">
                    <Plus className="mr-2 h-5 w-5" />
                    Добавить человека
                  </Button>
                </AddPersonDialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {mockPeople.map((person) => (
                  <PersonCard
                    key={person.id}
                    name={person.name}
                    relation={person.relation}
                    years={person.years}
                    image={person.image}
                    story={person.story}
                    onEdit={() => console.log("Edit", person.id)}
                    onViewStory={() => console.log("View story", person.id)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === "tree" && (
          <section className="py-16 px-6 min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F4F2F0]">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-3">
                  <GitBranch className="w-8 h-8 text-[#C8A951]" />
                  <h1 className="text-[#7B2D26]">Генеалогическое древо</h1>
                </div>
                <div className="h-px w-80 bg-gradient-to-r from-[#C8A951] to-transparent mb-2"></div>
                <p className="text-[#6B6256] tracking-wide">
                  Визуализация связей в вашей семье
                </p>
              </div>

              <FamilyTreeView />
            </div>
          </section>
        )}

        {activeTab === "book" && (
          <section className="py-16 px-6 min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F4F2F0]">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-8 h-8 text-[#C8A951]" />
                  <h1 className="text-[#7B2D26]">Книга воспоминаний</h1>
                </div>
                <div className="h-px w-96 bg-gradient-to-r from-[#C8A951] to-transparent mb-2"></div>
                <p className="text-[#6B6256] tracking-wide">
                  Цифровая семейная летопись с историями и фотографиями
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#EADCC2]/30 to-[#FAF8F5] rounded-3xl p-12 shadow-xl border-2 border-[#C8A951]/20">
                <BookPreview />
              </div>
            </div>
          </section>
        )}

        {/* Общие секции */}
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#4B2C20] to-[#5C4033] text-[#EADCC2] py-16 px-6 mt-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="700"
              cy="300"
              r="100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M0,200 Q200,180 400,200 T800,200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C8A951] to-[#8C6C44] flex items-center justify-center shadow-lg">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="gold-text text-2xl tracking-wide">
                  Альбом воспоминаний
                </h3>
              </div>
              <div className="h-px w-48 bg-gradient-to-r from-[#C8A951] to-transparent mb-4"></div>
              <p className="text-[#C4C1A4] max-w-md leading-relaxed">
                Сохраните историю вашей семьи для будущих поколений.
                Создайте цифровой архив фотографий, историй и генеалогических
                связей.
              </p>
            </div>

            <div>
              <h4 className="text-[#C8A951] mb-6 tracking-wider">Навигация</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setActiveTab("home")}
                    className="text-[#C4C1A4] hover:text-[#C8A951] transition-colors tracking-wide"
                  >
                    Главная
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("list")}
                    className="text-[#C4C1A4] hover:text-[#C8A951] transition-colors tracking-wide"
                  >
                    Список членов семьи
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("tree")}
                    className="text-[#C4C1A4] hover:text-[#C8A951] transition-colors tracking-wide"
                  >
                    Генеалогическое древо
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("book")}
                    className="text-[#C4C1A4] hover:text-[#C8A951] transition-colors tracking-wide"
                  >
                    Книга воспоминаний
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#C8A951] mb-6 tracking-wider">Помощь</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[#C4C1A4] hover:text-[#C8A951] transition-colors tracking-wide"
                  >
                    Как начать
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#C4C1A4] hover:text-[#C8A951] transition-colors tracking-wide"
                  >
                    Руководство
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#C4C1A4] hover:text-[#C8A951] transition-colors tracking-wide"
                  >
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-[#C8A951]/20 pt-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
              <Sparkles className="w-4 h-4 text-[#C8A951]" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
            </div>
            <p className="text-center text-sm text-[#C4C1A4] mt-4 tracking-widest">
              © 2025 Альбом воспоминаний. Храните историю семьи с любовью.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// -------------------- Вариант 2: 3D-галерея (ротор) --------------------

function RotorGalleryView() {
  const {
    displayState,
    marqueeState,
    animationSpeeds,
    updateDisplayImage,
    updateMarqueeImage,
    resetToDefaults,
    updateAnimationSpeed,
  } = useTextureManager();

  const [cameraInfo, setCameraInfo] = useState<any | null>(null);

  const filmStripImages = [
    "https://images.unsplash.com/photo-1758874960370-af4aeb43fc69?w=400",
    "https://images.unsplash.com/photo-1609796574417-09f9675bfd03?w=400",
    "https://images.unsplash.com/photo-1761933807117-1c16a5b4fd2e?w=400",
    "https://images.unsplash.com/photo-1559054109-82d938dac629?w=400",
    "https://images.unsplash.com/flagged/photo-1545622783-901effb998a8?w=400",
    "https://images.unsplash.com/photo-1758874960466-fb0a3e0007bc?w=400",
    "https://images.unsplash.com/photo-1624448445915-97154f5e688c?w=400",
    "https://images.unsplash.com/photo-1758962036840-1573525f5e61?w=400",
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg text-foreground">
              Альбом Воспоминаний
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Галерея
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm" className="hidden md:inline-flex">
              Начать
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero + 3D Cylinder */}
      <section className="relative h-screen flex items-center justify-center pt-16">
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

        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary">✨ Цифровые воспоминания</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Сохраните
              <br />
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

              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-card/50 backdrop-blur-sm"
              >
                <Heart className="w-5 h-5" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>

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
              От цилиндрической галереи к классической киноленте — просматривайте
              воспоминания так, как вам удобно
            </p>
          </div>

          <div className="relative overflow-hidden py-8">
            {/* perforation top */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center gap-2 px-4 bg-foreground/5">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm bg-foreground/10 flex-shrink-0"
                />
              ))}
            </div>

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

            {/* perforation bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-8 flex items-center gap-2 px-4 bg-foreground/5">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm bg-foreground/10 flex-shrink-0"
                />
              ))}
            </div>
          </div>

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

// -------------------- Корневое приложение с переключателем --------------------

export default function App() {
  const [view, setView] = useState<"gallery" | "album">("gallery");

  return (
    <>
      {/* Переключатель режимов в правом верхнем углу */}
      <div className="fixed top-4 right-4 z-[100] flex gap-2">
        <Button
          size="sm"
          variant={view === "gallery" ? "default" : "outline"}
          onClick={() => setView("gallery")}
        >
          3D-галерея
        </Button>
        <Button
          size="sm"
          variant={view === "album" ? "default" : "outline"}
          onClick={() => setView("album")}
        >
          Альбом
        </Button>
      </div>

      {view === "gallery" ? <RotorGalleryView /> : <ElegantFamilyView />}
    </>
  );
}
