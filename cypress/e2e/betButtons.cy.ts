describe('Dice game', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.reload();
    })

    it('should be able to place a bet using +1 button', () => {
        cy.get('[data-test="plus-1"]').click({force: true});
        cy.get('#mat-input-4').should('have.value', '2')
    })

    it('should be able to place a bet using +10 button', () => {
        cy.get('[data-test="plus-10"]').click({force: true});
        cy.get('#mat-input-4').should('have.value', '11')
    })

    it('should be able to place a bet using 1/2 button', () => {
        cy.get('[data-test="1-div-2"]').click({force: true});
        cy.get('#mat-input-4').should('have.value', '0.5')
    })

    it('should be able to place a bet using X2 button', () => {
        cy.get('[data-test="x2"]').click({force: true});
        cy.get('#mat-input-4').should('have.value', '2')
    })
})