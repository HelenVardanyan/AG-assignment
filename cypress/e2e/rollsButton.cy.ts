describe('Updating Rolls count in Spray mode updates button text', () => {
    it('should update button text on updating rolls count (Spray  mode)', () => {
        cy.visit('/');
        cy.get('[data-test="mode-batch"]').click();
        cy.get('[data-test="rolls-per-click"]').should('have.value', '2');
        cy.get('[data-test="rolls-per-click"]').clear().type('45');
        cy.get('button[type="submit"]').should('have.text',' ROLL 45 TIMES ');
    })
});