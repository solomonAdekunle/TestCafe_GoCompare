# TestCafe_GoCompare

This test Automation framework is known as Testcafe with Gherkins, written in javascript.
In other to run the this test , please follow the following steps:
a) clone this project
b) run npm install within the project in other to download the all the libraries
c) run this on your commandline to run the tests: ENV=devci ./node_modules/.bin/gherkin-testcafe 'path:`C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`' ./stepDefs/*.js ./features/*.feature --skip-js-errors

Please note: the above Chrome path is a windows chrome specification on windows, if you are using mac linux base
chrome path must be specified as alias, click the Testcafe link below to see how the path is specified:
https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#local-browsers

