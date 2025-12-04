import LoginPage from '../pages/LoginPage';

describe('Login Flow', () => {
    it('should login using cy.session()', () => {
        cy.login();
    })
})