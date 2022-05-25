
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Renato')
    cy.get('#lastName').type('Brito')
    cy.get('#email').type('testeapp@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})