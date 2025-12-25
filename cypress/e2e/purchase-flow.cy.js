describe('Purchase flow completed', () => {
    beforeEach(() => {
        // pre-condition
        cy.login();
    })

    it ('should complete a purchase flow', () => {
        cy.purchase({
            product: 'Sauce Labs Backpack'
        });

        cy.get('#checkout').click();

        cy.fixture('checkout').then((data) => {
            cy.checkoutInfo(data)
        })

        cy.finish();
    })
})