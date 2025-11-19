import React from "react";
import { CheckCircle } from "lucide-react";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fade-in-up">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h2 className="text-2xl font-bold text-primary-900 mb-2">
                    ¡Registro Exitoso!
                </h2>
                <p className="text-gray-600 mb-6">
                    {message || "Gracias por postular tu cooperativa. Nos pondremos en contacto contigo pronto."}
                </p>
                <button
                    onClick={onClose}
                    className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
