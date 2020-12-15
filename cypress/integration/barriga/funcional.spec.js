///<reference types="cypress"/>

import loc from '../../support/locators'

describe("Testes funcionais de uma aplicacao real", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me", { timeout: 300000 });
  });

  it("Login", () => {
      cy.login('gabriel@teste.com','123456');
      cy.resetApp();
    
  });
  it("Inserir conta", () => {
    cy.get(loc.MENU.SETTINGS, { timeout: 300000 }).click();
    cy.get('[href="/contas"]', { timeout: 300000 }).click();

    cy.url({ timeout: 300000 }).should(
      "include",
      "barrigareact.wcaquino.me/contas"
    );

    cy.get("h2", { timeout: 300000 }).should("have.text", "Contas");

    cy.get(loc.CONTAS.NOME, { timeout: 300000 })
      .type("Joao barbosa")
      .should("have.value", "Joao barbosa");


    cy.get(loc.CONTAS.BTN_SALVAR, { timeout: 300000 }).click();

    cy.get(loc.MESSAGE,{ timeout: 300000 }).should('contain', 'Conta inserida com sucesso');


  });

  it("alterar conta", () => {
      cy.xpath(loc.CONTAS.BTN_ALTERAR_SELECT, { timeout: 300000 }).click();
      cy.get(loc.CONTAS.NOME).clear().type('João barboso alterado');

      cy.get(loc.CONTAS.BTN_SALVAR, { timeout: 300000 }).click();

      cy.get(loc.MESSAGE,{ timeout: 300000 }).should('contain', 'Conta atualizada com sucesso!');

  });
});
