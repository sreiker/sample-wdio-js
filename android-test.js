// describe("@android_smoke Proverbial APK", () => {
//   it("Changes color", async () => {
//     var color = await $("id=color");
//     await color.waitForDisplayed({ timeout: 30000 });
//     await color.click();
//     await color.click();
//   });

//   it("Changes text", async () => {
//     var text = await $("id=Text");
//     await text.waitForDisplayed({ timeout: 30000 });
//     await text.click();
//   });

//   it("Toast", async () => {
//     var toast = await $("id=toast");
//     await toast.waitForDisplayed({ timeout: 30000 });
//     await toast.click();
//   });

//   it("Notification", async () => {
//     var nf = await $("id=notification");
//     await nf.waitForDisplayed({ timeout: 30000 });
//     await nf.click();
//   });

//   it("Geolocation", async () => {
//     var geo = await $("id=geoLocation");
//     await geo.waitForDisplayed({ timeout: 30000 });
//     await geo.click();
//     await driver.back();
//   });

//   it("SpeedTest", async () => {
//     var st = await $("id=speedTest");
//     await st.waitForDisplayed({ timeout: 30000 });
//     await st.click();
//     await browser.pause(10000);
//     await driver.back();
//   });

// });
const assert = require('assert');

describe("@android_smoke", () => {
    it('should pass this dummy test', async() => {
        assert.strictEqual(true, true);
        var color = await $("id=color");
        await color.waitForDisplayed({ timeout: 30000 });
        await color.click();
        await color.click();
    });

    it('should be skipped without the right tag', async function () {
        if (!this.test.parent.title.includes('@android_smoke')) {
            this.skip();
        var text = await $("id=Text");
        await text.waitForDisplayed({ timeout: 30000 });
        await text.click();
        }
        assert.strictEqual(false, false);
        
    });
});