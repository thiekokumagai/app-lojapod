import { afterEach, describe, expect, it, vi } from "vitest";
import { getAdminUrl, getApiBaseUrl, getPlatformBaseDomain, getStoreDomainSuffix } from "./api";

describe("app-lojapod: resolução de múltiplos domínios-base (podipedir.com.br e lojapod.com)", () => {
  const originalWindow = (globalThis as any).window;

  function mockLocation(hostname: string) {
    (globalThis as any).window = {
      location: {
        hostname,
        protocol: "https:",
      },
    };
  }

  afterEach(() => {
    if (originalWindow === undefined) {
      delete (globalThis as any).window;
    } else {
      (globalThis as any).window = originalWindow;
    }
    vi.unstubAllEnvs();
  });

  it("usa admin.podipedir.com.br, api.podipedir.com.br e sufixo podipedir.com.br quando em podipedir.com.br", () => {
    vi.stubEnv("VITE_API_URL", "https://api.lojapod.com/api");
    mockLocation("podipedir.com.br");

    expect(getPlatformBaseDomain()).toBe("podipedir.com.br");
    expect(getStoreDomainSuffix()).toBe("podipedir.com.br");
    expect(getAdminUrl()).toBe("https://admin.podipedir.com.br");
    expect(getApiBaseUrl()).toBe("https://api.podipedir.com.br/api");
  });

  it("usa admin.lojapod.com, api.lojapod.com e sufixo lojapod.com quando em app.lojapod.com", () => {
    vi.stubEnv("VITE_API_URL", "https://api.lojapod.com/api");
    mockLocation("app.lojapod.com");

    expect(getPlatformBaseDomain()).toBe("lojapod.com");
    expect(getStoreDomainSuffix()).toBe("lojapod.com");
    expect(getAdminUrl()).toBe("https://admin.lojapod.com");
    expect(getApiBaseUrl()).toBe("https://api.lojapod.com/api");
  });
});
