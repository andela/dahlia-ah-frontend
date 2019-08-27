describe('Authors Haven Frontend Pages', () => {
  it('should show welcome message', () => {
    cy.visit('/');
    cy.get('h1')
      .should('have.text', 'Authors Haven');
  });
  it('Display text of Routes', () => {
    cy.visit('/hello');
    cy.get('h1')
      .should('have.text', 'Hello AnDahlian');
    cy.get('h3')
      .should('have.text', 'You Rock!!!');
  });
});
