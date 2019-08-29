describe('Authors Haven Frontend Pages', () => {
  it('should show novel of the week title', () => {
    cy.visit('/');
    cy.get('#weekNovel')
      .find('h2')
      .should('have.text', 'Novel of the Week');
  });

  it('should show membership title', () => {
    cy.visit('/');
    cy.get('#membership')
      .find('h2')
      .should('have.text', 'Membership');
  });
});
