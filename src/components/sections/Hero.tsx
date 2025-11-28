import React, { useState } from "react";
import { ArrowRight, Sparkles} from "lucide-react";
import headerImage from "../../images/header.jpg";
import trendingIcon from "../../images/LogoDinerUp.png";
import RegisterModal from "../modals/RegisterModal";

const Hero: React.FC = () => {

  const [showRegister, setShowRegister] = useState(false);
  const [registerType, setRegisterType] = useState<"credito" | "inversion">("credito");


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700"
    >
      {/* Imagen decorativa con gradiente overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900 z-10"></div>
        <img
          src={headerImage}
          alt="Fondo financiero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contenido principal - Sin carrusel */}
        <div className="space-y-8">
          <div className="max-w-xl">
            {/* Badge decorativo */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white font-medium">
                Plataforma líder en créditos e inversión
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 animate-slide-up">
              Bienvenido(a) a MARK UP ECUADOR
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-slide-up-delay">
             Pioneros en la gestión de negocios con propósito: impulsamos el progreso de los pueblos mediante soluciones tecnológicas y financieras que ayudan a cumplir sueños, fortalecidos por el sistema financiero nacional.
            </p>
          </div>
        </div>

        {/* Card informativa mejorada */}
        <div className="relative animate-slide-left">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-900 to-primary-900 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Header con icono */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <img src={trendingIcon} alt="DinerUp Logo" className="w-10 h-10 object-contain" />
              </div>
              <h2 className="text-3xl font-bold text-white">DinerUp</h2>
            </div>

            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
             Invierte con total seguridad o accede a créditos inmediatos a través de múltiples instituciones financieras cercanas a tu localidad.
             <br />
             Compara opciones, elige la que mejor se adapte a tus necesidades y obtén tasas preferenciales en solo minutos.

            </p>

            {/* Features con iconos */}
            <div className="space-y-4 mb-8">
              {[
                { icon: "✓", text: "Invierte con confianza" },
                { icon: "✓", text: "Elige entre cooperativas según tu ubicación" },
                { icon: "✓", text: "Solicita tu crédito en línea" },
                { icon: "✓", text: "Elige entre cooperativas que más te convengan" },
                { icon: "✓", text: "Compara beneficios, tasas y tiempos" },
                { icon: "✓", text: "Sin trámites complejos, desde la comodidad de tu hogar" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white text-xs font-bold">{item.icon}</span>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

              {/* Crédito */}
              <button
                onClick={() => {
                setRegisterType("credito");
                  setShowRegister(true);
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-700 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar crédito
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              {/* Inversión */}
              <button
                onClick={() => {
                  setRegisterType("inversion");
                setShowRegister(true);
              }}

                className="w-full group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-bold hover:from-yellow-600 hover:to-amber-700 transition-all shadow-2xl hover:shadow-amber-500/50 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Realizar inversión
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats decorativos */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
              {[
                { value: "50+", label: "Cooperativas", clickable: false },
                { value: "10k+", label: "Usuarios", clickable: false },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll mejorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5 shadow-lg">
            <div className="w-1.5 h-4 bg-gradient-to-b from-white to-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Modales */}

      <RegisterModal
          isOpen={showRegister}
          onClose={() => setShowRegister(false)}
          type={registerType}
      />

      {/* Animaciones CSS */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.4s both;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out 0.3s both;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;