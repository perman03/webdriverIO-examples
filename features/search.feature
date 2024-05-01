Feature: Google Search

@smoke
Scenario Outline: As a user, I do some searches on Google
    Given I am on Google Page
    When I search <mySearch>
    #Then I can see the results
    Examples:
    | mySearch    |
    | webdriverio |
    | BBVA        |