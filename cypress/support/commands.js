import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', () => {
    cy.session('standard_user', () => {
        LoginPage.visit();
        LoginPage.fillUsername('standard_user');
        LoginPage.fillPassword('secret_sauce');
        LoginPage.submit();
        LoginPage.assertLoggedIn();
    });
});