import React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";


interface TreeNode {
  id: string;
  name: string;
  image: string;
  children?: TreeNode[];
}

const mockTreeData: TreeNode = {
  id: "1",
  name: "Иван Петров",
  image: "https://images.unsplash.com/photo-1758686254593-7c4cd55b2621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFuZG1vdGhlciUyMHBvcnRyYWl0JTIwd2FybXxlbnwxfHx8fDE3NjI0NjAzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  children: [
    {
      id: "2",
      name: "Мария Петрова",
      image: "https://images.unsplash.com/photo-1573408268160-571b710c06c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90byUyMGFsYnVtJTIwdmludGFnZXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      children: [
        {
          id: "4",
          name: "Алексей Иванов",
          image: "https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjBzZXBpYXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          id: "5",
          name: "Елена Иванова",
          image: "https://images.unsplash.com/photo-1573408268160-571b710c06c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaG90byUyMGFsYnVtJTIwdmludGFnZXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        }
      ]
    },
    {
      id: "3",
      name: "Анна Петрова",
      image: "https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYW1pbHklMjBwaG90b3MlMjBzZXBpYXxlbnwxfHx8fDE3NjI0NjAzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ]
};

function TreeNodeComponent({ node, level = 0 }: { node: TreeNode; level?: number }) {
  const colors = [
    "from-[#C8A951]/20 to-[#C8A951]/10",
    "from-[#D6A1A1]/20 to-[#D6A1A1]/10",
    "from-[#8C6C44]/20 to-[#8C6C44]/10",
    "from-[#C4C1A4]/20 to-[#C4C1A4]/10"
  ];
  const borderColors = ["border-[#C8A951]", "border-[#D6A1A1]", "border-[#8C6C44]", "border-[#C4C1A4]"];
  const bgGradient = colors[level % colors.length];
  const borderColor = borderColors[level % borderColors.length];
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className={`p-1.5 rounded-2xl bg-gradient-to-br ${bgGradient} backdrop-blur-sm shadow-lg relative group cursor-pointer transition-transform hover:scale-105`}>
          {/* Golden frame accent */}
          <div className={`absolute inset-0 rounded-2xl border-2 ${borderColor} opacity-50`}></div>
          <Avatar className="w-24 h-24 border-4 border-white shadow-2xl ring-2 ring-[#C8A951]/20">
            <AvatarImage src={node.image} alt={node.name} className="sepia-[0.1]" />
            <AvatarFallback className="bg-[#EADCC2] text-[#4B2C20]">
              {node.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[#C8A951]/20">
          <p className="text-sm text-[#1B1B1B] tracking-wide">{node.name}</p>
        </div>
      </div>
      
      {node.children && node.children.length > 0 && (
        <div className="relative">
          {/* Vertical golden connecting line */}
          <div 
            className="absolute top-0 left-1/2 w-0.5 h-8 -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #C8A951 0%, rgba(200, 169, 81, 0.3) 100%)'
            }}
          ></div>
          
          <div className="flex gap-16 pt-8 relative">
            {/* Horizontal golden connecting line */}
            {node.children.length > 1 && (
              <div 
                className="absolute top-8 h-0.5" 
                style={{ 
                  left: `calc(50% - ${(node.children.length - 1) * 4}rem)`,
                  right: `calc(50% - ${(node.children.length - 1) * 4}rem)`,
                  background: 'linear-gradient(90deg, transparent 0%, #C8A951 20%, #C8A951 80%, transparent 100%)'
                }}
              ></div>
            )}
            
            {node.children.map((child) => (
              <div key={child.id} className="relative">
                {/* Vertical line to child with gradient */}
                <div 
                  className="absolute bottom-full left-1/2 w-0.5 h-8 -translate-x-1/2"
                  style={{
                    background: 'linear-gradient(180deg, rgba(200, 169, 81, 0.3) 0%, #C8A951 100%)'
                  }}
                ></div>
                {/* Ornamental node connector */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-8 w-2 h-2 rounded-full bg-[#C8A951] border-2 border-white shadow-lg"></div>
                <TreeNodeComponent node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function FamilyTreeView() {
  const [zoom, setZoom] = useState(100);
  
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 150));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));
  const handleReset = () => setZoom(100);
  
  return (
    <div className="relative h-full min-h-[700px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C8A951]/20">
      {/* Luxurious background */}
      <div className="absolute inset-0 warm-gradient"></div>
      <div className="absolute inset-0 luxury-gradient"></div>
      <div className="absolute inset-0 paper-texture"></div>
      
      {/* Ornamental corner decorations */}
      <div className="absolute top-0 left-0 w-24 h-24 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C8A951]">
          <path d="M0,0 Q30,0 40,10 T60,40 L0,60 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 opacity-30 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C8A951]">
          <path d="M0,0 Q30,0 40,10 T60,40 L0,60 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-30 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C8A951]">
          <path d="M0,0 Q30,0 40,10 T60,40 L0,60 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-30 transform scale-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#C8A951]">
          <path d="M0,0 Q30,0 40,10 T60,40 L0,60 Z" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Controls */}
      <div className="absolute top-6 right-6 flex gap-3 z-10">
        <Button 
          size="icon" 
          variant="secondary" 
          className="rounded-xl bg-white/95 shadow-xl border-2 border-[#C8A951]/30 hover:bg-white hover:border-[#C8A951]/50 transition-all"
          onClick={handleZoomOut}
        >
          <ZoomOut className="h-4 w-4 text-[#8C6C44]" />
        </Button>
        <Button 
          size="icon" 
          variant="secondary" 
          className="rounded-xl bg-white/95 shadow-xl border-2 border-[#C8A951]/30 hover:bg-white hover:border-[#C8A951]/50 transition-all"
          onClick={handleReset}
        >
          <Maximize2 className="h-4 w-4 text-[#8C6C44]" />
        </Button>
        <Button 
          size="icon" 
          variant="secondary" 
          className="rounded-xl bg-white/95 shadow-xl border-2 border-[#C8A951]/30 hover:bg-white hover:border-[#C8A951]/50 transition-all"
          onClick={handleZoomIn}
        >
          <ZoomIn className="h-4 w-4 text-[#8C6C44]" />
        </Button>
      </div>
      
      {/* Zoom indicator */}
      <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border-2 border-[#C8A951]/30">
        <p className="text-sm text-[#4B2C20] tracking-wide">{zoom}%</p>
      </div>
      
      {/* Tree visualization */}
      <div className="absolute inset-0 overflow-auto p-12">
        <div 
          className="flex justify-center pt-12 transition-transform duration-300 min-w-max"
          style={{ transform: `scale(${zoom / 100})` }}
        >
          <TreeNodeComponent node={mockTreeData} />
        </div>
      </div>
      
      {/* Background tree image */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1591069260105-559b3fa35efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0cmVlJTIwbmF0dXJlfGVufDF8fHx8MTc2MjQ2MDM0NXww&ixlib=rb-4.1.0&q=80&w=1080")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
}
