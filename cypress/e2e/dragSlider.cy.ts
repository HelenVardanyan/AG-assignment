describe('Slider interaction', () => {
    it.skip('updates values inside inputs', () => {
        cy.visit('/');

        // Get the slider and input elements
        const sliderEl = cy.get('div.handle');
        const inputEl = cy.get('[data-test="threshold"]');
        // cy.get('div.handle').click()
        //     .trigger('mousedown', { button: 0 })
        //     .trigger('mousemove', { clientX: 200, clientY: 0 })
        //     .trigger('mouseup', { force: true });

        // Select the element you want to move
		//TO DO: Investigate and write a correct test for an Angular slider
        // sliderEl.click({ multiple: true, force: true });
        sliderEl .trigger('mousedown', { button: 0 })
            .trigger('mousemove', { clientX: 100, clientY: 0 })
            .trigger('mouseup', { button: 0 });

        // sliderEl.trigger('mousedown', { which: 1 });
        // cy.wait(100); // Wait for the slider to initialize
        // sliderEl.trigger('mousemove', { clientX: 300, clientY: 300 });
        // sliderEl.trigger('mouseup', { force: true });
        // Get the initial value of the input element
        // inputEl.invoke('val').then((initialValue) => {
        //     // Simulate dragging the slider
        //     sliderEl.trigger('mousedown', { which: 1 });
        //     cy.wait(100); // Wait for the slider to initialize
        //     sliderEl.trigger('mousemove', { clientX: 100, clientY: 0 });
        //     sliderEl.trigger('mouseup', { force: true });
        //
        //     // Get the new value of the input element
        //     inputEl.invoke('val').then((newValue) => {
        //         // Expect the value to have changed
        //         expect(newValue).not.to.equal(initialValue);
        //     });
        // });
    })
});