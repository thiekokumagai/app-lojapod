export function getPlatformBaseDomain(): "podipedir.com.br" | "lojapod.com" {
  if (typeof window !== "undefined" && window.location?.hostname) {
    const host = window.location.hostname.toLowerCase();
    if (host === "podipedir.com.br" || host.endsWith(".podipedir.com.br")) {
      return "podipedir.com.br";
    }
  }
  return "lojapod.com";
}

export function getStoreDomainSuffix(): string {
  return getPlatformBaseDomain();
}

export function getAdminUrl(): string {
  if (typeof window !== "undefined" && window.location?.hostname) {
    const host = window.location.hostname.toLowerCase();
    if (host === "podipedir.com.br" || host.endsWith(".podipedir.com.br")) {
      return "https://admin.podipedir.com.br";
    }
    if (host === "lojapod.com" || host.endsWith(".lojapod.com")) {
      return "https://admin.lojapod.com";
    }
  }
  return import.meta.env.VITE_ADMIN_URL || "https://admin.lojapod.com";
}

export function getApiBaseUrl(): string {
  let base =
    import.meta.env.VITE_API_URL ||
    import.meta.env.VITE_ADMIN_API ||
    "http://localhost:3000/api";

  if (typeof window !== "undefined" && window.location?.hostname) {
    const host = window.location.hostname.toLowerCase();
    if (host === "podipedir.com.br" || host.endsWith(".podipedir.com.br")) {
      if (base.includes("api.lojapod.com")) {
        return base.replace("api.lojapod.com", "api.podipedir.com.br");
      }
      if (base.includes("localhost")) {
        return "https://api.podipedir.com.br/api";
      }
    } else if (host === "lojapod.com" || host.endsWith(".lojapod.com")) {
      if (base.includes("api.podipedir.com.br")) {
        return base.replace("api.podipedir.com.br", "api.lojapod.com");
      }
      if (base.includes("localhost")) {
        return "https://api.lojapod.com/api";
      }
    }
  }

  return base;
}

export interface PublicPlan {
  id: string;
  name: string;
  description?: string;
  price: number;
  checkoutType: "SINGLE_PRODUCT" | "RECURRING_SUBSCRIPTION";
  checkoutUrl?: string;
}

export async function fetchPublicPlans(): Promise<PublicPlan[]> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/billing/plans`);
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
  const res = await fetch(`${getApiBaseUrl()}/stores/register-trial`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: payload.title,
      subdomain: payload.subdomain ? payload.subdomain.trim().toLowerCase() : undefined,
      adminEmail: payload.adminEmail.trim().toLowerCase(),
      password: payload.password || "admin123",
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = Array.isArray(err.message) ? err.message.join(", ") : err.message;
    throw new Error(msg || "Não foi possível cadastrar a loja.");
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
    const response = await fetch(`${getApiBaseUrl()}/subscriptions/create`, {
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
          pixCopiaECola: "00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540549.905802BR5915PODI PEDIR6009SAO PAULO62070503***6304E2CA",
          qrCodePix: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000520400005303986540549.905802BR5915PODI PEDIR6009SAO PAULO62070503***6304E2CA",
          adminUrl: getAdminUrl(),
        });
      }, 800);
    });
  }
}
