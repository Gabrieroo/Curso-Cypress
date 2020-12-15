///<reference types="cypress"/>

describe("Testes funcionais de uma aplicacao real", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me", { timeout: 300000 });
  });

  it("Login", () => {
    cy.url({ timeout: 300000 }).should(
      "include",
      "barrigareact.wcaquino.me/login"
    );

    cy.get('[data-test="email"]')
      .type("gabriel@teste.com")
      .should("have.value", "gabriel@teste.com");
    cy.get('[data-test="passwd"]')
      .type("123456")
      .should("have.value", "123456");
    cy.get(".btn", { timeout: 300000 }).click();

    cy.url({ timeout: 300000 }).should("include", "barrigareact.wcaquino.me");

    cy.get(".toast-message",{ timeout: 300000 }).should('contain', 'Bem vindo');
  });
  it("Inserir conta", () => {
    cy.get(".dropdown-toggle", { timeout: 300000 }).click();
    cy.get('[href="/contas"]', { timeout: 300000 }).click();

    cy.url({ timeout: 300000 }).should(
      "include",
      "barrigareact.wcaquino.me/contas"
    );

    cy.get("h2", { timeout: 300000 }).should("have.text", "Contas");

    cy.get(".form-control", { timeout: 300000 })
      .type("Joao barbosa")
      .should("have.value", "Joao barbosa");


    cy.get(".btn", { timeout: 300000 }).click();

    cy.get(".toast-message",{ timeout: 300000 }).should('contain', 'Conta inserida com sucesso');


  });

  it("alterar conta", () => {
      cy.xpath("//table//td[contains(., 'Joao barbosa')]/..//i[@class='far fa-edit']", { timeout: 300000 }).click();
      cy.get('[data-test=nome]').clear().type('João barboso');

  });
});
