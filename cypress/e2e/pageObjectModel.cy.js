import Contact_us_PO from '../support/pageObjects/webdriver-uni/Contact_us_PO'
import Homepage_PO from '../support/pageObjects/webdriver-uni/Homepage_PO'

describe('Test POM with homepage', () => {
	before(() => {
		cy.fixture('example').then((data) => {
			globalThis.data = data
		})
	})

	beforeEach(() => {
		const homepage = new Homepage_PO()
		homepage.visitHomepage()
		homepage.clickOn_ContactUs_Button()
	})

	it('should be able to submit a successful submission via contact us form', () => {
		const contact_Us = new Contact_us_PO()
		contact_Us.contactForm_Submission(
			data.first_name,
			data.last_name,
			data.email,
			data.body,
			'h1',
			'Thank You for your Message'
		)
	})
})
