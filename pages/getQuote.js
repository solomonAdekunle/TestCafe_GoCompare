const {
    Selector,
    t
} = require("testcafe");

const config = require("../config");
//var List = require("collections/list");
const {
    BasePage
} = require("../pages/page.js");

// providing selectors
const postCodeField = Selector("input[ng-model='ctrl.energyModel.Postcode']");
const findPostCodeButton = Selector("button#find-postcode");
const selectIhaveABill = Selector("label#have-bill-label");
const selectIdontHaveBill = Selector("label#no-bill-label input");
const selectGasAndElectricty = Selector("label[for='compare-what-both']");
const selectWhoIsMyElectricityProvider = Selector("label[for='electricity-top-six-eon']");
const selectWhoIsMyGasProvider = Selector("label[for='gas-top-six-npower']");
const whatElectricityTariffAreYou = Selector("select#electricity-tariff-additional-info");
const whatElectricityTariffAreYouOptions = Selector("option[value='number:7827']");
const doYouUsePrepayMeterYesButton = Selector("label[for='prepayment-yes']");
const doYouUsePrepayMeterNoButton = Selector("label[for='prepayment-no']");
const economy7MeterNoButton = Selector("label[for='economy-7-no']");
const howDoYouPayYourElectricity = Selector("select#electricity-payment-method-dropdown-link");
const quartley_directDebit_howDoYouPayElectricity = Selector("option[label='Quarterly Direct Debit']");
const nextButton = Selector("button.button-primary");
const electricityBillAmount_textBox = Selector("input#electricity-current-spend");
const gasBillAmount_textBox = Selector("input#gas-current-spend");
const AllTariffsButton = Selector("label[for='pre-select-all']");
const fixedTariffButton = Selector("label.fixed-rate");
const howDoYouWantToPay_Monthly_DD = Selector("label[for='pre-select-payment-monthly'] .radio-button-text");
const howDoYouWantToPay_Quarterly_DD = Selector("label[for='pre-select-payment-quarterly'] .radio-button-text");
const yourEmail_textBox = Selector("input#Email");
const termRadioButton = Selector("label#terms-label");
const goToPricesButton = Selector("button#email-submit");
const summaryInformation = Selector("div[ng-controller='YourDetailsController a ctrl']");
const filterTariffType_Fixed_CheckBox = Selector('label#filters-tariff-type-fixed');
const filterMonthlyPaymentTypeCheckBox = Selector("label#filters-payment-type-monthly");
const filterQuarterlyPaymentType_CheckBox = Selector("label#filters-payment-type-quarterly");
const tariffTypeColunms = Selector("td.tariff-feature-tariff-type");
const paymentTypeColumns = Selector("td.tariff-feature-payment-method p");
const currentElectricityUsageInPounds = Selector("label[for='poundSpend']");
const currentElectricityUsageInPounds_TextBox = Selector("input#electricity-spend");
const whatDateIsOnYourBill_TextBox = Selector("input#electricity-bill-day");

class getNewQuote {

    async enterYourPostCode(postCode) {
        await t.typeText(postCodeField, postCode);

    }
    async clickFindPostCodeButton() {
        await t.click(findPostCodeButton);
    }

    async clickIhaveBillRadioButton() {
        await t.click(selectIhaveABill);
    }


    async clickIdontHaveBillRadioButton() {
        await t.click(selectIdontHaveBill);
    }

    async clickGasAndElectrictyRadioButton() {
        await t.click(selectGasAndElectricty);
    }

    async clickWhoIsMyElectricityProviderRadioButton() {
        await t.click(selectWhoIsMyProvider);
    }

    async clickWhoIsYourGasProviderRadioButton() {
        await t.click(selectWhoIsMyGasProvider);
    }

    async isPrePaymentMeterYesRadioButtonSetAsDefault() {
        await t.expect(doYouUsePrepayMeterYesButton.checked).eql(true);

    }

    async isPrePaymentMeterRadioButtonNoSetAsDefault() {
        await t.expect(doYouUsePrepayMeterNoButton.selected).eql(true);
    }

    async clickWhatElectricityTariffAreYouOnDropdown() {
        await t.click(whatElectricityTariffAreYou);
    }


    async selectElectricityTariffAreYouOnOption() {
        await t.click(whatElectricityTariffAreYouOptions);

    }

    async clickHowDoYouPayElectricity() {
        await t.click(howDoYouPayYourElectricity);
    }

