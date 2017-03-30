exports.config = {
  specs: [
    './e2e-tests/*.js'
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