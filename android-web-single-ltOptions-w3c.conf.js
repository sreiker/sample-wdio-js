exports.config = {
    user: "sunilr",//process.env.LT_USERNAME || "YOUR_USERNAME",
    key: "LtQPqIWXiN4kHjRSQ9juzDmQZV7tpbssbvyEJ13JPS4QfhGduU",//process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: false,
    specs: ["android-web-test.js"],
    exclude: [],
  
    // commonCapabilities: {
    //   build: "LT_Appium_NodeJS_WebDriverIO_ltoptions_w3_Web_Automation",
    //   visual: true,
    // },
  
    capabilities: [
      {
        "lt:options": {
          platformName: "Android",
          deviceName: ".*",
          name: "android_ltOptions_w3c",
          isRealMobile: true,
          enableCustomTranslation: true,
          w3c: true,
          build: process.env.LT_BUILD_NAME
        }
      },
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://mobile-hub.lambdatest.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: "mobile-hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
  };
  
  exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
  
