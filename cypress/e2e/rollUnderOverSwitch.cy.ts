describe('Roll under/over switch', () => {
    it('should changes the label value', () => {
        cy.visit('/');
        const switchEl = cy.get('[data-test="choice-switch"]');
        cy.contains('Under');
        switchEl.click();
        cy.contains('Over');
        switchEl.click();
        cy.contains('Under');
    })
});