describe('Orders list page', () => {
beforeEach(() => {
    // network stub
    cy.server()
})

  it('should display the error page for wrong email and go back', () => {
    cy.visit('/')

    cy.get('input[name=email]').should('be.visible')
      .get('input[name=email]').type('test@test.de')
      .get('button').click()

    cy.url().should('include', '/order-history')
      .get('h4').contains('No orders were found')
      .get('.text-info').contains('test@test.de')
      .wait(2000)
      .get('button').contains('back').click()
  });

  it('should display orders for right email', () => {
    cy.get('input[name=email]').should('be.visible')
      .get('input[name=email]').type('julian@parcellab.com')
      .get('button').click()

    cy.url().should('include', '/order-history')
      .get('h1').contains('Your Orders')
      .get('.order-card').its('length').should('eq', 2)
  })

  it('should click on a card and show order details', () => {
    cy.get('.order-card').eq(0).click()
      .url().should('include', '/order-details') 
  })

})