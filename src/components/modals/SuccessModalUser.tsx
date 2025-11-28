import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
    userEmail?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
    isOpen, 
    onClose, 
    message,
    userEmail 
}) => {
    if (!isOpen) return null;   

    const handleGoToLogin = () => {
        onClose();
       window.open("https://dinerup-app.vercel.app/", "_blank");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4 animate-scale-in">
                {/* Ícono de éxito con animación */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-green-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <CheckCircle 
                        className="text-green-500 mx-auto relative animate-bounce-once" 
                        size={80} 
                        strokeWidth={2}
                    />
                </div>

                {/* Título */}
                <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
                    ¡Bienvenido a DinerUp!
                </h2>

                {/* Mensaje principal */}
                <div className="mb-6 space-y-3">
                    <p className="text-gray-700 text-lg leading-relaxed text-center">
                        {message || "Tu cuenta ha sido creada exitosamente."}
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                        <p className="text-l text-gray-700 font-medium mb-2">
                            Consulta el estado de tu crédito o inversión.
                        </p>
                        <p className="text-sm text-gray-600">
                            Usa tu cedula {userEmail && <span className="font-semibold text-blue-600">{userEmail}</span>} y la contraseña que enviaremos a tu correo electrónico paara acceder a tu cuenta.
                        </p>
                    </div>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col gap-2">
                    <button
                        onClick={handleGoToLogin}
                        className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                        Iniciar sesión
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800 px-6 py-2 rounded-xl font-medium transition-colors"
                    >
                        Cerrar
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scale-in {
                    from { 
                        opacity: 0; st
                        transform: scale(0.9) translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                
                @keyframes bounce-once {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                
                .animate-scale-in {
                    animation: scale-in 0.4s ease-out;
                }
                
                .animate-bounce-once {
                    animation: bounce-once 0.6s ease-out;
                }
            `}</style>
        </div>
    );
};

export default SuccessModal;