describe('Alternância de Tema', () => {
    it('Deve alternar o tema para modo escuro e persistir no armazenamento local', () => {
      cy.visit('/')

      cy.get('#theme-toggle-button').should('be.visible')

      cy.get('#theme-toggle-button').click()

      cy.get('body').should('have.attr', 'data-theme', 'dark');

      cy.reload();
      cy.getAllLocalStorage()
        .then((result) => {
         const theme = result[Cypress.config('baseUrl')].theme
         expect(theme).to.equal('dark')
  })
    });

    it('Deve alternar o tema para modo claro e persistir no armazenamento local', () => {
      cy.window().then((win) => {
        win.localStorage.setItem('theme', 'dark');
      });

      cy.visit('/')

      cy.get('#theme-toggle-button').click()

      cy.get('body').should('have.attr', 'data-theme', 'light');

      cy.reload();
      cy.getAllLocalStorage()
        .then((result) => {
         const theme = result[Cypress.config('baseUrl')].theme
         expect(theme).to.equal('light')
      });
    });
  });
