const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // Membuka browser dengan UI
    const page = await browser.newPage();
    
    await page.goto('https://www.google.com');  // Ganti dengan URL yang diinginkan
    
    await page.waitForSelector('#element_id');  // Ganti dengan selector elemen yang ingin diklik
    await page.click('#element_id');
    
    await browser.close();
})();
