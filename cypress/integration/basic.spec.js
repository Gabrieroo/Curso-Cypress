///<reference types="cypress"/>

describe("Cypress basics", () => {
  it("Visitar pagina e fazer uma assertiva no titulo", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.pause();

    cy.title()
      .should("to.be.equal", "Campo de Treinamento")
      .and("contain", "Campo")
      .debug();
  });

  it("Encontrar e interagir com um elemento", () => {
    cy.get("#buttonSimple").should("have.value", "Clique Me!");
    cy.get("#buttonSimple").click();
    cy.get("#buttonSimple").should("have.value", "Obrigado!");
  });
});
