import {test, expect} from '@playwright/test';

/*
Test to handle file upload web element
- Opens webpage
- Select file to upload
- Validates state change
*/
test('File Upload', async({page}) =>{
    await page.goto(`${process.env.THE_INTERNET_URL}`);
    await page.locator('text=File Upload').click();
    await page.locator('#file-upload').setInputFiles('tests/testFiles/uploadTestFile.txt');
    await page.locator('#file-submit').click();    
    const uploadedFileText = await page.locator('#uploaded-files').textContent();
    console.log('Uploaded file:', uploadedFileText);
    //adding a null check in-case the string isn't present
    expect((uploadedFileText?.trim() ?? '')).toContain('uploadTestFile.txt');
})

/*
Test to handle file download web element
- Opens webpage
- Select file to download
- Validatation is done outside the test as it's browser functionality
*/
test('File Download', async({page}) =>{
    await page.goto(`${process.env.THE_INTERNET_URL}`);
    await page.locator('text=File Download').first().click();
    await page.locator('a[href="download/test.csv"]').click();
})