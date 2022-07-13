describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('correctly handles normal calculations', () => {
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

  it('correctly handles all clear', () => {
    cy.getCalculatorBotton('1').click()
    cy.getCalculatorBotton('+').click()
    cy.getCalculatorBotton('2').click()
    cy.getCalculatorBotton('AC').click()
    cy.get('.primary-operand').should('have.text', '0')
  })

  it('correctly handles delete', () => {
    cy.getCalculatorBotton('1').click()
    cy.getCalculatorBotton('+').click()
    cy.getCalculatorBotton('2').click()
    cy.getCalculatorBotton('DEL').click()
    cy.get('.primary-operand').should('have.text', '0')
    cy.getCalculatorBotton('AC').click()
  })
})
