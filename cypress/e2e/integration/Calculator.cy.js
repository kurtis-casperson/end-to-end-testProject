describe('calculator', () => {
  it('correctly handles normal calculations', () => {
    cy.visit('/')
    // can pass a selector and the text or just the text
    // might throw an error if only passing the text
    cy.getCalculatorBotton('5').click()
    // use the should command to verify the text is the expected value
    cy.get('.primary-operand').should('have.text', '5')
    cy.getCalculatorBotton('+').click()
    cy.getCalculatorBotton('6').click()
    cy.getCalculatorBotton('=').click()
    cy.get('.primary-operand').should('have.text', '11')
  })
})
