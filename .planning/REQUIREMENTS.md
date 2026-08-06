# Project Requirements: app-lojapod

## Functional Requirements
- **REQ-01**: Apresentar landing page responsiva, moderna e otimizada para SEO e alta conversão mobile/desktop.
- **REQ-02**: Exibir seções institucionais claras: Hero Header, Funcionalidades Chave, Demonstração Interativa, Planos & Preços, Depoimentos, FAQ e Footer.
- **REQ-03**: Prover botão proeminente de "Assinar Plano Mensal" e "Experimentar Grátis / Demonstração".
- **REQ-04**: Integrar o fluxo de checkout mensal com o backend `api-lojapod` (criação de sessão de assinatura/cobrança Pix ou Cartão e registro do novo lojista/tenant).
- **REQ-05**: Incluir modal/drawer intuitivo para preenchimento de dados cadastrais rápidos (Nome da Loja, E-mail, WhatsApp, CNPJ/CPF) antes do pagamento.
- **REQ-06**: Suportar notificação toast de confirmação e redirecionamento para o `admin-lojapod` ou ambiente do cliente após conclusão.

## Non-Functional Requirements
- **NFR-01**: Performance de carregamento instantâneo (Vite + React build otimizado).
- **NFR-02**: Identidade visual consistente com os módulos `cliente-lojapod` e `admin-lojapod` (Space Grotesk + Inter, gradientes vermelhos/escuros premium e micro-animações).
- **NFR-03**: Código limpo, componentizado em TypeScript estrito.
