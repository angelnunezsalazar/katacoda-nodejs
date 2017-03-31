exports.config = {
  specs: [
    './test/e2e-test/*.js'
  ],
  exclude: [],
  maxInstances: 2,
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  },
  capabilities: [
    {
      browserName: 'chrome',
      platform: 'WIN10',
      version: 'latest'
    },
    {
      browserName: 'firefox',
      platform: 'WIN10',
      version: 'latest'
    }
  ],
  services: ['testingbot'],
  user: '79278ec3f42874a849db538ebbb0d16b',
  key: 'ba8b48f89ec68e44ae8e8d81944a2348'
}

