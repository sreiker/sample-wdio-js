describe("Web automation real device", () => {

  it("Opening Website", async () => {
    browser.url("https://mfml.in/api/getInfo")
    var color = await $("//input[@id='resolution']");
    await color.waitForDisplayed({ timeout: 50000 });
    await color.click();
    await color.click();
    windowHandles = await browser.getWindowHandles();
    console.log(windowHandles);
    var text = await $("//input[@id='location']");
    await text.waitForDisplayed({ timeout: 50000 });
    await text.click();
    var toast = await $("//textarea[@id='details']");
    await toast.waitForDisplayed({ timeout: 50000 });
    await toast.click();
    var nf = await $("//textarea[@id='timezone']");
    await nf.waitForDisplayed({ timeout: 50000 });
    await nf.click();
    driver.executeScript("lambda-status=passed",[]);

  });
});
