
describe('Teste', () => {
    it('Deve realizar o login com sucesso', () => {

        cy.visit('https://sauce-demo.myshopify.com/account/login');

        cy.get('#customer_email').type('nicolas.pradorlandini@gmail.com');

        cy.get('#customer_password').type('nicolas10');

        cy.get('input.button[type="submit"][value="Sign In"]').click();



        cy.url().should('include', 'account');

    });

});