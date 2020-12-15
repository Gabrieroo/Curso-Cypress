///<reference types="cypress"/>

import loc from '../../support/locators'

describe("Testes funcionais de uma aplicacao real", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me", { timeout: 300000 });
  });

  it("Login", () => {
    cy.url({ timeout: 300000 }).should(
      "include",
      "barrigareact.wcaquino.me/login"
    );

    cy.get(loc.LOGIN.USER)
      .type("gabriel@teste.com")
      .should("have.value", "gabriel@teste.com");
    cy.get(loc.LOGIN.PASSWORD)
      .type("123456")
      .should("have.value", "123456");
    cy.get(loc.LOGIN.BTN_LOGIN, { timeout: 300000 }).click();

    cy.url({ timeout: 300000 }).should("include", "barrigareact.wcaquino.me");

    cy.get(loc.MESSAGE,{ timeout: 300000 }).should('contain', 'Bem vindo');
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
