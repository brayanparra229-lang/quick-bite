import { Menu, ShoppingCart } from 'lucide-react';

export function TopAppBar() {
  return (
    <header className="flex justify-between items-center px-5 h-16 w-full fixed top-0 z-50 bg-[#f2f4f6] transition-colors duration-200">
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-full hover:bg-[#e0e3e5]/50 transition-colors duration-200 text-[#a04100]">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-[20px] leading-[28px] font-bold text-[#a04100]">
          Quick-Bite University
        </h1>
      </div>
      <button className="p-2 rounded-full hover:bg-[#e0e3e5]/50 transition-colors duration-200 text-[#a04100]">
        <ShoppingCart className="w-6 h-6" />
      </button>
    </header>
  );
}
