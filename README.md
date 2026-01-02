# QA Cypress SauceDemo

## Project Overview
Automated end-to-end tests using **Cypress** for the [SauceDemo](https://www.saucedemo.com) application.  
Focus: login flows, product listing, checkout validation, and order confirmation.
The architecture follows the **Page Object Model (POM)** and uses custom commands and fixtures to ensure an efficient and scalable test code.

## Technologies
- Node.js 24+
- Cypress
- JavaScript (ES Modules)

## Getting Started

### 1. Clone the repository
git clone https://github.com/tavarespablo/qa-cypress-saucedemo.git
cd qa-cypress-saucedemo

### 2. Install dependencies
npm install
### 3. Run tests in Cypress UI or in headless mode
npx cypress open
npx cypress run

## Project Structure
```
qa-cypress-saucedemo/
│
├── cypress/
│   ├── e2e/          # Test cases
│   │   └── purchase-flow.cy.js
│   ├── fixtures/     # Mock data
│   │   └── checkout.json
│   ├── pages/               # Page Object Model (POM)
│   │     ├── LoginPage.js
│   │     ├── ProductsPage.js
│   │     ├── CheckoutPage.js
│   │     └── FinishPage.js
│   └── support/      # Helpers
│         ├── commands.js
│         └── e2e.js
├── package.json
└── README.md
```
## Technical decisions
- Cypress was chosen for its reliability and developer-friendly debugging.
- Tests are focused on the main purchase flow.
- `cy.session()` is not used due to limitations with the SauceDemo application.

## Architecture Overview
- Each page of the application has its own class.
- Reusable commands located in cypress/support/commands.js.
- Fixtures: static test data stored in cypress/fixtures/checkout.json to populate checkout forms.

## Use Case: Complete Purchase Flow
1. User logs in with valid credentials
2. User selects a product from the inventory
3. User adds the product to the cart
4. User proceeds to checkout
5. User fills the checkout form using fixture data
6. User completes the order
7. System displays a success confirmation message

This ensure the main purchase flow of SauceDemo works end-to-end.

## Notes
- Tests run against the public SauceDemo site.
- Cypress GUI (npx cypress open) or headless mode (npx cypress run) can be used.
- This project runs Cypress using Node.js 20 to ensure compatibility in CI environments.
