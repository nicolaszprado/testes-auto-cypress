

describe('Fluxo de visualização de Catálogo', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Deve acessar o catálogo a partir da área logada', () => {
        // Clica no link "Catalog" do menu lateral
        cy.contains('a', 'Catalog').click();

        // Valida que está no catálogo
        cy.url().should('include', '/collections');
        cy.contains('Catalog').should('be.visible');
        cy.get('.product').should('exist');
    });
});
