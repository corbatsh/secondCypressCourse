describe('Test Datepicker via webdriveruni', () => {
	it('Select date from the datepicker', () => {
		cy.visit('http://www.webdriveruniversity.com')
		cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
	})
})
