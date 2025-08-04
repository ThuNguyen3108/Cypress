const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   allureWrite(on, config)
    //   return config;
    projectId: "sdetpro",
    specPattern: "./cypress/tests/**.*",
    // baseUrl: "https://the-internet.herokuapp.com"
    // baseUrl: "https://www.amazon.com"
    baseUrl: "https://www.simplyrecipes.com/"
    // baseUrl: "https://demoblaze.com/"
    },
    defaultCommandTimeout: 10000
  },
);
