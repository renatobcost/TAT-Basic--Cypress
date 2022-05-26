/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
   
    it('Desafio: encontrar o gato escondido', function() {
        cy.visit('./src/index.html')

        cy.get('#cat')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')          
          //.invoke('hide')
          //.should('not.be.visible')    
        
        cy.get('#title')
          .invoke('text', 'Desafio final do curso')

        cy.get('#subtitle')
          .invoke('text', 'Gato encontrado')
    })
    
})
  