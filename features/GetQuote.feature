Feature: Get A Quote
  Check if user can get a gquote for gas and electricity

  Scenario: Compare gas and eletricity for user with  i dont have a bill
    Given I go directly to the HOME page
    When I enter my post code as "PE2 6YS"
    And I select I dont have bill option box
    And I select compare gas and electricty option box
    And I select my electricity provider
    And I select my gas provider
    And I click next button
    And I see do you use a prepayment No button selected
    And I see do you have an Economy 7 meter No Button selected
    And I enter "100" and I select monthly as how much spend on electricity
    And I enter "100" and I select monthly as how much spend on gas
    And I click next button
    And I select all tariffs option box
    And I select monthly direct debit option box
    And I enter my email as "test@comparethemarket.com"
    And I click on the term and condition radio button
    And I click on the go to prices button 
    Then I should see summary details section displayed
     And I should see monthly payment check box being checked under filter section
     And I should see price varible displayed under the tariff type column
     And I should see monthly being displayed under payment type colunm 


 Scenario: Compare eletricity for user with i have a bill
    Given I go directly to the HOME page
    When I enter my post code as "PE2 6YS"
     And I select I have a bill option button
     And I select my electricity provider
     And I click next button
     And I click on what tariff electricity dropdown
     And I select an option from the dropdown
     And I click on How do you pay electricity dropdown
     And I select Quartley direct debit from the option
     And I click on What is your current electricity usage in pounds button
     And I enter "35" on What is your current electricity usage in pounds text box
     And I enter "20 December,2019" as the date on my bill
     And I click next button
     And I select fixed tariffs option box
     And I enter my email as "test@comparethemarket.com"
     And I click on the term and condition radio button
     And I click on the go to prices button 
   Then I should see summary details section displayed
    And I should see fixed check box being checked under filter tariff type
    And I should see Quarterly payment type check box being checked under filter section
    And I should see under the tariff type column to contain fixed prices text
    And I should see Quartley text being displayed under payment type colunm 




