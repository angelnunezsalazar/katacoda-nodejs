exports.config = {
  specs: [
    './test/e2e-test/*.js'
  ],
  exclude: [],
  sync: true,
  logLevel: 'error',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 30000
  },
  capabilities: [
    { browserName: 'phantomjs' }
  ],
  services: ['phantomjs']
}