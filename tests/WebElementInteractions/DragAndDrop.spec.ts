import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Test Completed: ${testInfo.title}`);
});

/*
Test to handle draging and dropping a web element
- Opens webpage
- Drags an element to another location on the page
- Validates state change
*/
test('Drag and Drop Test', async ({page}) => {
    // Go to URL
    await page.goto(`${process.env.JQUERY_URL}`);
    //Click on Droppable
    await page.locator('text=droppable').click();
    //Drag and drop the element
    const iFrameElement = page.frameLocator('[class="demo-frame"]');
    const dragElement = iFrameElement.locator('[id="draggable"]');
    const dropElement = iFrameElement.locator('[id="droppable"]');
    await dragElement.dragTo(dropElement);
    //Validate the text appears
    await expect(dropElement).toHaveText("Dropped!");
})