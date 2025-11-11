import {test, expect} from '@playwright/test';

/*
Test to handle draging and dropping a web element
- Opens webpage
- Drags an element to another location on the page
- Validates state change
*/
test('has title', async ({page}) => {
    await page.goto(`${process.env.JQUERY_URL}`);
    await page.locator('text=droppable').click();
    const iFrameElement = page.frameLocator('[class="demo-frame"]');
    const dragElement = iFrameElement.locator('[id="draggable"]');
    const dropElement = iFrameElement.locator('[id="droppable"]');
    await dragElement.dragTo(dropElement);
    await expect(dropElement).toHaveText("Dropped!");
})