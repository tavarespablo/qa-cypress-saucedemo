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

/*import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CheckoutPage from '../pages/CheckoutPage'
import FinishPage from '../pages/FinishPage'

describe('Purchase Flow', () => {

    it('should complete a purchase successfully', () => {

        cy.fixture('checkout').then((data) => {

            cy.login()

            ProductsPage.addToCart('Sauce Labs Backpack')

            // Assert de negócio → pertence ao teste
            cy.get('.cart_item .inventory_item_name')
              .should('contain', 'Sauce Labs Backpack')

            cy.get('.cart_item').should('have.length', 1)

            CheckoutPage.fillForm(data)
            CheckoutPage.continue()

            FinishPage.finish()

            // Assert final de sucesso → pertence ao teste
            cy.url().should('include', '/checkout-complete.html')
            FinishPage.successMessage().should('be.visible')

        })
    })
})
git add .
git commit -m "Refactor POM: remove business asserts and move validations to spec"
git push

*/