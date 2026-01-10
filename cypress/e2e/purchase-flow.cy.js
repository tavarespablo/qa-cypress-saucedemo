//purchase-flow.cy.js
import FinishPage from '../pages/FinishPage';
import { productElements } from '../elements/products.elements';

describe('Purchase flow completed', () => {
    it ('should complete a purchase flow', () => {

        const product = 'Sauce Labs Backpack'

        cy.fixture('checkout').then((data) => {
            cy.login()

            cy.purchase({ product });

            // purchase assert
            cy.get(productElements.itemName).should('contain', product)            
            cy.get(productElements.itemQt).should('have.length', 1)

            cy.checkoutInfo(data)
            cy.finish();
            FinishPage.successMessage().should('be.visible')
            })
    })
})