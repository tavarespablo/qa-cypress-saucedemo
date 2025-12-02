# QA Cypress SauceDemo

## 📌 Project Overview
Automated end-to-end tests using **Cypress** for the [SauceDemo](https://www.saucedemo.com) application.  
Focus: login flows, product listing, and checkout validation.

## 🛠 Technologies
- Node.js 24+
- Cypress

## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/tavarespablo/qa-cypress-saucedemo.git
cd qa-cypress-saucedemo

### 2. Install dependencies
npm install
### 3. Run tests
npx cypress open

## 📂 Project Structure
```
qa-cypress-saucedemo/
│
├── cypress/
│   ├── e2e/          # Test cases
│   ├── fixtures/     # Mock data
│   └── support/      # Helpers
├── package.json
└── README.md
```
## 📊 Notes
- Tests run against the public SauceDemo site.
- Cypress GUI (npx cypress open) or headless mode (npx cypress run) can be used.
