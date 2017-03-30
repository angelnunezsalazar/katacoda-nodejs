var expect   = require("chai").expect;
describe("Default Test", function(){
    it("Mozilla Test", function () {
        const title = browser.url('https://developer.mozilla.org/en-US/').getTitle()
        expect(title).equal('Mozilla Developer Network');
    });
});