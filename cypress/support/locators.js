const locators = {
  LOGIN: {
    USER: '[data-test="email"]',
    PASSWORD: '[data-test="passwd"]',
    BTN_LOGIN: ".btn",
  },
  MENU: {
    SETTINGS: ".dropdown-toggle",
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
    MOVIMENTACAO: "[data-test=menu-movimentacao]",
    HOME: "[data-test=menu-home]",
    EXTRATO : '[data-test=menu-extrato]'
  },
  CONTAS: {
    NOME: ".form-control",
    BTN_SALVAR: ".btn",
    BTN_ALTERAR_SELECT: (NOME) => `//table//td[contains(., '${NOME}')]/..//i[@class='far fa-edit']`,
  },
  MOVIMENTACAO: {
    DESCRICAO: "[data-test=descricao]",
    VALOR: "[data-test=valor]",
    INTERESSADO: "[data-test=envolvido]",
    STATUS: "[data-test=status]",
    BTN_SALVAR: ".btn-primary",
    CONTA: "[data-test=conta]",
  },
  ESTRATO: {
    LINHAS: ".list-group > li ",
    XP_BUSCA_ELEMENTO: (NOME,VALOR) => `//span[contains(., '${NOME}')]/following-sibling::small[contains(., '${VALOR}')]`,
    FN_XP_REMOVER_ELEMENTO : conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`,
    FN_XP_ALTERAR_ELEMENTO : conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`,
  },
  SALDO: {
    FN_XP_SALDO_CONTA: (NOME) => `//td[contains(., '${NOME}')]/../td[2]`,
  },
  MESSAGE: ".toast-message",
};
export default locators;
