describe('Orders details page', () => {
beforeEach(() => {
    // network stub
    cy.server()
    cy.visit('/')
    cy.get('input[name=email]').should('be.visible')
        .get('input[name=email]').type('julian@parcellab.com')
        .get('button').click()
    cy.get('.order-card').eq(0).click()
    cy.url().should('include', '/order-details')
})

  it('should display order card details', () => {
    cy.get('[data-test="order-data"]').should('have.length', 1)
        .get('[data-test="order-data"] p').contains('ORD-123-2018')
        
        .get('[data-test="order-card"]').should('have.length', 1)
        .get('[data-test="order-card"] p').contains('00340000161200000001')
        
        .get('[data-test="articles-card"]').should('have.length', 1)
        .get('[data-test="article"]').should('have.length', 2)
        .get('[data-test="article"]').eq(0).contains('1')
        .get('[data-test="article"]').eq(0).contains('2')

  })

  it('should go to do a new search', () => {
    cy.get('a').should('have.length', 2)
    cy.get('a').eq(1).contains('new search')
        .click()
    cy.get('p').contains('Please enter your email address to see your recent orders.')
      .get('Label').contains('Email')
      .get('input[name=email]').its('length').should('eq', 1)
      .get('button').contains('search')
  })

})