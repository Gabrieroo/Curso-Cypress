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
    cy.wait(5000);
  });

  it("alterar conta", () => {
    cy.xpath(loc.CONTAS.BTN_ALTERAR_SELECT('Joao barbosa'), { timeout: 300000 }).click();
    cy.get(loc.CONTAS.NOME).clear().type("João barboso alterado");
    cy.wait(5000);

    cy.get(loc.CONTAS.BTN_SALVAR, { timeout: 300000 }).click();
    cy.wait(5000);
  });
  it('Inserir conta com mesmo nome', () => {
    cy.acessarContas({ timeout: 300000 });
    cy.get(loc.CONTAS.NOME, { timeout: 300000 }).clear().type('Conta mesmo nome');
    cy.get(loc.CONTAS.BTN_SALVAR, { timeout: 300000 }).click();

    cy.get(loc.MESSAGE, { timeout: 300000 }).should(
        "contain",
        "code 400"
      );
      cy.wait(5000);

  });
  it('Criar transacao', () => {
      cy.get(loc.MENU.MOVIMENTACAO).click();
      
      cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc');
      cy.get(loc.MOVIMENTACAO.VALOR).type('127');
      cy.get(loc.MOVIMENTACAO.INTERESSADO).type('inter');
      cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacao');
      cy.get(loc.MOVIMENTACAO.STATUS).click();
      cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();

      cy.get(loc.MESSAGE, { timeout: 300000 }).should(
        "contain",
        "sucesso"
      );
      cy.get(loc.ESTRATO.LINHAS).should('contain', 'Desc').and('have.length', 7);
      cy.xpath(loc.ESTRATO.XP_BUSCA_ELEMENTO('Desc','127')).should('exist');
      cy.wait(5000);
  });
  it('Deve pegar o saldo', () => {
      cy.get(loc.MENU.HOME).click();
      cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain','534,00');
      cy.wait(5000);

      cy.get(loc.MENU.EXTRATO).click();
      cy.xpath(loc.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click();
      cy.wait(5000);
      cy.get(loc.MOVIMENTACAO.STATUS).click();
      cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();

      cy.get(loc.MESSAGE, { timeout: 300000 }).should(
        "contain",
        "sucesso"
      );
      cy.wait(5000);
      cy.get(loc.MENU.HOME).click();
      cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain','4.034,00');
      
  });
  it('Deve remover uma transIcao', () => {
      cy.get(loc.MENU.EXTRATO).click();
      cy.xpath(loc.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click();
      cy.get(loc.MESSAGE, { timeout: 300000 }).should(
        "contain",
        "sucesso"
      );
      
  });
});
