import { productElements } from '../elements/products.elements'

class ProductsPage {
    findProduct(product) {
        return cy.contains('.inventory_item_name', product).parents('.inventory_item')
    }
    addToCart(product) {
        this.findProduct(product).find('button').click()
        cy.get(productElements.shoppingCart).click()
    }
    getCartItem() {
        return cy.get(productElements.cartItem)
    }
}

export default new ProductsPage();
