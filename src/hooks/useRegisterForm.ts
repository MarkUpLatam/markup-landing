import { useState } from "react";
import { validarCedulaEcuador, validarMonto } from "../utils/validations";

export const useRegisterForm = (tipo: "credito" | "inversion") => {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    telefono: "",
    cedula: "",
    provincia: "",
    ciudad: "",
    monto: "",
  });

  const [errors, setErrors] = useState({
    monto: "",
    cedula: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? ""
          : "Ingrese un correo electrónico válido",
      }));
    }

    if (name === "cedula") {
      setErrors((prev) => ({
        ...prev,
        cedula: validarCedulaEcuador(value) ? "" : "Cédula inválida",
      }));
    }

    if (name === "monto") {
      setErrors((prev) => ({
        ...prev,
        monto: validarMonto(value, tipo),
      }));
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "provincia" ? { ciudad: "" } : {}),
    }));
  };

  const isValid =
    Object.values(errors).every((e) => e === "") &&
    form.nombres &&
    form.apellidos &&
    form.email &&
    form.email &&
    form.telefono &&
    form.cedula &&
    form.provincia &&
    form.ciudad &&
    form.monto;

  return {
    form,
    errors,
    isValid,
    handleChange,
    setForm,
  };
};
