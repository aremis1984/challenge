describe('Search page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should display the search form', () => {
    cy.get('p').contains('Please enter your email address to see your recent orders.')
      .get('Label').contains('Email')
      .get('input[name=email]').its('length').should('eq', 1)
      .get('button').contains('send')
  });

  it('should add a wrong format email', () => {
    cy.get('input[name=email]').type('test')
      .get('.text-danger').its('length').should('eq', 1)
      .get('.text-danger').contains('Please enter a valid email address')
  })

  it('should add a right format and submit', () => {
    cy.get('input[name=email]').type('test@test.de')
      .get('button').click()
      .url().should('include', '/order-history') 
  })

})