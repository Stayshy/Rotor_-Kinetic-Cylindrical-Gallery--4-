import * as React from "react";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BookText, Edit, MoreVertical } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface PersonCardProps {
  name: string;
  relation: string;
  years?: string;
  image: string;
  story?: string;
  onEdit?: () => void;
  onViewStory?: () => void;
}

export function PersonCard({ name, relation, years, image, story, onEdit, onViewStory }: PersonCardProps) {
  return (
    <Card className="overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-card group relative">
      {/* Luxurious border frame */}
      <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-br from-[#C8A951]/20 via-transparent to-[#8C6C44]/20 pointer-events-none z-10"></div>
      
      <div className="relative paper-texture">
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-muted relative">
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-[5]"></div>
            
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 sepia-[0.15]"
            />
            
            {/* Golden light overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A951]/10 via-transparent to-[#7B2D26]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[4]"></div>
          </div>
          
          <div className="absolute top-3 right-3 z-20">
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg border-2 border-[#C8A951]/30 inline-flex items-center justify-center h-10 w-10 transition-colors">
                <MoreVertical className="h-4 w-4 text-[#8C6C44]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-2xl border-[#C8A951]/30 shadow-xl">
                <DropdownMenuItem onClick={onEdit} className="rounded-xl">
                  <Edit className="mr-2 h-4 w-4 text-[#8C6C44]" />
                  Редактировать
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onViewStory} className="rounded-xl">
                  <BookText className="mr-2 h-4 w-4 text-[#7B2D26]" />
                  История
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-5 z-10">
            <Badge 
              variant="secondary" 
              className="rounded-full bg-white/95 backdrop-blur-sm mb-2 border-2 border-[#C8A951]/20 text-[#4B2C20] shadow-lg"
            >
              {relation}
            </Badge>
          </div>
        </div>
        
        <div className="p-6 space-y-4 bg-gradient-to-b from-white to-[#FAF8F5]">
          <div>
            <h3 className="text-[#1B1B1B] mb-1 tracking-wide">{name}</h3>
            {years && (
              <p className="text-sm text-[#8C6C44] tracking-wider">{years}</p>
            )}
          </div>
          
          {story && (
            <p className="text-sm text-[#6B6256] line-clamp-2 leading-relaxed italic">
              {story}
            </p>
          )}
          
          {/* Decorative separator */}
          <div className="flex items-center gap-2 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent"></div>
            <div className="w-1 h-1 rounded-full bg-[#C8A951]"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent"></div>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              className="flex-1 rounded-xl border-2 border-[#C8A951]/40 hover:bg-[#C8A951]/10 hover:border-[#C8A951] text-[#4B2C20] transition-all shadow-sm hover:shadow-md"
              onClick={onViewStory}
            >
              <BookText className="mr-2 h-4 w-4" />
              История
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 rounded-xl border-2 border-[#8C6C44]/40 hover:bg-[#8C6C44]/10 hover:border-[#8C6C44] text-[#4B2C20] transition-all shadow-sm hover:shadow-md"
              onClick={onEdit}
            >
              <Edit className="mr-2 h-4 w-4" />
              Изменить
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
