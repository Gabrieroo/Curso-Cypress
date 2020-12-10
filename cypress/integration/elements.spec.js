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
  it("Campos de texto", () => {
    const mail = `user${Date.now()}@mail.com`;

    cy.get("#formNome").type(mail);
    cy.get("#formNome");

    cy.get("#elementosForm\\:sugestoes")
      .type("lorem inpusu sahfguhsaug hshaguhashghsa gusaugusuaghu sagosagashg")
      .should(
        "have.value",
        "lorem inpusu sahfguhsaug hshaguhashghsa gusaugusuaghu sagosagashg"
      );

    cy.get(
      "#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input"
    ).type("teste sagjsajijgasjig");

    cy.get("[data-cy=dataSobrenome]")
      .type("Sobre nomes{backspace}{backspace}")
      .should("have.value", "Sobre nom");

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("Erro{selectall}acerto", { delay: 100 })
      .should("have.value", "acerto");
  });

  it("Radio button", () => {
    cy.get("#formSexoFem").click().should("be.checked");
    cy.get("#formSexoMasc").should("not.be.checked");
    cy.get("[name='formSexo']").should("have.length", 2);
  });
  it("CheckBox", () => {
    cy.get("#formComidaPizza").click().should("be.checked");
    cy.get("[name=formComidaFavorita]").click({ multiple: true });
    cy.get("#formComidaCarne").should("be.checked");
    cy.get("#formComidaPizza").should("not.be.checked");
  });
  it("Combo", () => {
    cy.get("[data-test=dataEscolaridade]")
      .select("2graucomp")
      .should("have.value", "2graucomp");
    cy.get("[data-test=dataEscolaridade]").should(
      "not.be.value",
      "1grauincomp"
    );
    cy.get("[data-test=dataEscolaridade]").should(
      "not.have.value",
      "1graucomp"
    );
    cy.get("[data-test=dataEscolaridade]").should(
      "not.have.value",
      "2grauincomp"
    );
    cy.get("[data-test=dataEscolaridade]").should("not.have.value", "superior");
    cy.get("[data-test=dataEscolaridade]").should(
      "not.have.value",
      "especializacao"
    );
    cy.get("[data-test=dataEscolaridade]").should("not.have.value", "mestrado");
    cy.get("[data-test=dataEscolaridade]").should(
      "not.have.value",
      "Doutorado"
    );
  });
  it.only("Combo multiplo", () => {
    cy.get("[data-testid=dataEsportes]").select(["natacao", "Corrida", "nada"]);
    cy.get('[value="natacao"]').should("be.selected");
    cy.get('[value="futebol"]').should("not.be.selected");
    cy.get('[value="Corrida"]').should("be.selected");
    cy.get('[value="Karate"]').should("not.be.selected");
    cy.get('[value="nada"]').should("be.selected");
  });
});
