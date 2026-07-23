<<<<<<< HEAD
Cypress.config · JS
import { defineConfig } from "cypress";
 
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {},
  },
});
 
=======
import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
>>>>>>> 47779c4aa9e14fda56b07093353b4cbf1658d319
