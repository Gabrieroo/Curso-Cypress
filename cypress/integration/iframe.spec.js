///<reference types="cypress"/>

describe("Trabalhando com iFrames", () => {
  it("Deve preencher campo de texto", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.get("#frame1").then((iframe) => {
      const body = iframe.contents().find("body");
      cy.wrap(body)
        .find("#tfield")
        .type("Funciona")
        .should("have.value", "Funciona");
    });

    cy.get("#frame1").then((iframe) => {
      const body = iframe.contents().find("body");
      cy.wrap(body).find("#otherButton").click();
    });
  });
  it.only("Deve acessar iframe diretamente ", () => {
      cy.visit('https://www.wcaquino.me/cypress/frame.html');
      cy.get('#tfield').type('ola mundo');

      cy.get('#otherButton').click();


      cy.on("window:alert", (msg) => {
        console.log(msg);
        expect(msg).to.be.equal("Click OK!");
      });
  });
});
