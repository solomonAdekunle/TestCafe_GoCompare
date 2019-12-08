const getData = require('./properties/dataFile');
const prodData = require('./properties/prodData');

module.exports = {
    prod: {
        url: "https://www.comparethemarket.com/ps/energy/",
        loginURL: "https://uk.rs-online.com/login",
        properties: prodData
    },

    devci: {
        url: "https://energy.comparethemarket.com/energy/v2/?AFFCLIE=TSTT",
        properties: getData
    }
};