///<reference types="cypress"/>

describe("Trabalhando com time", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });
  it('Voltando ao passado', () => {
    cy.get('#buttonNow').click();
    cy.get('#resultado > span').should('contain', '14/12/2020');



    const date = new Date(2012, 3, 10, 15, 23, 50);
    cy.clock(date.getTime());
    cy.get('#buttonNow').click();
    cy.get('#resultado > span').should('contain', '10/04/2012');
  });
  it.only('Vai para o futuro', () => {
    cy.get('#buttonTimePassed').click();
    cy.get('#resultado > span').should('contain','1607');
    cy.get('#resultado > span').invoke('text').should('gt', '1607973899155');

    cy.clock();
    cy.get('#buttonTimePassed').click();
    cy.get('#resultado > span').invoke('text').should('lte', '0');
    cy.wait(1000)
    cy.clock();
    cy.get('#buttonTimePassed').click();
    cy.get('#resultado > span').invoke('text').should('lte', '1000');

    cy.tick(5000);

    cy.get('#buttonTimePassed').click();
    cy.get('#resultado > span').invoke('text').should('gte', '5000');
  });
});
