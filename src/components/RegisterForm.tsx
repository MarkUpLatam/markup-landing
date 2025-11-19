import { useState } from "react";
import { Mail, Phone, User, CreditCard, MapPin, ChevronDown } from "lucide-react";
import { useRegisterForm } from "../hooks/useRegisterForm";
import { ciudadesPorProvincia } from "../data/ciudadesEcuador";
import { registerUser } from "../utils/api";



// Generador de contraseña automática
const generatePassword = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pass = "";
  for (let i = 0; i < 12; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
};

interface RegisterFormProps {
  type: "credito" | "inversion";
  onSuccess: () => void;
}

export default function RegisterForm({ type, onSuccess }: RegisterFormProps) {
  const { form, errors, handleChange, setForm, isValid } = useRegisterForm(type);
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const ciudadesDisponibles = form.provincia
    ? ciudadesPorProvincia[form.provincia as keyof typeof ciudadesPorProvincia]
    : [];

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("Debes aceptar los términos y condiciones antes de continuar.");
      return;
    }

    setLoading(true);

    const generatedPassword = generatePassword();

    const payload = {
      firstName: form.nombres,
      lastName: form.apellidos,
      email: form.email,
      phone: form.telefono,
      identification: form.cedula,
      province: form.provincia,
      city: form.ciudad,
      password: generatedPassword,
      amount: form.monto,
      role: "CLIENTE",
      requestType: type === "credito" ? "C" : "I" 
    };

    try {
      await registerUser(payload);
      onSuccess();

      setForm({
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
        cedula: "",
        provincia: "",
        ciudad: "",
        monto: "",
      });
    } catch (error: any) {
      alert(error.message || "Error en el registro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Nombre y apellido */}
      <div className="grid grid-cols-2 gap-3">
          <Input
            icon={User}
              name="nombres"
              value={form.nombres}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Nombres"
          />

          <Input
            icon={User}
            name="apellidos"
            value={form.apellidos}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/.test(value)) {
                handleChange(e);
              }
            }}
            placeholder="Apellidos"
          />
      </div>

      {/* Email */}
      <Input
        icon={Mail}
        name="email"
        value={form.email}
        onChange={(e) => {
          const value = e.target.value;

          // Permite solo caracteres aceptados en emails
          if (/^[A-Za-z0-9@._-]*$/.test(value)) {
            handleChange(e);
          }
        }}
        placeholder="Correo electrónico"
        error={errors.email}
      />


      {/* Teléfono y cédula */}
      <div className="grid grid-cols-2 gap-3">

          <Input
            icon={Phone}
            name="telefono"
            value={form.telefono}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                handleChange(e);
              }
            }}
            placeholder="Teléfono"
          />

        <Input
          icon={CreditCard}
          name="cedula"
          value={form.cedula}
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d{0,10}$/.test(value)) {
              handleChange(e);
            }
          }}
          placeholder="Cédula"
          maxLength={10}
          error={errors.cedula}
        />
      </div>

      {/* Provincia */}
      <Select
        icon={MapPin}
        name="provincia"
        value={form.provincia}
        onChange={handleChange}
        options={Object.keys(ciudadesPorProvincia)}
        placeholder="Provincia"
      />

      {/* Ciudad */}
      <Select
        icon={MapPin}
        name="ciudad"
        value={form.ciudad}
        onChange={handleChange}
        options={ciudadesDisponibles}
        placeholder="Ciudad"
        disabled={!form.provincia}
      />

      {/* Monto */}
      <div>
        <input
          type="number"
          name="monto"
          value={form.monto}
          onChange={handleChange}
          placeholder={
            type === "inversion"
              ? "Monto a invertir (min 500 USD)"
              : "Monto a solicitar (USD)"
          }
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500"
          required
        />
        {errors.monto && <p className="text-xs text-red-600 mt-1">{errors.monto}</p>}
      </div>
      {/* Checkbox Términos y Condiciones */}
      <div className="flex items-start gap-2 mt-2">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700 leading-tight">
          Acepto los{" "}
          <span className="text-blue-600 underline cursor-pointer">
            términos y condiciones
          </span>{" "}
          del manejo de mis datos personales.
        </label>
      </div>



      {/* BOTÓN SUBMIT */}
      <button
        type="submit"
        disabled={!isValid || !acceptedTerms || loading}
        className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition disabled:opacity-50"
      >
        {loading
          ? "Procesando..."
          : type === "credito"
          ? "Solicitar crédito"
          : "Realizar inversión"}
      </button>
    </form>
  );
}

function Input({ icon: Icon, error, ...props }: any) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 text-gray-400" />
      <input
        {...props}
        className={`w-full border-2 rounded-xl pl-10 pr-4 py-3 focus:border-blue-500 ${
          error ? "border-red-400" : "border-gray-200"
        }`}
        required
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function Select({ icon: Icon, options, placeholder, ...props }: any) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 text-gray-400" />
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 text-gray-400" />

      <select
        {...props}
        className="w-full border-2 border-gray-200 rounded-xl pl-10 pr-8 py-3 appearance-none bg-white focus:border-blue-500"
        required
      >
        <option value="">{placeholder}</option>
        {options.map((op: string) => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}
