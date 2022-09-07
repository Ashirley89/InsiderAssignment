// @ts-check
const { test, expect } = require('@playwright/test');

test('Purchase an Item', async ({ page }) => {
  
    const userEmail = page.locator('//div[@class="control _with-tooltip"]//input[@id="customer-email"]');
    const userfirstName = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[1]/div/input');
    const userlastName = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[2]/div/input');
    const userstreetName = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/fieldset/div/div[1]/div/input');
    const usercityName = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[4]/div/input');
    const userstateName = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[5]/div/select');
    const userzipCode = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[7]/div/input');
    const userphoneNumber = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[9]/div/input');
    const radioBtn = page.locator('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[2]/div/div[3]/form/div[1]/table/tbody/tr[1]/td[1]/input');
    const pageDown = page.keyboard.down('PageDown');
    
    await page.goto('https://magento.softwaretestingboard.com/');
    await expect(page).toHaveTitle(/Magento/);
    await page.click('#ui-id-4');
    await page.click('//*[@id="maincontent"]/div[4]/div[2]/div[2]/div/ul[1]/li[3]/a');
    await page.click('//*[@id="maincontent"]/div[3]/div[1]/div[3]/ol/li[1]/div/a/span/span/img');
    await page.click('#option-label-size-143-item-169');
    await page.click('#option-label-color-93-item-60');
    await page.click('#product-addtocart-button');
    await page.click('//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a');
    await expect(page.locator('button[data-role="proceed-to-checkout"]')).toBeVisible();
    await page.locator('button[data-role="proceed-to-checkout"]').hover(); 
    await page.click('button[data-role="proceed-to-checkout"]', ({ force: true }));
    await userEmail.fill("tester@test.com");
    await userfirstName.fill("Tony");
    await userlastName.fill("Stark");
    await userstreetName.fill("13233 Orsay St");
    await usercityName.fill("Clarksburg");
    await pageDown;
    await userstateName.selectOption("31");
    await userzipCode.type("20781");
    await userphoneNumber.type("9143109514");   
    await radioBtn.check();
    expect(await radioBtn.isChecked()).toBeTruthy();
    await page.click('//html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[2]/div/div[3]/form/div[3]/div/button');
    await page.click('//html/body/div[3]/main/div[2]/div/div[2]/div[4]/ol/li[3]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[4]/div/button');
    await expect(page).toHaveTitle("Checkout Magento Commerce - website to practice selenium | demo website for automation testing | selenium practice sites");
    
});

test('Submit a Contact Us Message', async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/contact/');
    await page.keyboard.down('PageDown');
    await page.locator('#name').fill("Tony Stark");
    await page.locator('#email').fill("tester@test.com");
    await page.locator('#telephone').fill("9143109514");
    await page.locator('#comment').fill("I hope I get this job");
    await page.click('button[title="Submit"]');
    

})

test('Use the Search box feature to find a Watch and add it to the Cart', async ({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.locator('#search').fill("Watch");
    await page.click('button[title="Search"]');
    await page.click('img[alt="Didi Sport Watch"]');
    await page.click('#product-addtocart-button');
    await expect(page.locator('#maincontent > div.page.messages > div:nth-child(2) > div > div > div')).toContainText('You added Didi Sport Watch to your');

})