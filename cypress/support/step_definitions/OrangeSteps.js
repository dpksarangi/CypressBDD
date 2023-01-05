import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

const ohrm = require("../pageObjects/OrangeHomePage");
const ohrmPage = new ohrm();

Given("I am on Orange Home page", function () {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});
Then("I enter userName and password", function () {
  ohrmPage.txtBoxUserName().type("Admin");
  ohrmPage.txtBoxPassword().type("admin123");
  ohrmPage.btnSubmit().click();
});
When("I am logged in", function () {
  cy.title().should("include", "OrangeHRM");
  ohrmPage.txtProfileName().should("be.visible");
});
Then("I click my info", function () {
  ohrmPage.txtLnkMenu("My Info").click();
});

Then("I should navigate to my info page", function () {
  console.log("Everything matches");
});
Then("All the sub menu are displayed", function () {
  ohrmPage
    .txtListSubMenu()
    .then(($els) => Cypress.$.map($els, (el) => el.innerText.trim())) // uses jQuery .map()
    .should((values) => {
      expect(values).to.deep.eq([
        "Personal Details",
        "Contact Details",
        "Emergency Contacts",
        "Dependents",
        "Immigration",
        "Job",
        "Salary",
        "Tax Exemptions",
        "Report-to",
        "Qualifications",
        "Memberships",
      ]);
    });
});

When("I click on contact details", function () {
  ohrmPage.txtNameBlock().scrollIntoView();
  ohrmPage
    .txtLnkSubMenu("Contact Details")
    .scrollIntoView({ force: true })
    .click({ force: true });
});
Then("Contact details page opens", function () {
  ohrmPage.txtHeaderFirst().first().should("contain.text", "Contact Details");
});
