const {By, until} = require("selenium-webdriver");
const config = require("../../config")
const assert = require("assert");

const { url, username, password } = config;

describe('Test Case Login - Timesheet Digiform', function () {
  this.timeout(30000)

  it('Go to website', async () => {
    await driver.get(url);
  })

  it('Test Negative Case - Login Validation Empty Input', async () => {
    let submitButton = await driver.findElement(By.className('ant-btn ant-btn-primary login-form-button'));
    await submitButton.click();

    const errorEmail = await driver.wait(until.elementLocated(By.xpath("//div[@id='login_email_help']//div[@class='ant-form-item-explain-error']")),10000);
    const errorEmailValue = await errorEmail.getText();
    const errorPassword = await driver.wait(until.elementLocated(By.xpath("//div[@id='login_password_help']//div[@class='ant-form-item-explain-error']")),10000);
    const errorPasswordValue = await errorPassword.getText();

    assert.equal("Please input your email!", errorEmailValue);
    assert.equal("Please input your Password!", errorPasswordValue);
  })

  it('Test Positive Case - Login Success', async () => {
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