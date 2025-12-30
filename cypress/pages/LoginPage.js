class LoginPage {
    visit() {
        cy.visit('/');
    }
    fillUsername(username) {
        cy.get('#user-name').clear().type(username);
    }
    fillPassword(password) {
        cy.get('#password').clear().type(password);
    }
    submit() {
        cy.get('#login-button').click();
    }
    assertLoggedIn() {
        cy.url().should('include', '/inventory.html');
    }
}

module.exports = new LoginPage();
