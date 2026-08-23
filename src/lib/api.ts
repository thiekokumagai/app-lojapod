const API_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_ADMIN_API || "http://localhost:3000/api";

export interface PublicPlan {
  id: string;
  name: string;
  description?: string;
  price: number;
  checkoutType: 'SINGLE_PRODUCT' | 'RECURRING_SUBSCRIPTION';
  checkoutUrl?: string;
}

export async function fetchPublicPlans(): Promise<PublicPlan[]> {
  try {
    const res = await fetch(`${API_URL}/billing/plans`);
    if (!res.ok) return [];
    return await res.json();
  } catch (e) {
    console.error("Erro ao carregar planos públicos:", e);
    return [];
  }
}

export interface RegisterTrialPayload {
  title: string;
  adminEmail: string;
  phone?: string;
  password?: string;
  subdomain?: string;
}

export async function registerTrialStore(payload: RegisterTrialPayload) {
  const res = await fetch(`${API_URL}/stores/register-trial`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: payload.title,
      adminEmail: payload.adminEmail,
      phone: payload.phone,
      password: payload.password || 'admin123',
      subdomain: payload.subdomain,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Não foi possível cadastrar a loja.');
  }

  return await res.json();
}
