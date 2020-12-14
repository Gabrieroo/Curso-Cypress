///<reference types="cypress"/>

describe("Trabalhando com popup", () => {
  it("Deve testar popup diretamente ", () => {
    cy.visit("https://www.wcaquino.me/cypress/frame.html");
    cy.get("#tfield").type("ola mundo");

    cy.get("#otherButton").click();

    cy.on("window:alert", (msg) => {
      console.log(msg);
      expect(msg).to.be.equal("Click OK!");
    });
  });
  it.only("Deve verificar se o popup foi invocado", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.window().then((win) => {
      cy.stub(win, "open").as("winOpen");
    });
    cy.get("#buttonPopUp").click();
    cy.get("@winOpen").should("be.called");
  });
});
describe("Com links", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  it("Checando popup url", () => {
    cy.contains("Popup2")
      .should("have.prop", "href")
      .and("equal", "https://www.wcaquino.me/cypress/frame.html");
  });
  it('Acessar popup dinamicamente ', () => {
    cy.contains("Popup2").then(temp => {
      const href = temp.prop('href');
      cy.visit(href);
    })
    cy.get('#tfield').type('Ola mundo');
  });
  it.only('Forcar o link a abrir na mesma pagina', () => {
    cy.contains("Popup2").invoke('removeAttr','target').click();
    cy.get('#tfield').type('Ola mundo');
  });
});
