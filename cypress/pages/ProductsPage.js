class ProductsPage {
    findProduct(product) {
        return cy.contains('.inventory_item_name', product).parents('.inventory_item')
    }
    addToCart(product) {
        this.findProduct(product).find('button').click()
        cy.get('#shopping_cart_container').click()
    }
    getCartItem() {
        return cy.get('.cart_item')
    }
}

export default new ProductsPage();
