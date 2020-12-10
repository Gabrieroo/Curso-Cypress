///<reference types="cypress"/>

describe("Elementos basicos", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });
  it("Texto", () => {
    cy.get("body").should("contain", "Cuidado");
    cy.get("span").should("contain", "Cuidado");
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });
  it("Links", () => {
    cy.get("body").should("contain", "Voltou!");

    cy.get("#resultado").should("have.text", "Status: Nao cadastrado");
    cy.get('[href="#"]').click();
    cy.get("#resultado").should("have.text", "Voltou!");

    cy.reload();
    cy.contains("Voltou").click();
    cy.get("#resultado").should("have.text", "Status: Nao cadastrado");
  });
  it.only('Campos de texto', () => {

    cy.get('#formNome').type('Ola mundo');
    cy.get('#formNome').should('have.value', 'Ola mundo');

    cy.get('#elementosForm\\:sugestoes').type('lorem inpusu sahfguhsaug hshaguhashghsa gusaugusuaghu sagosagashg').should('have.value', 'lorem inpusu sahfguhsaug hshaguhashghsa gusaugusuaghu sagosagashg');
    
    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('teste sagjsajijgasjig');

    cy.get('[data-cy=dataSobrenome]').type('Sobre nomes{backspace}{backspace}').should('have.value', 'Sobre nom');

    cy.get('#elementosForm\\:sugestoes').clear().type('Erro{selectall}acerto', {delay: 100}).should('have.value', 'acerto');
  });
});