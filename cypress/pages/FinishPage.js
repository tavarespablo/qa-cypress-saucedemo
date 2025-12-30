class FinishPage {
    finish() {
        cy.get('#finish').click();
    }
    successMessage() {
        return cy.get('[data-test=complete-header]');
    }
}

export default new FinishPage();