///<reference types="cypress"/>

describe("Espera", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });
  it("Deve aguardar elemento estar disponivel", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("Funciona");
  });
  it("Deve fazer retrys", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("Funciona");
  });
  it("Uso do find", () => {
    cy.get("#buttonList").click();
    cy.get("#lista li").find("span").should("contain", "Item 1");
    //cy.get('#lista li').find('span').should('contain','Item 2');
    cy.get("#lista li span").should("contain", "Item 2");
  });
  it("Uso do timeOut", () => {
    //    cy.get("#buttonDelay").click();
    //   cy.get('#novoCampo',{timeout: 1000}).should('not.exist');

    //cy.get("#buttonListDOM").click();
    //cy.wait(5000);
    //cy.get('#lista li span' , { timeout: 30000}).should('contain','Item 2');

    cy.get("#buttonListDOM").click();
    cy.get("#lista li span", { timeout: 30000 }).should("have.length", 1);
    cy.get("#lista li span", { timeout: 30000 }).should("have.length", 2);
  });

  it("Click retry", () => {
    cy.get("#buttonCount").click().should("have.value", "1");
    cy.get("#buttonCount").should("have.value", "11");
    cy.get("#buttonCount").should("have.value", "111");
  });

  it.only("should vs then", () => {
    // cy.get("#buttonListDOM").click();
    // cy.get('#lista li span', { timeout: 30000}).then(el =>{
    ////   expect(el).to.have.length(1)});

    cy.get("#buttonListDOM")
      .click()
      .then((el) => {
        expect(el).to.have.length(1);
        return 2;
      }).and('have.id', 'buttonListDOM');

      cy.get("#buttonListDOM")
      .click()
      .then((el) => {
        expect(el).to.have.length(1);
        return 2;
      }).and('eq',2).and('no.have.id', 'buttonListDOM');
  });
});
