//navigate to url search by city check that hotellist page is displayed
import {expect, test} from '@playwright/test'
import ul from '../testdatajson/url.json'



test("smoketest",async({page})=>{


let url=ul.url
    
 await page.goto(url)
 await page.locator('//span[.="Stays" and @class="text-xs md:text-sm font-semibold capitalize"]').click()
 


await page.locator('[placeholder="Search By City"]').last().fill('ma')
 let val=await page.locator('//div[@class="p-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors"]').first()
 await val.waitFor({state:"visible"})
 await val.click()
    
   await page.locator('//select[@class="select"]').click()
 await page.locator('//select[@class="select"]').selectOption('India')
 
   

})