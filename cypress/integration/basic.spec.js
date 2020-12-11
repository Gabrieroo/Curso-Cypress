///<reference types="cypress"/>

describe("Cypress basics", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });
  it.only("Visitar pagina e fazer uma assertiva no titulo", () => {
    let syncTitle;
    cy.pause();

    cy.title()
      .should("to.be.equal", "Campo de Treinamento")
      .and("contain", "Campo")
      .debug();



      cy.title().then( title =>{
        syncTitle = title;
        console.log(title);
      })

      cy.title().should( title =>{
        console.log(title);
      })

      cy.get(':nth-child(3) > :nth-child(6) > input').then(temp => {
        temp.val(syncTitle);
      });

      cy.get('#elementosForm\\:sugestoes').then(temp =>{
        cy.wrap(temp).type(syncTitle);
      })

      cy.title().then( title =>{
        cy.get('[data-cy=dataSobrenome]').type(title);
      })
  });

  it("Encontrar e interagir com um elemento", () => {
    cy.get("#buttonSimple").should("have.value", "Clique Me!");
    cy.get("#buttonSimple").click();
    cy.get("#buttonSimple").should("have.value", "Obrigado!");
  });
});
