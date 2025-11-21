export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  identification: string;
  province: string;
  city: string;
  password: string;
  amount: string;
  role: "CLIENTE";
}

export interface RegisterResponse {
  token: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export async function registerUser(
  data: RegisterPayload
): Promise<RegisterResponse> {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message || "Error al registrar usuario");
    }
    return json;
  } else {
    const text = await response.text();
    throw new Error("Respuesta inesperada del servidor: " + text.slice(0, 100));
  }
}
