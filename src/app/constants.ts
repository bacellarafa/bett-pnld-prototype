// ─── Shared data used across multiple screens ───────────────────────────────

export const CHECKBOXES = [
  "Necessita de apoio frente a desafios novos",
  "Fragilidade para lidar com frustrações",
  "Necessita de apoio para manter a atenção",
  "Necessita de organização, rotina e previsibilidade",
  "Necessita de apoio visual e/ou concretos",
  "Requer pausas e oportunidades de movimento",
  "Engaja-se melhor em atividades curtas",
  "Necessita de apoio em situações de espera",
  "Necessita de apoio em atividades em grupo",
  "Beneficia-se de ambientes com menos estímulos",
  "Necessita de rotinas e combinados",
  "Beneficia-se da antecipação de mudanças",
  "Engaja-se em conteúdos de seu interesse",
  "Necessita de tempo ampliado para realizar atividades",
  "Necessita de apoio para realizar atividades",
  "Precisa de apoio para fazer atividades",
  "Precisa de apoio para organizar informações",
  "Beneficia-se de exemplos práticos",
  "Compreende melhor conteúdos contextualizados",
  "Gosta de receber devolutivas",
  "Necessita de apoio com mudanças de contexto",
  "Compreende enunciados com vocabulário mais acessível",
  "Compreende melhor textos curtos",
  "Necessita de apoio na leitura de enunciados",
  "Beneficia-se de organização visual clara",
  "Gosta de oralidade e/ou prática",
  "Prefere copiar em vez de ler",
  "Necessita de apoio para organizar a escrita",
];

export const COMPONENTES = [
  "Matemática",
  "Língua Portuguesa",
  "Ciências",
  "História",
  "Geografia",
  "Artes",
  "Educação Física",
  "Língua Inglesa",
  "Língua Espanhola",
];

/** EF I (1–5) only; FII and EM are "Em breve" in both flows */
export const ANOS: { label: string; disabled?: boolean; badge?: string }[] = [
  { label: "1º Ano" },
  { label: "2º Ano" },
  { label: "3º Ano" },
  { label: "4º Ano" },
  { label: "5º Ano" },
  { label: "Fundamental II", disabled: true, badge: "Em breve" },
  { label: "Ensino Médio",   disabled: true, badge: "Em breve" },
];

export const BNCC_CODES = [
  { code: "EF01MA01", desc: "Utilizar números naturais como indicador de quantidade ou de ordem" },
  { code: "EF02MA01", desc: "Comparar e ordenar números naturais por meio de composição e decomposição" },
  { code: "EF03MA01", desc: "Ler, escrever e comparar números naturais de até a ordem dos milhares" },
  { code: "EF03MA12", desc: "Identificar e registrar a medida de comprimento de objetos" },
  { code: "EF04MA01", desc: "Ler, escrever e ordenar números naturais até a ordem dos milhões" },
  { code: "EF05MA01", desc: "Identificar e representar frações (termos e operações)" },
  { code: "EF01LP01", desc: "Reconhecer que textos são lidos e escritos da esquerda para a direita" },
  { code: "EF03LP01", desc: "Identificar a ideia central de um texto" },
  { code: "EF04LP01", desc: "Relacionar elementos de um texto e suas funções" },
  { code: "EF03CI01", desc: "Produzir diferentes sons a partir da vibração de objetos e superfícies" },
  { code: "EF04HI01", desc: "Identificar as formas de organização social e econômica em comunidades" },
  { code: "EF05GE01", desc: "Investigar os padrões de produção e distribuição de riqueza no mundo" },
];
