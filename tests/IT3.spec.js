 //login as admin go to supplier delete first supplier go to all users check the supplier is deleted
 import {chromium, expect, test} from '@playwright/test'
import ul from '../testdatajson/url.json'
import lin from '../testdata/login.js'
import ldet from '../testdata/logindet.js'
import cred from '../testdatajson/logincre.json'
import user from '../testdata/../testdata/nuser.js'



test("IT3",async({})=>{
    const browser=await chromium.launch({headless:false,slowMo:500})
    const context=await browser.newContext()
    const page=await context.newPage()

let ur=new user(page)



let url=ul.url
    let email=cred.email
    let pass=cred.password
    let un=cred.username
   
    let logbtn=new lin(page)
    let ld=new ldet(page)
    await page.goto(url)
    await logbtn.lgbtn.click()

await ld.email.fill(email)
await ld.pass.fill(pass)
await ld.sinbtn.click()

    

await page.goto("https://phptravels.net/admin/dashboard");

await page.locator('//span[.="Supplier"]').click();


page.once('dialog', async dialog => {
  await dialog.accept();
});

await page.locator('//button[@title="Delete" and @data-table="users"]').click();


await page.waitForSelector('//p[contains(text(),"Total:")]');

const Row = page.locator(`//tbody/tr[td[contains(text(),"supplier")]]`);

console.log(await expect(Row).toBeVisible()??"user is created IT is pass");




})



