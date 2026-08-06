# Project Overview: app-lojapod

## Goal
`app-lojapod` é a página de apresentação oficial e portal de vendas/conversão do ecossistema **LojaPod**. A aplicação foi projetada no mesmo stack moderno e de alta performance do `cliente-lojapod` (Vite, React, TypeScript, Tailwind CSS, Lucide Icons, Shadcn UI), com design responsivo, elegante e funcional focado em converter lojistas com planos de assinatura mensal integrados diretamente com o backend `api-lojapod`.

## Target Architecture & Tech Stack
- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS + CSS Variables HSL + Modern Design Tokens (Inter & Space Grotesk)
- **UI Components**: Shadcn UI + Radix UI Primitives + Framer Motion (animações de alta conversão)
- **Icons**: Lucide React
- **Backend Integration**: Direct connection with `api-lojapod` (NestJS) for subscription endpoints, checkout session creation, and tenant onboarding.

## Key Features
1. **Hero & Value Proposition**: Banner impactante destacando agilidade no atendimento de pedidos de pods/vapes, integração WhatsApp, controle de estoque e catálogos interativos.
2. **Demonstração do Ecossistema**: Showcase visual do `cliente-lojapod` (vitrine do comprador), `admin-lojapod` (gestão do lojista) e `print-lojapod` (impressão térmica).
3. **Seção de Recursos & Benefícios**: Cards interativos demonstrando rapidez na finalização, gestão de variações de sabores e controle financeiro.
4. **Tabela de Preços & Botão de Pagamento Mensal**:
   - Escolha do plano (Mensal / Trimestral / Anual com desconto)
   - Botão de Assinatura Mensal integrado diretamente com o backend `api-lojapod`
   - Modal/Drawer de Checkout Rápido (Pix / Cartão via API)
5. **Depoimentos & Prova Social**: Casos de uso de lojistas reais do setor.
6. **FAQ & Suporte**: Perguntas frequentes com suporte direto via WhatsApp/Chat.

## Core Dependencies
- `@tanstack/react-query`
- `framer-motion`
- `lucide-react`
- `react-router-dom`
- `sonner`
- `zod` / `react-hook-form`
