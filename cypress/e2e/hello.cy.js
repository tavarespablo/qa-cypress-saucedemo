describe('Hello Cypress', () => {
    it('opens Google', () => {
        cy.visit('http://www.google.com')
        cy.contains('Google')
    })
});

it('RejectAll', function() {
    cy.visit('www.google.com')
    cy.get('#W0wltc div.QS5gu').click();
    
});