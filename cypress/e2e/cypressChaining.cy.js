describe('Cypress commands and chaining', () => {
	it('Navigating to specific product pages', () => {
		cy.visit('https://automationteststore.com')
		cy.get('a[href*="product/category&path="').contains('Hair Care').click()
		cy.get('a[href*="product/category&path="').contains('Makeup').click()
	})
	it('Validate properties of the Contact Us Page', () => {
		cy.visit('https://automationteststore.com/index.php?rt=content/contact')
		cy.contains('#ContactUsFrm', 'Contact Us Form')
			.find('#field_11')
			.should('contain', 'First name')
	})
})
