import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CheckoutPage from '../pages/CheckoutPage';
import FinishPage from '../pages/FinishPage';

Cypress.Commands.add('login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submit();

        
    // verification
    cy.get('[data-test=title]').should('be.visible')
});

Cypress.Commands.add('purchase', ({product}) => {
    ProductsPage.findProduct(product);
    ProductsPage.addToCart(product);
})

Cypress.Commands.add('checkoutInfo', ({ firstname, lastname, zip }) => {
    CheckoutPage.fillForm(firstname, lastname, zip);
    CheckoutPage.continue();
})

Cypress.Commands.add('finish', () => {
    FinishPage.finish()
})