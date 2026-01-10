import { checkout } from '../elements/checkout.elements'

class CheckoutPage {
    proceedtoCheckout() {
        cy.get(checkout.proceed).click()
    }
    
    fillForm(firstname, lastname, postalcode) {
        cy.get(checkout.firstName).clear().type(firstname);
        cy.get(checkout.lastName).clear().type(lastname);
        cy.get(checkout.postalCode).clear().type(postalcode);
    }

    continue() {
        cy.get(checkout.finishForm).click();
        cy.url().should('include', '/checkout-step-two.html')
    }
}

export default new CheckoutPage();