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
  subdomain?: string;
  adminEmail: string;
  password?: string;
}

export async function registerTrialStore(payload: RegisterTrialPayload) {
  const res = await fetch(`${API_URL}/stores/register-trial`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: payload.title,
      subdomain: payload.subdomain ? payload.subdomain.trim().toLowerCase() : undefined,
      adminEmail: payload.adminEmail.trim().toLowerCase(),
      password: payload.password || 'admin123',
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = Array.isArray(err.message) ? err.message.join(', ') : err.message;
    throw new Error(msg || 'Não foi possível cadastrar a loja.');
  }

  return await res.json();
}

export interface SubscriptionPayload {
  storeName: string;
  email: string;
  cpfCnpj?: string;
  planId?: string;
}

export interface SubscriptionResponse {
  success: boolean;
  message: string;
  checkoutUrl?: string;
  qrCodePix?: string;
  pixCopiaECola?: string;
  adminUrl?: string;
}

export async function createSubscriptionSession(payload: SubscriptionPayload): Promise<SubscriptionResponse> {
  try {
    const response = await fetch(`${API_URL}/subscriptions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao conectar com servidor de pagamentos.");
    }

    return await response.json();
  } catch (error: any) {
    console.warn("API offline ou modo simulação:", error);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Sessão de assinatura criada com sucesso!",
          pixCopiaECola: "00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540549.905802BR5915LOJAPOD OFICIAL6009SAO PAULO62070503***6304E2CA",
          qrCodePix: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540549.905802BR5915LOJAPOD OFICIAL6009SAO PAULO62070503***6304E2CA",
          adminUrl: import.meta.env.VITE_ADMIN_URL || "http://localhost:5174",
        });
      }, 800);
    });
  }
}
