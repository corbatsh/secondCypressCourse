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
		cy.visit('https://automationteststore.com')
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

	//Get the price of non sale products with $
	it('Calculate total of normal and sale products', () => {
		cy.visit('https://automationteststore.com')
		cy.get('.thumbnail').as('productThumbnail')
		// cy.get('@productThumbnail')
		// 	.find('.oneprice')
		// 	.each(($el, index, $list) => {
		// 		cy.log($el.text())
		// 	})

		//Get the price of non sale products without the $ sign
		cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
		cy.get('@itemPrice').then(($linkText) => {
			let itemPrice = $linkText.split('$')
			let i
			for (i = 0; i < itemPrice.length; i++) {
				cy.log(itemPrice[i])
			}
		})
	})
})
