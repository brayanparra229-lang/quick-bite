import { Utensils, Receipt, User, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface BottomNavBarProps {
  activeTab?: 'menu' | 'orders' | 'profile' | 'help';
}

export function BottomNavBar({ activeTab = 'menu' }: BottomNavBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-3 bg-[#eceef0] shadow-sm rounded-t-xl border-t border-[#e0e3e5]/20 md:hidden">
      <Link href="/menu" className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform ${activeTab === 'menu' ? 'bg-[#a0c6ff] text-[#2a5284]' : 'text-[#5a4136] hover:bg-[#e0e3e5]/50'}`}>
        <Utensils className="w-5 h-5" />
        <span className="text-[12px] font-medium mt-1">Menú</span>
      </Link>
      <Link href="/order" className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform ${activeTab === 'orders' ? 'bg-[#a0c6ff] text-[#2a5284]' : 'text-[#5a4136] hover:bg-[#e0e3e5]/50'}`}>
        <Receipt className="w-5 h-5" />
        <span className="text-[12px] font-medium mt-1">Pedidos</span>
      </Link>
      <Link href="#" className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform ${activeTab === 'profile' ? 'bg-[#a0c6ff] text-[#2a5284]' : 'text-[#5a4136] hover:bg-[#e0e3e5]/50'}`}>
        <User className="w-5 h-5" />
        <span className="text-[12px] font-medium mt-1">Perfil</span>
      </Link>
      <Link href="#" className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform ${activeTab === 'help' ? 'bg-[#a0c6ff] text-[#2a5284]' : 'text-[#5a4136] hover:bg-[#e0e3e5]/50'}`}>
        <HelpCircle className="w-5 h-5" />
        <span className="text-[12px] font-medium mt-1">Ayuda</span>
      </Link>
    </nav>
  );
}
