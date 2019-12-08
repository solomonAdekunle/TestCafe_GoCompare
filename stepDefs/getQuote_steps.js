const {
    Selector,
    t
} = require("testcafe");
const {
    Given,
    When,
    Then
} = require('cucumber');
const {
    Helper
} = require('../support/helper.js');
const config = require('../config');
var env = process.env.ENV;
var getValue = config[env].properties; // this enable you to get data from config file


const helper = new Helper();


Given('I go directly to the HOME page', async t => {
    await helper.base_page.goTo();
});


When('I enter my post code as {string}', async (t, [userName]) => {
    await helper.myQuote.enterYourPostCode(userName);
    await helper.myQuote.clickFindPostCodeButton();
});

When('I select I dont have bill option box', async t => {
    await helper.myQuote.selectIdontHaveBillRadioButton();

});

When('I select I have a bill option button', async t => {
    await helper.myQuote.clickIhaveBillRadioButton();

});



When('I select compare gas and electricty option box', async t => {
    await helper.myQuote.clickGasAndElectrictyRadioButton();

});

When('I select my electricity provider', async t => {
    await helper.myQuote.clickWhoIsMyElectricityProviderRadioButton();

});


When('I select my gas provider', async t => {
    await helper.myQuote.clickWhoIsYourGasProviderRadioButton();

});

When('I click next button', async t => {
    await helper.myQuote.clickNextButton();

});

When('I click on what tariff electricity dropdown', async t => {
    await helper.myQuote.clickWhatElectricityTariffAreYouOnDropdown();

});


When('I click on what tariff electricity dropdown', async t => {
    await helper.myQuote.clickWhatElectricityTariffAreYouOnDropdown();

});

When('I select an option from the dropdown', async t => {
    await helper.myQuote.selectElectricityTariffAreYouOnOption();

});


When('I click on How do you pay electricity dropdown', async t => {
    await helper.myQuote.clickHowDoYouPayElectricity();

});

When('I select Quartley direct debit from the option', async t => {
    await helper.myQuote.selectHowDoYouPayElectricityOption();

});

When('I see do you use a prepayment No button selected', async t => {
    await helper.myQuote.isPrePaymentMeterRadioButtonNoSetAsDefault();

});

When('I see do you use a prepayment No button selected', async t => {
    await helper.myQuote.isPrePaymentMeterRadioButtonNoSetAsDefault();

});


When('I see do you have an Economy 7 meter No Button selected', async t => {
    await helper.myQuote.isEonomy7MeterNoRadioButtonSetAsDefault();

});

When('I enter {string} and I select monthly as how much spend on electricity', async (t, [electricityBillAmt]) => {
    await helper.myQuote.enterYourElectricityBillAmount(electricityBillAmt);

});


When('I enter {string} and I select monthly as how much spend on gas', async (t, [gasBillAmt]) => {
    await helper.myQuote.enterYourGasBillAmount(gasBillAmt);

});

When('I select all tariffs option box', async t => {
    await helper.myQuote.clickALLTariffs();

});

When('I select monthly direct debit option box', async t => {
    await helper.myQuote.clickPayForEnergyMonthlyDirectDebitButton();

});

When('I enter my email as {string}', async (t, [email]) => {
    await helper.myQuote.enterYourEmail(email);

});

When('I click on the term and condition radio button', async t => {
    await helper.myQuote.clickTermAndConditionRadioButton();

});

When('I click on the go to prices button', async t => {
    await helper.myQuote.clickGoToPricesButton();

});


When('I click on What is your current electricity usage in pounds button', async t => {
    await helper.myQuote.clickGoToPricesButton();

});

When(' I enter {string} on What is your current electricity usage in pounds text box', async (t, [amtEletricityUsage]) => {
    await helper.myQuote.enterWhatIsElectricityUsageInPounds(amtEletricityUsage);

});

When(' I enter {string} as the date on my bill', async (t, [dateOfBill]) => {
    await helper.myQuote.enterTheDateOnYourBill(dateOfBill);

});


Then('I should see summary details section displayed', async t => {
    await helper.myQuote.isSummaryInformationSectionDisplayed();

});

Then('I should see monthly payment check box being checked under filter section', async t => {
    await helper.myQuote.isFilterMonthlyPaymentTypeCheckBoxChecked();

});

Then('I should see price varible displayed under the tariff type column', async t => {
    await helper.myQuote.isTariffTypeColumDisplayedVariablePrice();

});


Then('I should see monthly being displayed under payment type colunm', async t => {
    await helper.myQuote.isPaymentTypeColumnsDisplayedMonthly();

});


Then('I should see fixed check box being checked under filter tariff type', async t => {
    await helper.myQuote.isFilterTariffFixedCheckBoxChecked();

});

Then('I should see Quarterly payment type check box being checked under filter section', async t => {
    await helper.myQuote.isFilterQuarterlyPaymentCheckBoxChecked();

});

Then('I should see under the tariff type column to contain fixed prices text', async t => {
    await helper.myQuote.isTariffTypeColumDisplayedVariablePrice()();

});

Then('I should see Quartley text being displayed under payment type colunm', async t => {
    await helper.myQuote.isTariffTypeColumDisplayedVariablePrice()();

});