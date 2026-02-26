import {test} from "@playwright/test"

test('Print Amazon Sponsored', async ({ page }) => {

  await page.goto('https://www.amazon.in');
  await page.fill('#twotabsearchtextbox', 'mobile');
  await page.keyboard.press('Enter')
  let parent='//div[@class="puisg-col-inner" and (.//span[contains(text(),"Sponsored")])]'
  let title=parent+'/descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]'
  let price=parent+'/descendant::span[@class="a-price-whole"]'
  await page.waitForSelector(parent)
  let name=await page.locator(title).allInnerTexts()
  let amount=await page.locator(price).allInnerTexts()
  let list = {};
    name.forEach((n, i) => {
      list[n] = amount[i]; 
    });
  console.log(list)

});