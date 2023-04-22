describe('Updating inputs makes other inputs update', () => {
    it('Should update other inputs when an input is changed', () => {
        cy.visit('/')

        // Get the input selectors
        const thresholdInput = cy.get('[data-test="threshold"]')
        const multiplierInput = cy.get('[data-test="multiplier"]')
        const winChanceInput = cy.get('[data-test="chance"]')

        // Enter values into the threshold input and assert that it has been updated
        thresholdInput.clear().type('10')
        thresholdInput.should('have.value', '10')

        //Assert that multiplier Input and winChance input have been updated
        multiplierInput.should('have.value', '10')
        winChanceInput.should('have.value', '10')

        // Enter a new value into multiplier Input and assert that it has been updated
        multiplierInput.clear().type('40')
        multiplierInput.should('have.value', '40')

        // Assert that threshold input and winChance Input have been updated
        thresholdInput.should('have.value', '40')
        winChanceInput.should('have.value', '40')

        // Enter a new value into winChance Input and assert that it has been updated
        winChanceInput.clear().type('50')
        winChanceInput.should('have.value', '50')

        // Assert that threshold input and multiplier input have been updated
        thresholdInput.should('have.value', '50')
        multiplierInput.should('have.value', '50')
    })
})