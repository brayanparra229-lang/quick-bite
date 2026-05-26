import { AdminSidebar } from '../../components/AdminSidebar';
import { DispatchService } from '../../application/services';
import { Menu, ShoppingCart, Banknote, TrendingUp, Clock, Calendar, Store, CheckCircle2, Search, Info, AlertTriangle, Package } from 'lucide-react';
import Image from 'next/image';

export default async function AdminDashboardPage() {
    const dispatchService = new DispatchService();
    const data = await dispatchService.getDashboardData();

    return (
        <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen flex">
            <AdminSidebar />
            
            <main className="flex-1 md:ml-80 min-h-screen flex flex-col">
                <header className="flex justify-between items-center px-5 h-16 w-full bg-[#f2f4f6] sticky top-0 z-50 border-b border-[#e0e3e5]">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 rounded-full hover:bg-[#e0e3e5]/50 border">
                            <Menu className="text-[#a04100]" />
                        </button>
                        <h2 className="text-[20px] font-bold text-[#a04100]">Gestión de Despacho</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-[12px] font-medium text-[#5a4136]">Estado del Sistema</span>
                            <span className="text-[12px] font-bold text-green-600 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span> OPERATIVO
                            </span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 p-6 md:p-10 space-y-10 bg-[#f7f9fb]">
                    {/* Stats Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/30 border-l-4 border-l-[#a04100]">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[#5a4136] text-[12px] font-medium mb-1">Ventas del Día</p>
                                    <h3 className="text-[32px] font-black text-[#191c1e] tracking-tight">
                                        ${data.stats.dailySales.toLocaleString('es-CO')} <span className="text-[16px] font-normal text-[#5a4136]">COP</span>
                                    </h3>
                                </div>
                                <div className="text-[#a04100] p-2 bg-[#ffdbcc] rounded-lg">
                                    <Banknote className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-[12px] font-bold text-green-600">
                                <TrendingUp className="w-4 h-4" />
                                {data.stats.salesGrowth} vs. ayer
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/30 border-l-4 border-l-[#396093]">
                            <p className="text-[#5a4136] text-[12px] font-medium mb-1">Pedidos Hoy</p>
                            <h3 className="text-[32px] font-black text-[#191c1e] tracking-tight">{data.stats.ordersToday}</h3>
                            <div className="mt-3 flex items-center gap-2 text-[12px] font-bold text-[#5a4136]">
                                <Clock className="w-4 h-4" />
                                Promedio {data.stats.avgTime}
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/30 border-l-4 border-l-[#505f76]">
                            <p className="text-[#5a4136] text-[12px] font-medium mb-1">Cierre de Caja</p>
                            <h3 className="text-[32px] font-black text-[#191c1e] tracking-tight">18:00</h3>
                            <div className="mt-3 flex items-center gap-2 text-[12px] font-bold text-[#5a4136]">
                                <Calendar className="w-4 h-4" />
                                Sede Central
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
                        {/* Active Orders */}
                        <section className="xl:col-span-2 space-y-6">
                            <div className="flex items-center justify-between">
                                <h4 className="text-[20px] font-semibold text-[#191c1e] flex items-center gap-2">
                                    <Store className="w-6 h-6" />
                                    Pedidos Activos
                                </h4>
                                <span className="px-3 py-1 bg-[#a04100] text-white text-[10px] font-bold rounded-full">
                                    {data.activeOrders.length} PENDIENTES
                                </span>
                            </div>

                            <div className="space-y-4">
                                {data.activeOrders.map(order => (
                                    <div key={order.id} className="bg-[#ffffff] p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-center group hover:ring-2 hover:ring-[#a04100] transition-all">
                                        <div className="w-16 h-16 bg-[#eceef0] rounded-lg flex flex-col items-center justify-center border border-[#e2bfb0]">
                                            <span className="text-[10px] font-bold text-[#5a4136]">ORDEN</span>
                                            <span className="text-[20px] font-black text-[#a04100]">#{order.id}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h5 className="text-[14px] font-semibold text-[#191c1e]">{order.customerName} ({order.customerRole})</h5>
                                                {order.status === 'PREPARANDO' && (
                                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-[10px] font-bold rounded">PREPARANDO</span>
                                                )}
                                                {order.status === 'LISTO' && (
                                                    <span className="px-2 py-0.5 bg-[#a0c6ff] text-[#2a5284] text-[10px] font-bold rounded">LISTO PARA ENTREGA</span>
                                                )}
                                            </div>
                                            <p className="text-[16px] text-[#5a4136]">
                                                {order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="text-right mr-2">
                                                <p className="text-[12px] text-[#5a4136]">Total</p>
                                                <p className="font-bold text-[#191c1e]">${order.total.toLocaleString('es-CO')} COP</p>
                                            </div>
                                            <button className="bg-[#a04100] text-white px-6 py-3 rounded-lg text-[14px] font-bold flex items-center gap-2 hover:bg-[#ff6b00] transition-colors shadow-sm active:scale-95">
                                                <CheckCircle2 className="w-5 h-5" />
                                                Entregado
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {data.completedOrders.map(order => (
                                    <div key={order.id} className="bg-[#ffffff] p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-center opacity-70">
                                            <div className="w-16 h-16 bg-[#eceef0] rounded-lg flex flex-col items-center justify-center border border-[#e2bfb0]">
                                                <span className="text-[10px] font-bold text-[#5a4136]">ORDEN</span>
                                                <span className="text-[20px] font-black text-[#a04100]">#{order.id}</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h5 className="text-[14px] font-semibold text-[#191c1e]">{order.customerName}</h5>
                                                    <span className="px-2 py-0.5 bg-[#e0e3e5] text-[#5a4136] text-[10px] font-bold rounded">ENTREGADO</span>
                                                </div>
                                                <p className="text-[16px] text-[#5a4136]">
                                                    {order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                                                <p className="text-[16px] font-bold text-green-600">Entregado 10:42</p>
                                            </div>
                                    </div>
                                ))}

                            </div>
                        </section>

                        {/* Stock Control */}
                        <section className="space-y-6">
                            <h4 className="text-[20px] font-semibold text-[#191c1e] flex items-center gap-2">
                                <Package className="w-6 h-6" />
                                Control Stock
                            </h4>
                            
                            <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4 border border-[#e2bfb0]">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a4136] w-5 h-5" />
                                    <input className="w-full bg-[#f2f4f6] border-none rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#a04100]" placeholder="Buscar producto..." type="text" />
                                </div>
                                <div className="divide-y divide-[#eceef0]">
                                    <div className="py-3 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-[#eceef0] overflow-hidden">
                                                <Image src="https://picsum.photos/seed/hamburgesa/100/100" alt="Hamburguesa" width={48} height={48} className="object-cover" referrerPolicy="no-referrer" />
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-semibold text-[#191c1e]">Hamburguesa Especial</p>
                                                <p className="text-[12px] text-[#5a4136]">Stock: <span className="font-bold text-[#a04100]">42</span> unds.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 flex items-center justify-between bg-[#ffdad6]/30 rounded-lg px-2 -mx-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-[#eceef0] overflow-hidden">
                                                <Image src="https://picsum.photos/seed/papas/100/100" alt="Papas" width={48} height={48} className="object-cover" referrerPolicy="no-referrer" />
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-semibold text-[#191c1e]">Papas Medianas</p>
                                                <p className="text-[12px] text-[#ba1a1a] font-bold flex items-center gap-1">
                                                    <AlertTriangle className="w-4 h-4" />
                                                    Stock Crítico: 8
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <button className="w-full border-2 border-dashed border-[#e2bfb0] py-4 rounded-lg text-[#5a4136] text-[12px] font-semibold hover:bg-[#eceef0] transition-colors flex items-center justify-center gap-2">
                                    Gestionar Inventario Completo
                                </button>
                            </div>

                            {/* Quick Alerts */}
                            <div className="bg-[#a0c6ff]/30 border border-[#a0c6ff] p-6 rounded-2xl flex gap-4 items-start">
                                <Info className="text-[#396093] w-6 h-6 flex-shrink-0" />
                                <div>
                                    <p className="text-[14px] font-bold text-[#2a5284]">Recordatorio de Suministros</p>
                                    <p className="text-[16px] text-[#2a5284]/80 leading-tight">El pedido de panadería llega mañana a las 7:00 AM.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
