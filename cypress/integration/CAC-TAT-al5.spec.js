/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  
    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.visit('./src/index.html')

        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')
    })

})
  