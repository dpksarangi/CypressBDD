Feature: Orange My info feature
    Scenario: Validate all sub menu
        Given I am on Orange Home page
        When I enter userName and password
        Then I am logged in
        When I click my info
        Then I should navigate to my info page
        And All the sub menu are displayed
        When I click on contact details
        Then Contact details page opens