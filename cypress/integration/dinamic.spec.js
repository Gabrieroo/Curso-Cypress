///<reference types="cypress"/>

describe("teste dinamico", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });
  const foods = ["Carne", "Frango", "Pizza", "Vegetariano"];
  foods.forEach((food) => {
    it(`Cadastro com comida ${food}`, function () {
      cy.get("#formNome").type("Usuario");

      cy.get("#formSobrenome").type("Qualquer");

      cy.get(`[name=formSexo][value=F`).click();

      cy.xpath(
        `//label[contains(., '${food}')]/preceding-sibling::input`
      ).click();

      cy.get("#formEscolaridade").select("Superior");

      cy.get("#formEsportes").select("Corrida");

      cy.get("#formCadastrar").click();

      cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado!");
    });
  });
  it.only("Deve selecionar todos usando o each", () => {
    cy.get("#formNome").type("Usuario");

    cy.get("#formSobrenome").type("Qualquer");

    cy.get(`[name=formSexo][value=F`).click();

    cy.get("[name=formComidaFavorita]").each(temp => {
        // temp.click();
        if(temp.val() !== 'vegetariano')
        cy.wrap(temp).click()
    });

    cy.get("#formEscolaridade").select("Superior");

    cy.get("#formEsportes").select("Corrida");

    cy.get('#formCadastrar').click();

    cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado!");


  });
});
