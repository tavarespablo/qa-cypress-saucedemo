import { finish } from '../elements/finish.elements'

class FinishPage {
    finish() {
        cy.get(finish.confirmOrder).click();
    }
    successMessage() {
        return cy.get(finish.checkoutComplete);
    }
}

export default new FinishPage();