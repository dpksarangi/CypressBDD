import {
  Given,
  Then,
  When,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I open the base page", function () {
  cy.visit("https://practice.automationtesting.in/");
});
Then("I click on top menu", function () {
  cy.get("#menu-icon").click();
  cy.get("#menu-item-40").click();
});
When("I verify title", function () {
  cy.title().should("include", "Products");
});
Then("Title matches", function () {
  console.log("Everything matches");
});
