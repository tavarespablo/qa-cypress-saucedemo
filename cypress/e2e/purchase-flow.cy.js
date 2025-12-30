//purchase-flow.cy.js
import FinishPage from '../pages/FinishPage'
describe('Purchase flow completed', () => {
    it ('should complete a purchase flow', () => {

        const product = 'Sauce Labs Backpack'

        cy.fixture('checkout').then((data) => {
            cy.login()

            cy.purchase({ product });

            // purchase assert
            cy.get('.cart_item .inventory_item_name').should('contain', product)            
            cy.get('.cart_item').should('have.length', 1)

            cy.checkoutInfo(data)
            cy.finish();
            FinishPage.successMessage().should('be.visible')
            })
    })
})