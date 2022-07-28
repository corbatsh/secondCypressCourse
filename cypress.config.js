const { defineConfig } = require('cypress')

module.exports = defineConfig({
	watchForFileChanges: false,
	chromeWebSecurity: false,
	env: {
		webdriveruni_homepage: 'http://www.webdriveruniversity.com',
	},
	e2e: {
		baseUrl: 'http://www.webdriveruniversity.com',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
