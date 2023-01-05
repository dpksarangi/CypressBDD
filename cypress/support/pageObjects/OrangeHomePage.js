class OrangeHRM {
  txtBoxUserName() {
    return cy.get("input[name='username']");
  }

  txtBoxPassword() {
    return cy.get("input[name='password']");
  }

  btnSubmit() {
    return cy.get("button").contains("Login");
  }

  txtProfileName() {
    return cy.get("li[class='oxd-userdropdown'] span p");
  }

  txtLnkMenu(option) {
    return cy.get("a.oxd-main-menu-item").contains(option);
  }

  txtLnkSubMenu(option) {
    return cy.get("a.orangehrm-tabs-item").contains(option);
  }
  txtListSubMenu() {
    return cy.get("a.orangehrm-tabs-item");
  }

  txtHeaderFirst() {
    return cy.get("h6.orangehrm-main-title");
  }

  txtNameBlock() {
    return cy.get(
      ".orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6"
    );
  }
}

module.exports = OrangeHRM;
