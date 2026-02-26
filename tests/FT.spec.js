// //to check that firstname test field should accept only alphabets
 import {expect, test} from '@playwright/test'
import ul from '../testdatajson/url.json'
import lin from '../testdata/login.js'
import ldet from '../testdata/logindet.js'
//import cred from '../testdatajson/logincre.json'
import user from '../testdata/../testdata/nuser.js'
import userdet from '../testdatajson/userdet.json'


// test("FT",async({page})=>{

// let ur=new user(page)

// let fname=userdet.firstname
// let lname=userdet.lastname
// let em=userdet.email
// let ad=userdet.Address
// let pas=userdet.password
// let city=userdet.city
// let pb=userdet.pobox
// let state=userdet.state
// let ph = userdet.phone

// // let url=ul.url
// //     let email=cred.email
// //     let pass=cred.password
// //     let un=cred.username
   
//     let logbtn=new lin(page)
//     let ld=new ldet(page)
//     await page.goto(url)
//     await logbtn.lgbtn.click()

// await ld.email.fill(email)
// await ld.pass.fill(pass)
// await ld.sinbtn.click()

    
//    await page.goto("https://phptravels.net/admin/dashboard") 
//    await ur.cubtn.click()
  

// await page.locator('//a[@class="btn" ]').click()
// await ur.fn.fill(fname)
// await ur.ln.fill(lname)
// await ur.email.fill(em)
// await ur.sbtn.selectOption({ value: '91' });
// await ur.phone.fill(ph)
// await ur.password.fill(pas)
// await ur.Add.fill(ad)
// await ur.cnbtn.selectOption('India')
// await ur.city.fill(city)
// await ur.pbox.fill(pb)
// await ur.st.fill(state)
// await ur.btn.click()

// await expect(page.locator("//div[@class='alert alert-success mb-4']/span[.='User created successfully']")).toBeVisible();

// console.log(  await expect(page.locator('h1')).toHaveText(`${fname} ${lname}`)??"firstname text field accepting numbers and sepcial characters also");


// })



test("FT", async ({ page }) => {

  let ur = new user(page)

  await page.goto('https://phptravels.net/dashboard')

  await ur.cubtn.click()

  await page.locator('//a[@class="btn"]').click()

  await ur.fn.fill("1234")

  await ur.btn.click()

})