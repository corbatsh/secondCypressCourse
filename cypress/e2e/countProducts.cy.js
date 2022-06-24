describe('Count products available on the homepage', () => {
	it('Validate if available number of products equals 16', () => {
		cy.visit('https://automationteststore.com')

		cy.get('.thumbnail').each(($el, index, $list) => {
			if ($el.last()) {
				cy.wrap(index).as('lastProduct')
			}
		})
		cy.get('@lastProduct').should('eq', 15)
		// OR

		cy.get('.thumbnail').should('have.length', 16)
	})
	it('Should validate titles of the links in cart', () => {
		cy.get('.thumbnail > div.pricetag.jumbotron > a').should(
			'have.attr',
			'title',
			'Add to Cart'
		)
		// OR

		cy.get('.thumbnail')
			.find('.productcart')
			.invoke('attr', 'title')
			.should('include', 'Add to Cart')
	})
})
