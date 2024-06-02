import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://react-email-editor-demo.netlify.app/",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
