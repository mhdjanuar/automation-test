const {By, until} = require("selenium-webdriver");
const assert = require("assert");

describe('Test Case Profile - Timesheet Digiform', function () {
  this.timeout(30000)

  it('Test Postive Case - Shown Page Profile', async () => {
    //li[@class='ant-menu-item']//span[@class='ant-menu-title-content']//a[contains(@href, 'profile')]
    let profileButton = await driver.findElement(By.xpath("//li[@class='ant-menu-item']//span[@class='ant-menu-title-content']//a[contains(@href, 'profile')]"));
    await profileButton.click();
  })
});