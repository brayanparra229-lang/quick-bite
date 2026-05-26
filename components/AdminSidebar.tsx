import Image from 'next/image';
import { LayoutDashboard, Package, BarChart2, Settings } from 'lucide-react';
import Link from 'next/link';

export function AdminSidebar() {
  return (
    <aside className="hidden md:flex flex-col h-full py-6 pl-3 bg-[#f2f4f6] w-80 fixed left-0 top-0 z-40 border-r border-[#e0e3e5]">
      <div className="px-6 mb-10">
        <h1 className="text-[32px] font-black text-[#a04100] tracking-tight">Quick-Bite</h1>
        <p className="text-[#5a4136] text-[12px] font-medium tracking-widest uppercase mt-1">University Edition</p>
      </div>
      <nav className="flex-1 space-y-2">
        <Link href="/admin" className="flex items-center gap-4 py-3 px-6 bg-[#a0c6ff] text-[#2a5284] font-bold rounded-r-full mr-4 transition-all">
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[16px]">Panel Despacho</span>
        </Link>
        <Link href="#" className="flex items-center gap-4 py-3 px-6 text-[#5a4136] hover:bg-[#e0e3e5] transition-colors rounded-r-full mr-4">
          <Package className="w-5 h-5" />
          <span className="text-[16px]">Inventario</span>
        </Link>
        <Link href="#" className="flex items-center gap-4 py-3 px-6 text-[#5a4136] hover:bg-[#e0e3e5] transition-colors rounded-r-full mr-4">
          <BarChart2 className="w-5 h-5" />
          <span className="text-[16px]">Reportes</span>
        </Link>
        <Link href="#" className="flex items-center gap-4 py-3 px-6 text-[#5a4136] hover:bg-[#e0e3e5] transition-colors rounded-r-full mr-4">
          <Settings className="w-5 h-5" />
          <span className="text-[16px]">Ajustes</span>
        </Link>
      </nav>
      {/* User profile chunk */}
      <div className="mt-auto px-6 pb-6">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#e6e8ea]">
          <div className="w-10 h-10 rounded-full bg-[#a04100] flex items-center justify-center text-white font-bold overflow-hidden">
            <Image 
              alt="Admin" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTPNDArMAirc7m5a_0v7f7S6JQn8zCy8DxZEVe-yJ5eeO2HHbWvXCeFbC8jAkrljbbBoid6udRYd8j5cSbshyXJwdAZvk7OVk573G7G-QlAQgY9AiMtwknDgUEANbmJbtLvK48liHHYyBfPkHxjWKkYTnsJRLyghpjqwSWX_zE4AvfMsSZEhmbtWt0j2IJumP_g1x7kLi7mDbl1E5As09--8NU1XvIpnPACuwNhn4CObBCjC21Th07LlFLmUVydiVReEV6nL-l71Td"
              width={40}
              height={40}
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-[#191c1e]">Admin Cafetería</p>
            <p className="text-[12px] text-[#5a4136]">Sede Central</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
