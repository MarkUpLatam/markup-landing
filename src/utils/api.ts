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

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || "Error al registrar usuario");
  }

  return await response.json();
}
