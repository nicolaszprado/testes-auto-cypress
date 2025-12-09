describe('Fluxo de adicionar produto ao carrinho e checkout', () => {
    beforeEach(() => {
        cy.login();
        cy.contains('a', 'Catalog').click();
    });

    it('Deve adicionar um produto ao carrinho e ir para checkout', () => {
        // abre o primeiro produto da lista
        cy.get('a.animated.fadeInUpBig').first().click();

        // clica em Add to Cart e aguarda a requisição AJAX completar
        cy.intercept('POST', '/cart/add.js').as('addToCart');
        cy.get('#add').click();
        cy.wait('@addToCart');

        // pequeno delay para UI atualizar após AJAX
        cy.wait(1000);

        // vai direto para o carrinho
        cy.visit('/cart');

        // valida que está no carrinho
        cy.url().should('include', '/cart');

        // clica no botão Check Out
        cy.get('input#checkout').click();

        // valida que foi para o checkout
        cy.url().should('include', '/checkout');
    });
});
