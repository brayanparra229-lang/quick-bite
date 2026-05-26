import { TopAppBar } from '../../components/TopAppBar';
import { BottomNavBar } from '../../components/BottomNavBar';
import { CatalogService } from '../../application/services';
import { Timer, Users, ShoppingCart, Info, Ban } from 'lucide-react';
import Image from 'next/image';

// Server Component for fetching data
export default async function MenuPage() {
    const catalogService = new CatalogService();
    const products = await catalogService.getMenu();

    return (
        <div className="min-h-screen pb-32">
            <TopAppBar />
            
            <main className="mt-20 px-5 space-y-6 max-w-4xl mx-auto">
                {/* Virtual Queue Section  */}
                <section className="bg-[#d4e3ff] text-[#001c3a] rounded-xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-10">
                        <Timer className="w-32 h-32" />
                    </div>
                    <div className="relative z-10 flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                            <Users className="w-5 h-5 text-[#396093]" />
                            <span className="text-[14px] font-bold uppercase tracking-wider text-[#1e4879]">Fila Virtual</span>
                        </div>
                        <div className="flex justify-between items-end mt-3">
                            <div>
                                <p className="text-[16px]">Tiempo estimado</p>
                                <p className="text-[24px] font-bold text-[#a04100]">~12 min</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[16px]">Pedidos delante</p>
                                <p className="text-[20px] font-semibold">5</p>
                            </div>
                        </div>
                        <div className="w-full bg-[#001c3a]/10 h-1.5 rounded-full mt-3">
                            <div className="bg-[#a04100] h-full w-2/3 rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Category Horizontal Scroll */}
                <div className="flex gap-3 overflow-x-auto -mx-5 px-5 py-2 no-scrollbar">
                    <button className="bg-[#a04100] text-white text-[14px] font-bold px-6 py-2 rounded-full whitespace-nowrap shadow-sm">Todos</button>
                    <button className="bg-[#e0e3e5] text-[#5a4136] text-[14px] font-bold px-6 py-2 rounded-full whitespace-nowrap">Combos</button>
                    <button className="bg-[#e0e3e5] text-[#5a4136] text-[14px] font-bold px-6 py-2 rounded-full whitespace-nowrap">Snacks</button>
                    <button className="bg-[#e0e3e5] text-[#5a4136] text-[14px] font-bold px-6 py-2 rounded-full whitespace-nowrap">Bebidas</button>
                </div>

                {/* Food Catalog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className={`bg-[#ffffff] rounded-xl overflow-hidden shadow-sm flex flex-col border border-[#e0e3e5]/50 ${!product.isAvailable ? 'opacity-75 grayscale-[0.5]' : ''}`}>
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                <Image 
                                    src={product.imageUrl} 
                                    alt={product.name} 
                                    fill 
                                    className="object-cover" 
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-3 left-3 flex gap-1">
                                    {product.isComboOfTheDay && (
                                        <span className="bg-[#396093]/90 text-white text-[12px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">Combo del Día</span>
                                    )}
                                    {product.isAvailable && (
                                        <span className="bg-green-600/90 text-white text-[12px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">Disponible</span>
                                    )}
                                </div>
                            </div>
                            <div className="p-6 flex justify-between items-start">
                                <div className="space-y-1">
                                    <h3 className="text-[20px] font-semibold text-[#191c1e]">{product.name}</h3>
                                    {product.isAvailable ? (
                                        <p className="text-[16px] text-[#5a4136]">{product.description}</p>
                                    ) : (
                                        <p className="text-[16px] text-[#ba1a1a]">{product.description}</p>
                                    )}
                                    <p className={`text-[20px] font-semibold mt-3 ${product.isAvailable ? 'text-[#a04100]' : 'text-[#5a4136]'}`}>
                                        ${product.price.toLocaleString('es-CO')} COP
                                    </p>
                                </div>
                                {product.isAvailable ? (
                                    <button className="bg-[#ff6b00] text-white p-3 rounded-xl hover:opacity-90 active:scale-95 transition-transform flex items-center justify-center">
                                        <ShoppingCart className="w-6 h-6" />
                                    </button>
                                ) : (
                                    <button disabled className="bg-[#e0e3e5] text-[#5a4136] p-3 rounded-xl cursor-not-allowed flex items-center justify-center">
                                        <Ban className="w-6 h-6" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <BottomNavBar activeTab="menu" />
        </div>
    );
}
