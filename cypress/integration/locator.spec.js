///<reference types="cypress"/>

describe("Locator", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });
  it("Usando jQuery selector ", () => {
    cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click();
    cy.get('[onclick*="Francisco"]').click();
  });

  it.only('Usando xpath', () => {
      cy.xpath('//input');
      cy.xpath('//*[@id="tabelaUsuarios"]/tbody/tr[2]/td[6]/input');
  });

});
