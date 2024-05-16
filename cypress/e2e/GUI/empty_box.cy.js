describe('Exibição de mensagem de clientes ausentes', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/customers?page=1&limit=10&size=All', { statusCode: 200, body: `{customers:[]}` }).as('getCustomers');
    });

    it('Deve exibir a mensagem de "No customers available." quando não há clientes', () => {
      cy.visit('/');

      cy.get('span').should('exist');

      cy.contains('No customers available.').should('exist');
    });
  });