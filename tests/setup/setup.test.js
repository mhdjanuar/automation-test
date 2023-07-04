const { Builder } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const config = require('../../config')

require('chromedriver');
require('geckodriver')

const chromeOptions = new chrome.Options().headless().windowSize({width: 1920, height: 1080});
const firefoxOptions = new firefox.Options().headless();

const { browser } = config;

let driver;

before(async function () {
  this.timeout(50000)

  // Setup actions before test cases
  switch(browser) {
    case 'chrome':
       driver = await new Builder().forBrowser(browser).setChromeOptions(chromeOptions).build();
       break;
    case 'firefox':
       driver = await new Builder().forBrowser(browser).setFirefoxOptions(firefoxOptions).build();
       break;
    default:
      driver = null;
  }
  
  global.driver = driver; // Store the driver in global scope
});

after(async function () {
  // Teardown actions after test cases
  await driver.quit();
  global.driver = null; // Reset the driver in global scope
});