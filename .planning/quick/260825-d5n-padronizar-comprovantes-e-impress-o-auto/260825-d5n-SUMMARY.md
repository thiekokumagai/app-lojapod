---
phase: quick-260825-d5n
plan: 01
status: complete
subsystem: landing-page
tags: [copy, features, receipts, printing]
key-files:
  modified:
    - src/components/GridFeatures.tsx
    - src/components/AboutSystem.tsx
    - src/components/Pricing.tsx
    - src/components/Hero.tsx
    - src/components/FAQ.tsx
    - src/components/Footer.tsx
metrics:
  tasks: 3
  files: 6
  completed: 2026-08-25
---

# Quick Task 260825-d5n: Padronizar comprovantes e impressão automática

Padronização de “Comprovantes & Impressão automática” em todas as superfícies ativas da landing page, com indicação de impressão térmica automática em 58mm/80mm nas descrições detalhadas.

## Completed Work

- Atualizado o card principal de recursos com o nome padronizado e a compatibilidade térmica.
- Adicionado o recurso aos módulos especiais com o ícone `Printer`.
- Substituídas as duas variantes antigas nos recursos locais de fallback dos planos, sem alterar dados vindos da API.
- Propagada a capacidade pelo Hero, FAQ e resumo/lista de recursos do Footer.
- Confirmada a ausência das nomenclaturas antigas nos seis componentes ativos.

## Verification

- `rg -n -F "Comprovantes & Impressão automática" ...`: ocorrências confirmadas em todos os seis componentes.
- Busca por `Impressão Térmica de Balcão`: nenhuma ocorrência nos componentes auditados.
- Busca pelo título antigo `Comprovantes & Impressão`: nenhuma ocorrência exata nos componentes auditados.
- `git diff --check`: concluído sem erros de whitespace.
- `npm run build`: concluído com sucesso (`vite build`, 2045 módulos transformados).

## Deviations from Plan

None — plan executed as written.

## Commit Note

Nenhum commit foi criado porque `src/components/Hero.tsx` já continha alterações não relacionadas do usuário antes desta tarefa. As mudanças foram mantidas no working tree para evitar incluir trabalho preexistente em um commit atômico.

## Self-Check: PASSED

- Todos os seis arquivos planejados foram atualizados.
- O arquivo de resumo existe no diretório solicitado.
- O build de produção foi concluído sem erros.
