import {test, expect} from '@playwright/test';

/*
Test to handle dropdown menus
- Opens webpage
- Selects an item from the single level dropdown
- Validates state change
*/
test('Select Value from Dropdown - Single Level', async({page})=>{
    await page.goto(`${process.env.JQUERY_URL}`);
    await page.locator('text=Selectmenu').last().click();
    const demoFrame = page.frameLocator('.demo-frame');

    // Open the dropdown combo box
    await demoFrame.locator('#speed-button').click();

    // Click the "Faster" option in the dropdown menu
    await demoFrame.locator('#speed-menu li:has-text("Faster")').click();

    expect(await demoFrame.locator('#speed-button').textContent()).toBe("Faster");
});

/*
Test to handle multiple level dropdown menus
- Opens webpage
- Selects an item from the multiple level dropdown
- Validates state change
*/
test('Select Value from Dropdown - Multiple Levels', async({page})=>{
    await page.goto(`${process.env.JQUERY_URL}`);
    await page.locator('text=Selectmenu').last().click();
    const demoFrame = page.frameLocator('.demo-frame');

    // Open the dropdown combo box
    await demoFrame.locator('#files-button').click();

    // Click the "Faster" option in the dropdown menu
    await demoFrame.locator('#files-menu li:has-text("ui.jQuery.js")').click();

    expect(await demoFrame.locator('#files-button').textContent()).toBe("ui.jQuery.js");
});

// Change the Examples to be one where selections causes page changes
test('Select Value from Dropdown - Change Size and Color', async({page})=>{
    await page.goto(`${process.env.JQUERY_URL}`);
    await page.locator('text=Selectmenu').last().click();
    await page.locator('text=Product Selection').click();
    const demoFrame = page.frameLocator('.demo-frame');

    // Change the radius of the circle from 150px(default) to 250px
    await demoFrame.locator('#radius-button').click();
    await demoFrame.locator('#radius-menu li:has-text("250px")').click();

    // Change the color from Yellow(default) to Green
    await demoFrame.locator('#color-button').click();
    await demoFrame.locator('#color-menu li:has-text("Green")').click();

    expect(await demoFrame.locator('#radius-button').textContent()).toBe("250px");
    expect(await demoFrame.locator('#color-button').textContent()).toBe("Green");
    expect(demoFrame.locator('#circle')).toBeVisible();
    const styleAttr = await demoFrame.locator('#circle').getAttribute('style');
    expect(styleAttr).toContain('width: 250px');
    expect(styleAttr).toContain('height: 250px');
    expect(styleAttr).toContain('background: green');
});