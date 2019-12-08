const {BasePage} = require('../pages/page.js');
const {getNewQuote} = require('../pages/getQuote.js');

// creating a singleton constructor for each class
class Helper{
    constructor () {
        this.base_page = new BasePage();
        this.myQuote = new getNewQuote();

}
}
module.exports.Helper= Helper;