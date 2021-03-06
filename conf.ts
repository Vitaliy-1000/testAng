
import{Config, browser} from "protractor";
//const { Config} = require('protractor') 

const config : Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.ts'],

    SELENIUM_PROMISE_MANAGER: false,

    onPrepare() {
      browser.waitForAngularEnabled(true);
    },

    jasmineNodeOpts: {
      showColors: true,
     defaultTimeoutInterval: 300000
    }


  };

  exports.config = config;