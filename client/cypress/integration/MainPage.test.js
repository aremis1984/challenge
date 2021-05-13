const serverUrl = Cypress.env('serverUrl')

describe('todo app', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should display the search form', () => {
    cy.get('p').contains('Please enter your email address to see your recent orders.')
    cy.get('Label').contains('Email')
    cy.get('input[name=email]').its('length').should('eq', 1)
    cy.get('button').contains('send')
  });

  it('should add a wrong format email', () => {
    cy.get('input[name=email]').type('test')
    cy.get('.text-danger').its('length').should('eq', 1)
    cy.get('.text-danger').contains('Please enter a valid email address')
  })

  it('should add a right format and submit', () => {
    cy.get('input[name=email]').type('test@test.de')
    cy.get('button').click()
    cy.url().should('include', '/order-history') 
  })

})