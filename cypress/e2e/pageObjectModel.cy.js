import homepage_PO from '../support/pageObjects/webdriver-uni/Homepage_PO'
const homepage = new homepage_PO()
describe('Test POM with homepage', () => {
	before(() => {
		cy.fixture('example').then((data) => {
			const name = data.name
		})
	})

	beforeEach(() => {
		homepage.visitHomepage()
	})

	it('should click ContactUs button', () => {
		homepage.clickOn_ContactUs_Button()
	})
})
