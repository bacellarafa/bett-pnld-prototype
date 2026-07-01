
  # Bett PNLD Prototype

  This is a code bundle for Bett PNLD Prototype. The original project is available at https://www.figma.com/design/0wVGdBemwk3y7pP1YWMHsm/Bett-PNLD-Prototype.

  ## Running the code

  Instale as dependências com:

  ```
  npm install --legacy-peer-deps
  ```

  > Use `--legacy-peer-deps`: o export do Figma Make declara `react`/`react-dom`
  > apenas como peerDependencies opcionais, e sem essa flag o resolvedor do npm
  > pode travar na árvore de peers do Radix/MUI.

  Rode `npm run dev` para iniciar o servidor de desenvolvimento.

  ## Atualizações — Edição, Exportação e Feedback (07/2026)

  Fluxos adicionados às três telas de material gerado (Plano de Aula, Atividade e
  Atividade Inclusiva), fiéis ao Figma e ao Tracking Plan da pasta do projeto:

  - **Exportação** — `components/ExportModal.tsx`: modal com formatos PDF/DOCX,
    toggle "Incluir gabarito" (Atividade) / "Incluir adaptações" (Plano) e
    confirmação via toast verde.
  - **Feedback** — `components/FeedbackControl.tsx`: 👍 envia direto; 👎 abre modal
    de motivos (chips multi-seleção + comentário).
  - **Edição inline** — `components/EditableText.tsx` (Plano): editar título, tema,
    seção e momentos com "Reescrever com IA" (loading), Cancelar e Salvar.
    Na Atividade, barra de alerta azul leva à exportação em .DOCX.
  - Toasts de confirmação em `lib/toast.tsx`.
  