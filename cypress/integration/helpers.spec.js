///<reference types="cypress"/>



describe("Helpers", () => {
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });
  beforeEach(() => {
    cy.reload;
  });

  it('Wrap', () => {
      const obj = {nome : 'User', idade: 20};
      expect(obj).to.have.property('nome');
      //obj.should('have.property', 'nome');
      cy.wrap(obj).should('have.property', 'nome');

     // cy.get('#formNome').then(nome => {
      //    cy.wrap(nome).type('Funciona');
     // });

     const promisse = new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(10);
         }, 500)
     })

     cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro botao'));
     //promisse.then(num => console.log(num));
     cy.wrap(promisse).then(ret => console.log(ret));
     cy.get('#buttonList').then(() => console.log('Encontrei o segundo botao'));

     cy.wrap(1).then(num => {
         return 2
     }).should('be.equal', 2)
  });

  it.only('Its', () => {
    const obj = {nome : 'User', idade: 20};
    cy.wrap(obj).should('have.property', 'nome', 'User');
    cy.wrap(obj).its('nome').should('be.equal', 'User');

    const obj2 = {nome : 'User', idade: 20, endereco: {rua: 'dos bobos'}};

   // cy.wrap(obj2).its('endereco').should('be.equal', 'dos bobos');
    cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos');
    cy.wrap(obj2).its('endereco.rua').should('be.equal', 'dos bobos');

    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.title().its('length').should('be.equal',20);

  });
});
