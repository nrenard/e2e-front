const fs = require("fs");

const configSetting = {
  "src_folders" : ["tests"],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "global",

  "selenium" : {
    "start_process" : true,
    "server_path" : "node_modules/selenium-standalone/.selenium/selenium-server/",
    "log_path" : "./reports",
    "host": "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "firefox",
        "marionette": true,
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

    "edge" : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    }
  }
}

// require('nightwatch/bin/runner.js');

module.exports = (function(settings) {
  const seleniumServerFileName =
  fs.readdirSync(settings.selenium.server_path);
  settings.selenium.server_path += seleniumServerFileName[0];
  return settings;
})(configSetting);