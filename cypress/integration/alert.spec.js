///<reference types="cypress"/>

describe("Alerts", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });
  it("Alert", () => {
    cy.get("#alert").click();
    cy.on("window:alert", (msg) => {
      console.log(msg);
      expect(msg).to.be.equal("Alert Simples");
    });
  });
  it.only('teste command alert', () => {
    cy.clickAlert('#alert', 'Alert Simples')
  });
  it("Alert com mock", () => {
    const stub = cy.stub().as("alerta");

    cy.on("window:alert", stub);

    cy.get("#alert")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Alert Simples");
      });
  });

  it("Confirm", () => {
    cy.get("#confirm").click();

    cy.on("window:confirm", (msg) => {
      console.log(msg);
      expect(msg).to.be.equal("Confirm Simples");
    });
  });

  it("deny", () => {
    cy.get("#confirm").click();

    cy.on("window:confirm", (msg) => {
      console.log(msg);
      expect(msg).to.be.equal("Confirm Simples");
      return false;
    });

    cy.on("window:alert", (msg) => {
      console.log(msg);
      expect(msg).to.be.equal("Negado");
    });
  });

  it("prompt", () => {
    // cy.get('#prompt').click();

    // cy.on('window:prompt', msg => {
    //     console.log(msg);
    //     expect(msg).to.be.equal('Confirm Simples');
    // })

    // // cy.on('window:alert', msg => {
    // //     console.log(msg);
    // //     expect(msg).to.be.equal('Confirmado');
    // // })
    cy.window()
      .then((win) => {
        cy.stub(win, "prompt").returns("42");
      })
      .as("prompt");

    cy.get("#prompt").click();
  });

  it("Desafio", () => {
    const stub = cy.stub().as("alerta");

    cy.on("window:alert", stub);

    cy.get("#formCadastrar").click();

    cy.get("#alert")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Nome eh obrigatorio");
      });
    cy.get("#formNome").type("Teste usuario");

    cy.get("#formCadastrar").click();
    cy.get("#alert")
      .click()
      .then(() => {
        expect(stub.getCall(2)).to.be.calledWith("Sobrenome eh obrigatorio");
      });

    cy.get("[data-cy=dataSobrenome]").type("teste sobrenome");

    cy.get("#formCadastrar").click();

    cy.get("#alert")
      .click()
      .then(() => {
        expect(stub.getCall(4)).to.be.calledWith("Sexo eh obrigatorio");
      });

    cy.get("#formSexoMasc").click();
    
    cy.get("#formCadastrar").click();
    cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado!");
  });

});
