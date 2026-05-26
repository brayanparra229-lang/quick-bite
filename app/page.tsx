'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight, Check } from 'lucide-react';

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    return (
        <main className="min-h-screen flex items-center justify-center p-5 md:p-10 relative overflow-hidden bg-[#f7f9fb]">
            <div className="w-full max-w-[1100px] flex flex-col md:flex-row bg-[#ffffff] rounded-xl overflow-hidden shadow-lg min-h-[650px] relative z-10">
                {/* Left Side: Visual/Brand Content */}
                <div className="hidden md:flex md:w-1/2 relative bg-[#396093] overflow-hidden items-center justify-center p-16">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[#ff6b00]"></div>
                        <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full border-[40px] border-[#e6e8ea]"></div>
                    </div>
                    <div className="relative z-10 text-center">
                        <div className="mb-6">
                            <div className="w-32 h-32 mx-auto bg-[#a04100] rounded-xl shadow-lg flex items-center justify-center">
                                {/* Simulated Logo */}
                                <span className="text-white text-4xl font-black">QB</span>
                            </div>
                        </div>
                        <h1 className="text-[32px] font-bold text-white mb-3">Quick-Bite University</h1>
                        <p className="text-[18px] text-[#d4e3ff] max-w-md mx-auto">
                            Eficiencia metabólica para el éxito académico. La forma más rápida de alimentarte en el campus.
                        </p>
                        <div className="mt-16 flex flex-col gap-3 items-center">
                            <div className="flex items-center gap-1 text-[#a5c8ff]">
                                <Check className="w-5 h-5" />
                                <span className="text-[12px] font-semibold">Exclusivo para Estudiantes y Personal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Auth Forms */}
                <div className="w-full md:w-1/2 flex flex-col p-6 md:p-16 justify-center bg-[#f7f9fb]">
                    {/* Mobile Header */}
                    <div className="md:hidden flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 bg-[#a04100] rounded-lg flex items-center justify-center">
                           <span className="text-white font-bold">QB</span>
                        </div>
                        <span className="text-[20px] text-[#a04100] font-bold">Quick-Bite</span>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex border-b border-[#e0e3e5] mb-10">
                        <button 
                            className={`flex-1 py-3 text-[14px] font-bold transition-all ${activeTab === 'login' ? 'border-b-2 border-[#a04100] text-[#a04100]' : 'text-[#5a4136]'}`}
                            onClick={() => setActiveTab('login')}
                        >
                            INICIAR SESIÓN
                        </button>
                        <button 
                            className={`flex-1 py-3 text-[14px] font-bold transition-all ${activeTab === 'register' ? 'border-b-2 border-[#a04100] text-[#a04100]' : 'text-[#5a4136]'}`}
                            onClick={() => setActiveTab('register')}
                        >
                            REGISTRARSE
                        </button>
                    </div>

                    {/* Login Form */}
                    {activeTab === 'login' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <div className="space-y-3">
                                <h2 className="text-[20px] font-semibold text-[#191c1e]">Bienvenido de nuevo</h2>
                                <p className="text-[16px] text-[#5a4136]">Ingresa tus credenciales institucionales para continuar.</p>
                            </div>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1">
                                    <label className="text-[12px] font-medium text-[#5a4136] uppercase tracking-wider">Correo Institucional</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5a4136]" />
                                        <input 
                                            className="w-full pl-10 pr-6 py-3 rounded-lg border border-[#e2bfb0] bg-[#ffffff] focus:ring-2 focus:ring-[#396093] focus:border-[#396093] outline-none transition-all text-[#191c1e]" 
                                            placeholder="usuario@universidad.edu.co" 
                                            type="email" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[12px] font-medium text-[#5a4136] uppercase tracking-wider">Contraseña</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5a4136]" />
                                        <input 
                                            className="w-full pl-10 pr-6 py-3 rounded-lg border border-[#e2bfb0] bg-[#ffffff] focus:ring-2 focus:ring-[#396093] focus:border-[#396093] outline-none transition-all text-[#191c1e]" 
                                            placeholder="••••••••" 
                                            type="password" 
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-1 cursor-pointer">
                                        <input className="w-4 h-4 rounded border-[#8e7164] text-[#a04100] focus:ring-[#a04100]" type="checkbox" />
                                        <span className="text-[12px] font-medium text-[#5a4136]">Recordarme</span>
                                    </label>
                                    <a className="text-[12px] font-medium text-[#396093] hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                                </div>
                                <Link href="/menu" className="w-full py-3 bg-[#a04100] text-white text-[14px] font-bold rounded-full hover:opacity-90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-3">
                                    <span>ENTRAR AL CAMPUS</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </form>
                            <div className="pt-6 border-t border-[#e0e3e5] flex flex-col gap-6">
                                <p className="text-center text-[12px] font-medium text-[#5a4136]">O accede con tu cuenta única</p>
                                <button className="w-full py-3 border border-[#e2bfb0] rounded-full text-[14px] font-bold text-[#191c1e] hover:bg-[#e0e3e5]/30 transition-all flex items-center justify-center gap-3">
                                    <span>Continuar con Google Workspace</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Register Form */}
                    {activeTab === 'register' && (
                        <div className="space-y-6 animate-in fade-in duration-500">
                            <div className="space-y-3">
                                <h2 className="text-[20px] font-semibold text-[#191c1e]">Únete a la comunidad</h2>
                                <p className="text-[16px] text-[#5a4136]">Optimiza tus tiempos de comida hoy mismo.</p>
                            </div>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="text-[12px] font-medium text-[#5a4136] uppercase tracking-wider">Nombre</label>
                                        <input className="w-full px-4 py-2 rounded-lg border border-[#e2bfb0] bg-[#ffffff] focus:ring-2 focus:ring-[#396093] outline-none" placeholder="Ej. Juan" type="text" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[12px] font-medium text-[#5a4136] uppercase tracking-wider">Apellido</label>
                                        <input className="w-full px-4 py-2 rounded-lg border border-[#e2bfb0] bg-[#ffffff] focus:ring-2 focus:ring-[#396093] outline-none" placeholder="Ej. Pérez" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[12px] font-medium text-[#5a4136] uppercase tracking-wider">ID Universitario</label>
                                    <input className="w-full px-4 py-2 rounded-lg border border-[#e2bfb0] bg-[#ffffff] focus:ring-2 focus:ring-[#396093] outline-none" placeholder="Código de estudiante" type="text" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[12px] font-medium text-[#5a4136] uppercase tracking-wider">Email Institucional</label>
                                    <input className="w-full px-4 py-2 rounded-lg border border-[#e2bfb0] bg-[#ffffff] focus:ring-2 focus:ring-[#396093] outline-none" placeholder="nombre.apellido@universidad.edu" type="email" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[12px] font-medium text-[#5a4136] uppercase tracking-wider">Crear Contraseña</label>
                                    <input className="w-full px-4 py-2 rounded-lg border border-[#e2bfb0] bg-[#ffffff] focus:ring-2 focus:ring-[#396093] outline-none" placeholder="Mínimo 8 caracteres" type="password" />
                                </div>
                                <p className="text-[12px] font-medium text-[#5a4136] text-xs leading-relaxed">
                                    Al registrarte, aceptas nuestros <a className="text-[#396093] underline" href="#">Términos de Servicio</a> y <a className="text-[#396093] underline" href="#">Política de Privacidad</a>.
                                </p>
                                <button className="w-full py-3 bg-[#a04100] text-white text-[14px] font-bold rounded-full hover:bg-opacity-90 transition-all shadow-md active:scale-95">
                                    CREAR MI CUENTA
                                </button>
                            </form>
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <p className="text-[12px] font-medium text-[#5a4136] opacity-60">© {new Date().getFullYear()} Quick-Bite University. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
