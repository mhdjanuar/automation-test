const {By, Builder, Key, until, Browser} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const config = require("../../config")
const assert = require("assert");

require('chromedriver');

const { url, username, password } = config;

const chromeOptions = new chrome.Options().headless();

describe('Test Case - Timesheet Digiform', function () {
  this.timeout(30000)

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  });

  after(async () => await driver.quit());

  it('Test Positive Case - Login Success', async () => {
    await driver.get(url);

    let title = await driver.getTitle();
    assert.equal("GUDANG SOLUSI GROUP", title);

    await driver.manage().setTimeouts({implicit: 500});

    let inputEmail = await driver.findElement(By.id('login_email'));
    let inputPassword = await driver.findElement(By.id('login_password'));
    let submitButton = await driver.findElement(By.className('ant-btn ant-btn-primary login-form-button'));

    await inputEmail.sendKeys(username);
    await inputPassword.sendKeys(password);

    await submitButton.click();

    let logo = await driver.wait(until.elementLocated(By.className('logo')),10000);

    const succsesValue = await logo.getText();
    assert.equal("GSG", succsesValue);
  })
});