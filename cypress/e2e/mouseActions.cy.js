describe('Test mouse actions', () => {
	it('Scroll element into view', () => {
		cy.visit('http://www.webdriveruniversity.com')
		cy.get('#actions')
			.scrollIntoView()
			.invoke('removeAttr', 'target')
			.click({ force: true })
	})

	it('Should be able to drag and drop a draggable item', () => {
		cy.visit('http://www.webdriveruniversity.com')
		cy.get('#actions')
			.scrollIntoView()
			.invoke('removeAttr', 'target')
			.click({ force: true })

		cy.get('#draggable')
			.trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
			.trigger('mousemove', { which: 1, pageX: 900, pageY: 200 })
			.trigger('mouseup', { force: true })
	})

	it('Should be able to perform double mouse click', () => {
		cy.visit('http://www.webdriveruniversity.com')
		cy.get('#actions')
			.scrollIntoView()
			.invoke('removeAttr', 'target')
			.click({ force: true })

		cy.get('#double-click').dblclick()
	})

	it('Should be able to perform double mouse click on a given element', () => {
		cy.visit('http://www.webdriveruniversity.com')
		cy.get('#actions')
			.scrollIntoView()
			.invoke('removeAttr', 'target')
			.click({ force: true })

		cy.get('#click-box')
			.trigger('mousedown', { which: 1 })
			.then(($element) => {
				expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
			})
	})
})
