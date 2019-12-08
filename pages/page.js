const config = require('../config');
const {
    Selector,
    t
} = require('testcafe');

//var region = process.env.REGION;
var env = process.env.ENV;
var getUrl = config[env].url; // this enable you to get url from config file

class BasePage {
    async goTo() {
        console.log("please help");
        return await t.navigateTo(getUrl);

    }



}
module.exports.BasePage = BasePage;