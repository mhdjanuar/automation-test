const {By, until} = require("selenium-webdriver");
const config = require("../../../config")
const assert = require("assert");

const { url } = config;

describe('Test Case Login Negative - Timesheet Digiform', function () {
  this.timeout(30000)

  it('Go to website', async () => {
    await driver.get(url);
  })

  it('Test Case Negative - Login Validation Empty Input', async () => {
    let submitButton = await driver.findElement(By.className('ant-btn ant-btn-primary login-form-button'));
    await submitButton.click();

    const errorEmail = await driver.wait(until.elementLocated(By.xpath("//div[@id='login_email_help']//div[@class='ant-form-item-explain-error']")),10000);
    const errorEmailValue = await errorEmail.getText();
    const errorPassword = await driver.wait(until.elementLocated(By.xpath("//div[@id='login_password_help']//div[@class='ant-form-item-explain-error']")),10000);
    const errorPasswordValue = await errorPassword.getText();

    assert.equal("Please input your email!", errorEmailValue);
    assert.equal("Please input your Password!", errorPasswordValue);
  })
});