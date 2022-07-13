const cypress = require('cypress')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5501',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
