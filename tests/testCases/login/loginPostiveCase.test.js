const {By, until} = require("selenium-webdriver");
const config = require("../../../config")
const assert = require("assert");

const { url, username, password } = config;

describe('Test Case Login Positive - Timesheet Digiform', function () {
  this.timeout(30000)

  it('Go to website', async () => {
    await driver.get(url);
  })

  it('Test Case Positive - Login Success', async () => {
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