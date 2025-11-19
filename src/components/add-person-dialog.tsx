import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Plus, Upload, Sparkles } from "lucide-react";

export function AddPersonDialog({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    relation: "",
    birthYear: "",
    story: "",
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(false);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      relation: "",
      birthYear: "",
      story: "",
    });
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children ? (
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <button className="noble-button rounded-2xl text-[#1B1B1B] shadow-lg inline-flex items-center justify-center px-6 py-3 transition-all">
            <Plus className="mr-2 h-5 w-5" />
            Добавить человека
          </button>
        </DialogTrigger>
      )}
      <DialogContent className="rounded-3xl max-w-2xl max-h-[90vh] overflow-y-auto border-4 border-[#C8A951]/20 shadow-2xl paper-texture">
        <DialogHeader className="relative pb-6">
          {/* Decorative element */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
            <Sparkles className="w-4 h-4 text-[#C8A951]" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
          </div>
          
          <DialogTitle className="text-center pt-4 tracking-wide text-[#7B2D26]">
            Добавить члена семьи
          </DialogTitle>
          
          <div className="h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent mt-4"></div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Photo upload */}
          <div className="space-y-3">
            <Label className="text-[#4B2C20]">Фотография</Label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-56 border-3 border-dashed border-[#C8A951]/40 rounded-3xl cursor-pointer bg-gradient-to-br from-[#FAF8F5] to-[#EADCC2]/30 hover:from-[#EADCC2]/40 hover:to-[#FAF8F5] transition-all shadow-inner hover:shadow-lg group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#C8A951]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8A951]/20 transition-colors">
                    <Upload className="w-8 h-8 text-[#C8A951] group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="mb-2 text-[#4B2C20] tracking-wide">
                    Нажмите для загрузки фото
                  </p>
                  <p className="text-xs text-[#8C6C44] tracking-wider">PNG, JPG (MAX. 10MB)</p>
                </div>
                <input type="file" className="hidden" accept="image/*" />
              </label>
            </div>
          </div>
          
          {/* Name fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-[#4B2C20]">Имя</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="rounded-2xl border-2 border-[#C8A951]/30 focus:border-[#C8A951] shadow-sm bg-white"
                placeholder="Иван"
                required
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-[#4B2C20]">Фамилия</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="rounded-2xl border-2 border-[#C8A951]/30 focus:border-[#C8A951] shadow-sm bg-white"
                placeholder="Петров"
                required
              />
            </div>
          </div>
          
          {/* Relation */}
          <div className="space-y-3">
            <Label htmlFor="relation" className="text-[#4B2C20]">Родство</Label>
            <Select 
              value={formData.relation} 
              onValueChange={(value) => setFormData({ ...formData, relation: value })}
            >
              <SelectTrigger className="rounded-2xl border-2 border-[#C8A951]/30 focus:border-[#C8A951] shadow-sm bg-white">
                <SelectValue placeholder="Выберите степень родства" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-2 border-[#C8A951]/30 shadow-xl">
                <SelectItem value="parent" className="rounded-xl">Родитель</SelectItem>
                <SelectItem value="grandparent" className="rounded-xl">Бабушка/Дедушка</SelectItem>
                <SelectItem value="child" className="rounded-xl">Ребёнок</SelectItem>
                <SelectItem value="sibling" className="rounded-xl">Брат/Сестра</SelectItem>
                <SelectItem value="spouse" className="rounded-xl">Супруг/Супруга</SelectItem>
                <SelectItem value="aunt-uncle" className="rounded-xl">Тётя/Дядя</SelectItem>
                <SelectItem value="cousin" className="rounded-xl">Двоюродный брат/сестра</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Birth year */}
          <div className="space-y-3">
            <Label htmlFor="birthYear" className="text-[#4B2C20]">Год рождения (опционально)</Label>
            <Input
              id="birthYear"
              type="number"
              value={formData.birthYear}
              onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
              className="rounded-2xl border-2 border-[#C8A951]/30 focus:border-[#C8A951] shadow-sm bg-white"
              placeholder="1950"
              min="1800"
              max={new Date().getFullYear()}
            />
          </div>
          
          {/* Story */}
          <div className="space-y-3">
            <Label htmlFor="story" className="text-[#4B2C20]">История (опционально)</Label>
            <Textarea
              id="story"
              value={formData.story}
              onChange={(e) => setFormData({ ...formData, story: e.target.value })}
              className="rounded-2xl min-h-36 border-2 border-[#C8A951]/30 focus:border-[#C8A951] shadow-sm bg-white resize-none"
              placeholder="Расскажите историю этого человека, важные моменты жизни, воспоминания..."
            />
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center gap-3 py-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-[#C8A951]"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent"></div>
          </div>
          
          {/* Actions */}
          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 rounded-2xl border-2 border-[#8C6C44]/40 hover:bg-[#8C6C44]/10 shadow-md hover:shadow-lg transition-all text-[#4B2C20]"
              onClick={() => setOpen(false)}
            >
              Отмена
            </Button>
            <Button 
              type="submit" 
              className="flex-1 noble-button rounded-2xl shadow-lg hover:shadow-xl transition-all text-[#1B1B1B]"
            >
              Сохранить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
