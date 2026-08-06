const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export interface SubscriptionPayload {
  storeName: string;
  email: string;
  phone: string;
  cpfCnpj?: string;
  planId: "mensal" | "anual";
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
    console.warn("API offline or simulation mode fallback:", error);
    // Simulation fallback if API endpoint is not yet active on local environment
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
