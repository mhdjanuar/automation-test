const { Builder } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options().headless();

let driver;

before(async function () {
  // Setup actions before test cases
  driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  global.driver = driver; // Store the driver in global scope
});

after(async function () {
  // Teardown actions after test cases
  await driver.quit();
  global.driver = null; // Reset the driver in global scope
});