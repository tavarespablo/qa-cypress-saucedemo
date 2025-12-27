import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CheckoutPage from '../pages/CheckoutPage';
import FinishPage from '../pages/FinishPage';

Cypress.Commands.add('login', () => {
    LoginPage.visit();
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.submit();
});

Cypress.Commands.add('purchase', ({product}) => {
    ProductsPage.findProduct(product);
    ProductsPage.addToCart(product);
    ProductsPage.getCartItem();
})

Cypress.Commands.add('checkoutInfo', ({ firstname, lastname, zip }) => {
    CheckoutPage.proceedtoCheckout();
    CheckoutPage.fillForm(firstname, lastname, zip);
    CheckoutPage.continue();
})

Cypress.Commands.add('finish', () => {
    FinishPage.finish();
})