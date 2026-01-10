import { loginElements } from "../elements/login.elements";

class LoginPage {
    visit() {
        cy.visit('/');
    }
    fillUsername(username) {
        cy.get(loginElements.username).clear().type(username);
    }
    fillPassword(password) {
        cy.get(loginElements.password).clear().type(password);
    }
    submit() {
        cy.get(loginElements.loginButton).click();
    }
    assertLoggedIn() {
        cy.url().should('include', '/inventory.html');
    }
}

module.exports = new LoginPage();
