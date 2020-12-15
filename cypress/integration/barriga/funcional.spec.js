///<reference types="cypress"/>

describe("Testes funcionais de uma aplicacao real", () => {
    before(() => {
      cy.visit("https://barrigareact.wcaquino.me", { timeout: 300000 });
    });
  
    it('Cadastrar conta', () => {
  
      cy.url({ timeout: 300000 }).should('include', 'barrigareact.wcaquino.me/login');
  
  
      cy.get('[data-test="email"]').type('gabriel@teste.com').should('have.value', 'gabriel@teste.com');
      cy.get('[data-test="passwd"]').type('123456').should('have.value', '123456');
      cy.get('.btn',  { timeout: 300000 }).click();
  
      cy.url({ timeout: 300000 }).should('include', 'barrigareact.wcaquino.me');
  
      cy.get('.dropdown-toggle', { timeout: 300000 }).click();
      cy.get('[href="/contas"]', { timeout: 300000 }).click();
  
      cy.url({ timeout: 300000 }).should('include', 'barrigareact.wcaquino.me/contas');
  
      cy.get('h2', { timeout: 300000 }).should('have.text', 'Contas');
  
      cy.get('.form-control',{ timeout: 300000 }).type('Joao barbosa').should('have.value', 'Joao barbosa');
  
      const stub = cy.stub().as("alerta");
  
      cy.get('.btn',{ timeout: 300000 }).click();
  
  
  
      
  
      cy.on("window:alert", stub);
  
      cy.get("#alert",{ timeout: 300000 })
        .click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith("Alert Simples");
        });
        
    });
  
  
  });
  