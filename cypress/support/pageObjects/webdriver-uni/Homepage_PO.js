class Homepage_PO {
	visitHomepage() {
		cy.visit(Cypress.env('webdriveruni_homepage'))
	}

	clickOn_ContactUs_Button() {
		cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
		cy.url().should('include', '/Contact-Us/contactus.html')
	}
}
export default Homepage_PO
