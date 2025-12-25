class ProductsPage {
    findProduct(product) {
        return cy.contains('.inventory_item_name', product).parents('.inventory_item')
    }
    addToCart(product) {
        this.findProduct(product).find('button').click()

        cy.get('#shopping_cart_container').click()

        cy.get('.cart_item .inventory_item_name').should('contain', product)
        cy.get('.cart_item').should('have.length', 1)
    }
}

export default new ProductsPage();
