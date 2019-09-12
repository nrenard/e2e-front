module.exports = {
  before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function(browser) {

  },

  'Navigate from site': (browser) => {
    console.log('this: ', this)
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('#root > div')
      .pause(1000)
  },
  'Has logo': browser => {
    browser.expect.element('#root > div > header > img').to.be.visible;

    browser.end()
    // browser.setValue('input[type=text]', 'nightwatch')
    // .waitForElementVisible('input[name=btnK]')
    // .click('input[name=btnK]')
    // .pause(1000)
    // .end();
  }
};
