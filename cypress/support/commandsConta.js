import loc from "./locators";

Cypress.Commands.add("acessarContas", () => {
  cy.get(loc.MENU.SETTINGS, { timeout: 300000 }).click();
  cy.get(loc.MENU.CONTAS, { timeout: 300000 }).click();

});

Cypress.Commands.add("adicionarConta", (nome) => {
  cy.get(loc.CONTAS.NOME, { timeout: 300000 })
    .type(nome)
    .should("have.value", nome);

  cy.get(loc.CONTAS.BTN_SALVAR, { timeout: 300000 }).click();

});
