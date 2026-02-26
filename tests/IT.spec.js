//login as admin create a user go to alluser check that user is created
import {expect, test} from '@playwright/test'
import ul from '../testdatajson/url.json'
import lin from '../testdata/login.js'
import ldet from '../testdata/logindet.js'
import cred from '../testdatajson/logincre.json'
import user from '../testdata/../testdata/nuser.js'
import userdet from '../testdatajson/userdet.json'


test("IT",async({page})=>{

let ur=new user(page)

let fname=userdet.firstname
let lname=userdet.lastname
let em=userdet.email
let ad=userdet.Address
let pas=userdet.password
let city=userdet.city
let pb=userdet.pobox
let state=userdet.state
let ph = userdet.phone

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

    
   await page.goto("https://phptravels.net/admin/dashboard") 
   await page.mouse.move(197,25)
   await ur.cubtn.click()
  

await page.locator('//a[@class="btn" ]').click()
await ur.fn.fill(fname)
await ur.ln.fill(lname)
await ur.email.fill(em)
await ur.sbtn.selectOption({ value: '91' });
await ur.phone.fill(ph)
await ur.password.fill(pas)
await ur.Add.fill(ad)
await ur.cnbtn.selectOption('India')
await ur.city.fill(city)
await ur.pbox.fill(pb)
await ur.st.fill(state)
await ur.btn.click()
await page.locator('//span[.="arrow_back"]').click()
const userRow = page.locator(`//tbody/tr[td[contains(text(),"${fname}")]]`);

console.log(await expect(userRow).toBeVisible()??"user is created IT is pass");


await page.waitForTimeout(2000)
})