    async clickWhatIsYourElectricityUsageInPounds() {
        await t.click(currentElectricityUsageInPounds);
    }

    async enterWhatIsElectricityUsageInPounds(amtEletricityUsage) {
        await t.typeText(currentElectricityUsageInPounds_TextBox);
    }


    async selectHowDoYouPayElectricityOption() {
        await t.click(quartley_directDebit_howDoYouPayElectricity);
    }

    async isEonomy7MeterNoRadioButtonSetAsDefault() {
        await t.expect(economy7MeterNoButton.selected).eql(true);
    }

    async isSummaryInformationSectionDisplayed() {
        await t.expect(summaryInformation.visible).ok();
    }


    async isFilterMonthlyPaymentTypeCheckBoxChecked() {
        await t.expect(filterMonthlyPaymentTypeCheckBox.checked).eql(true);
    }

    async isFilterQuarterlyPaymentCheckBoxChecked() {
        await t.expect(filterQuarterlyPaymentType_CheckBox.checked).eql(true);
    }

    async isFilterTariffFixedCheckBoxChecked() {
        await t.expect(filterTariffType_Fixed_CheckBox.checked).eql(true);
    }

    async isTariffTypeColumDisplayedVariablePrice() {
        let getTypeOfTarriff = tariffTypeColumn;
        let CountTarriffTyep = getTypeOfTarriff.count;
        for (let i = 0; i <= CountTarriffTyep - 1; i++) {
            let tariffTypeColunms = getTypeOfTarriff.nth(i);
            let getValuesText = await tariffTypeColunms.innerText;
            await t.expect(getValuesText).contains("Prices variable");
        }
    }

    async isPaymentTypeColumnsDisplayedMonthly() {
        let getPaymentType = paymentTypeColumns;
        let CountPaymentType = getPaymentType.count;
        for (let i = 0; i <= CountPaymentType - 1; i++) {
            let getPaymentTypeNumber = getPaymentType.nth(i);
            let getValuesText = await getPaymentTypeNumber.innerText;
            await t.expect(getValuesText).contains("Monthly");
        }

    }

    async isTariffTypeColumTextsContainPricesFixed() {
        let getTypeOfTarriff = tariffTypeColumn;
        let CountTarriffTyep = getTypeOfTarriff.count;
        for (let i = 0; i <= CountTarriffTyep - 1; i++) {
            let tariffTypeColunms = getTypeOfTarriff.nth(i);
            let getValuesText = await tariffTypeColunms.innerText;
            await t.expect(getValuesText).contains("Prices fixed");
        }
    }

    async isPaymentTypeColumnsDisplayedQuaterly() {
        let getPaymentType = paymentTypeColumns;
        let CountPaymentType = getPaymentType.count;
        for (let i = 0; i <= CountPaymentType - 1; i++) {
            let getPaymentTypeNumber = getPaymentType.nth(i);
            let getValuesText = await getPaymentTypeNumber.innerText;
            await t.expect(getValuesText).contains("Quarterly");
        }

    }


    async clickNextButton() {
        await t.click(nextButton);
    }

    async enterYourElectricityBillAmount(electricityBillAmt) {
        await t.typeText(electricityBillAmount_textBox, electricityBillAmt);
    }

    async enterYourGasBillAmount(gasBillAmt) {
        await t.typeText(gasBillAmount_textBox, gasBillAmt);
    }
    async clickALLTariffs() {
        await t.click(AllTariffsButton);
    }

    async clickFixedTariffButtonWhatTariffAreOfYourInterest() {
        await t.click(fixedTariffButton);
    }


    async clickPayForEnergyMonthlyDirectDebitButton() {
        await t.click(howDoYouWantToPay_Monthly_DD);
    }

    async clickPayForEnergyQuartleyDirectDebitButton() {
        await t.click(howDoYouWantToPay_Quarterly_DD);
    }

    async enterYourEmail(email) {
        await t.typeText(yourEmail_textBox, email);
    }

    async enterTheDateOnYourBill(dateOfBill) {
        await t.typeText(whatDateIsOnYourBill_TextBox, dateOfBill);
    }

    async clickTermAndConditionRadioButton() {
        await t.click(termRadioButton);

    }

    async clickGoToPricesButton() {
        await t.click(goToPricesButton);
    }


}

module.exports.getNewQuote = getNewQuote;