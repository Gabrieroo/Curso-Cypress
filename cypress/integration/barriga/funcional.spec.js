///<reference types="cypress"/>

import loc from "../../support/locators";
import "../../support/commandsConta";

describe("Testes funcionais de uma aplicacao real", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me", { timeout: 300000 });
  });

  it("Login", () => {
    cy.login("gabriel@teste.com", "123456");
    cy.resetApp();
  });
  it("Inserir conta", () => {
    cy.acessarContas();
    cy.adicionarConta("Joao barbosa");

    cy.get(loc.MESSAGE, { timeout: 300000 }).should(
      "contain",
      "Conta inserida com sucesso"
    );
  });

  it("alterar conta", () => {
    cy.xpath(loc.CONTAS.BTN_ALTERAR_SELECT, { timeout: 300000 }).click();
    cy.get(loc.CONTAS.NOME).clear().type("João barboso alterado");
    cy.wait(5000);

    cy.get(loc.CONTAS.BTN_SALVAR, { timeout: 300000 }).click();

    cy.get(loc.MESSAGE, { timeout: 300000 }).should(
      "contain",
      "Conta atualizada com sucesso!"
    );
  });
});
