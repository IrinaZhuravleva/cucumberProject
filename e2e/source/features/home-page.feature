Feature: As a User I expect to be able to navigate to the home page

  @dev
  @smoke
  @reegression
  Scenario: As a User I expect to be able to see contacts
    Given I am on the "home" page
    And the "header-logo" should be visible
    Then the "Contacts header" should content the text "Contacts"
