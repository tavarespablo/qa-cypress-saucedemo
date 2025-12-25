class FinishPage {
    finish() {
        cy.get('#finish').click();
        cy.url().should('include', '/checkout-complete.html')
        cy.get('[data-test=complete-header]').should('be.visible')
    }
}

export default new FinishPage();