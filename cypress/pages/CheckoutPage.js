class CheckoutPage {
    proceedtoCheckout() {
        cy.get('[data-test=checkout]').click()
    }
    
    fillForm(firstname, lastname, postalcode) {
        cy.get('#first-name').clear().type(firstname);
        cy.get('#last-name').clear().type(lastname);
        cy.get('#postal-code').clear().type(postalcode);
    }

    continue() {
        cy.get('#continue').click();
        cy.url().should('include', '/checkout-step-two.html')
    }
}

export default new CheckoutPage();