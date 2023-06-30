const {By, Builder, Key, until, Browser} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");
require("chromedriver")

suite(function (env) {
  describe('First script', function () {
    this.timeout(10000);

    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });

    after(async () => await driver.quit());

    it('First Selenium script', async function () {
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

      let title = await driver.getTitle();
      assert.equal("Web form", title);

      await driver.manage().setTimeouts({implicit: 500});

      let textBox = await driver.findElement(By.name('my-text'));
      let submitButton = await driver.findElement(By.css('button'));

      await textBox.sendKeys('Selenium');
      await submitButton.click();

      let message = await driver.findElement(By.id('message'));
      let value = await message.getText();
      assert.equal("Received!", value);
    });

    it('Google search testing', async () => {
        //open the website
        await driver.get('http://www.google.com/');

        //find the search box and enter webdriver as the search term
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);

        //wait for the page to load
        await driver.wait(until.titleIs('webdriver - Penelusuran Google'), 1000);
    })
  });
}, { browsers: [Browser.CHROME]});