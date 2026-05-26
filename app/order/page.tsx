'use client'

import { TopAppBar } from '../../components/TopAppBar';
import { BottomNavBar } from '../../components/BottomNavBar';
import { Utensils, Ticket, Check, ChefHat, Bell, Package, Receipt, MapPin, Banknote, QrCode, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function OrderTrackingPage() {
    const [statusInt, setStatusInt] = useState(0);

    useEffect(() => {
        // Simulate order progressing to LISTO
        const timer = setTimeout(() => {
            setStatusInt(1);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const isReady = statusInt > 0;

    return (
        <div className="min-h-screen pb-24 bg-[#f7f9fb]">
            <TopAppBar />
            <main className="mt-16 flex-grow px-5 py-6 max-w-[600px] mx-auto w-full">
                
                {/* Status Indicator */}
                <section className="flex flex-col items-center mb-10">
                    <div className={`w-full p-6 rounded-xl text-center border shadow-sm mb-6 transition-all duration-500 ${isReady ? 'bg-[#a0c6ff] border-[#396093] scale-[1.02] shadow-xl' : 'bg-[#f2f4f6] border-[#ff6b00]/20'}`}>
                        <p className="text-[14px] font-bold text-[#396093] uppercase tracking-widest mb-1">Estado Actual</p>
                        <div className="flex flex-col items-center">
                            {isReady ? (
                                <Bell className="w-16 h-16 text-[#2a5284] mb-3" />
                            ) : (
                                <Utensils className="w-16 h-16 text-[#a04100] mb-3 animate-pulse" />
                            )}
                            <h2 className={`text-[24px] font-bold mb-1 ${isReady ? 'text-[#2a5284]' : 'text-[#191c1e]'}`}>
                                {isReady ? '¡Listo para Recoger!' : 'En Preparación'}
                            </h2>
                            <p className={`text-[16px] ${isReady ? 'text-[#2a5284] font-bold' : 'text-[#5a4136]'}`}>
                                {isReady ? 'Acércate al mostrador de entrega con tu código QR.' : 'Tu pedido está siendo preparado por nuestro equipo de cocina.'}
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#a04100] p-6 rounded-xl w-full flex flex-col items-center shadow-lg relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-10">
                            <Ticket className="w-32 h-32 text-white" />
                        </div>
                        <p className="text-[12px] font-medium text-[#ffb693] uppercase">Número de Turno</p>
                        <span className="text-[64px] leading-tight text-white font-black tracking-tighter">#B-42</span>
                        <p className="text-[16px] text-white/80 mt-1">Tiempo estimado: 8-12 min</p>
                    </div>
                </section>

                {/* Order Stepper */}
                <section className="mb-10 px-1 relative">
                    <div className="absolute top-4 left-0 w-full h-1 bg-[#e0e3e5] z-0"></div>
                    <div className="absolute top-4 left-0 bg-[#a04100] z-0 transition-all duration-1000 h-1" style={{ width: isReady ? '75%' : '50%' }}></div>
                    
                    <div className="flex justify-between relative">
                        <div className="flex flex-col items-center z-10 w-1/4">
                            <div className="w-8 h-8 rounded-full bg-[#a04100] flex items-center justify-center text-white mb-2">
                                <Check className="w-4 h-4" />
                            </div>
                            <span className="text-[12px] font-medium text-[#191c1e] text-center">Recibido</span>
                        </div>
                        <div className="flex flex-col items-center z-10 w-1/4">
                            <div className={`w-8 h-8 rounded-full bg-[#a04100] flex items-center justify-center text-white mb-2 ${!isReady ? 'ring-4 ring-[#ff6b00]/30' : ''}`}>
                                {!isReady ? <ChefHat className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                            </div>
                            <span className={`text-[12px] text-center ${!isReady ? 'text-[#a04100] font-bold' : 'font-medium text-[#191c1e]'}`}>Cocina</span>
                        </div>
                        <div className={`flex flex-col items-center z-10 w-1/4 ${!isReady ? 'opacity-40' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${isReady ? 'bg-[#a04100] text-white ring-4 ring-[#ff6b00]/30' : 'bg-[#e0e3e5] text-[#5a4136]'}`}>
                                <Bell className="w-4 h-4" />
                            </div>
                            <span className={`text-[12px] text-center ${isReady ? 'text-[#a04100] font-bold' : 'text-[#5a4136] font-medium'}`}>Listo</span>
                        </div>
                        <div className="flex flex-col items-center z-10 w-1/4 opacity-40">
                            <div className="w-8 h-8 rounded-full bg-[#e0e3e5] flex items-center justify-center text-[#5a4136] mb-2">
                                <Package className="w-4 h-4" />
                            </div>
                            <span className="text-[12px] font-medium text-[#5a4136] text-center">Entregado</span>
                        </div>
                    </div>
                </section>

                {/* Summary */}
                <section className="grid grid-cols-2 gap-3 mb-10">
                    <div className="col-span-2 bg-[#eceef0] p-6 rounded-xl">
                        <h3 className="text-[20px] font-semibold text-[#191c1e] mb-6 flex items-center gap-2">
                            <Receipt className="text-[#a04100] w-6 h-6" />
                            Resumen del Pedido
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center py-1 border-b border-[#e0e3e5]/50">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#a0c6ff] text-[#2a5284] text-xs font-bold px-2 py-1 rounded">1x</span>
                                    <span className="text-[16px] text-[#191c1e]">Burger Universitaria XL</span>
                                </div>
                                <span className="text-[14px] font-semibold text-[#5a4136]">$18.500</span>
                            </li>
                            <li className="flex justify-between items-center py-1 border-b border-[#e0e3e5]/50">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#a0c6ff] text-[#2a5284] text-xs font-bold px-2 py-1 rounded">1x</span>
                                    <span className="text-[16px] text-[#191c1e]">Papas Medianas</span>
                                </div>
                                <span className="text-[14px] font-semibold text-[#5a4136]">$6.200</span>
                            </li>
                            <li className="flex justify-between items-center py-1">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#a0c6ff] text-[#2a5284] text-xs font-bold px-2 py-1 rounded">1x</span>
                                    <span className="text-[16px] text-[#191c1e]">Jugo Natural Mora</span>
                                </div>
                                <span className="text-[14px] font-semibold text-[#5a4136]">$4.500</span>
                            </li>
                        </ul>
                        <div className="mt-6 pt-3 border-t-2 border-dashed border-[#8e7164]/40 flex justify-between items-center">
                            <span className="text-[20px] font-semibold text-[#191c1e]">Total</span>
                            <span className="text-[20px] font-bold text-[#a04100]">$29.200 COP</span>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-3">
                    <button className="w-full bg-[#a04100] text-white text-[14px] font-bold py-6 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                        <QrCode className="w-6 h-6" />
                        MOSTRAR QR PARA RECOGER
                    </button>
                    <button className="w-full border-2 border-[#396093] text-[#396093] text-[14px] font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#396093]/5 transition-colors">
                        <HelpCircle className="w-5 h-5" />
                        Reportar Problema
                    </button>
                </section>
            </main>
            <BottomNavBar activeTab="orders" />
        </div>
    );
}
