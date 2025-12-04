describe('Hello Cypress', () => {
    it('opens Google', () => {
        cy.visit('http://www.saucedemo.com')
        cy.get('[data-test="username"]').click();
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').click();
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    })
});

it('RejectAll', function() {
    cy.visit('www.google.com')
    cy.get('#W0wltc div.QS5gu').click();
    
});