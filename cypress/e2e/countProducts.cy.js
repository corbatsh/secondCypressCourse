describe('Count products available on the homepage', () => {
	it('Validate if available number of products equals 16', () => {
		cy.visit('https://automationteststore.com')

		cy.get('.thumbnail').each(($el, index) => {
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
		cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

		let itemsTotal = 0
		cy.get('@itemPrice').then(($linkText) => {
			let nonSaleItemsPriceTotal = 0
			let nonSaleItemPrice = $linkText.split('$')
			for (let i = 0; i < nonSaleItemPrice.length; i++) {
				cy.log(nonSaleItemPrice[i])
				nonSaleItemsPriceTotal += Number(nonSaleItemPrice[i])
			}
			itemsTotal += nonSaleItemsPriceTotal
			cy.log('Non sale price items total: ' + nonSaleItemsPriceTotal)
		})

		cy.get('@saleItemPrice')
			.then(($linkText) => {
				let saleItemsPriceTotal = 0
				let saleItemPrice = $linkText.split('$')
				for (let j = 0; j < saleItemPrice.length; j++) {
					cy.log(saleItemPrice[j])
					saleItemsPriceTotal += Number(saleItemPrice[j])
				}
				itemsTotal += saleItemsPriceTotal
				cy.log('Sale price items total: ' + saleItemsPriceTotal)
			})
			.then(() => {
				cy.log('All items price total: ' + itemsTotal)
				expect(itemsTotal).to.equal(648.5)
			})
	})
})
