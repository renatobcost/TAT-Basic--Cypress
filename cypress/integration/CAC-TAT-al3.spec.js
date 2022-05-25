/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    
    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })   
    
    it('seleciona um produto aleatório no select', function() {
        cy.get('select option')
          .its('length', {log: false}).then(n=> {
              cy.get('select').select(Cypress._.random(n - 1))
          })
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product').select(1).should('have.value', 'blog')
    })

})
  