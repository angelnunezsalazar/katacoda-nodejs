var expect   = require("chai").expect;
describe("GitHub", function(){
    it("gets the title of GitHub top page", function () {
        const title = browser.url('https://github.com/').getTitle()
        expect(title).equal('The world\'s leading software development platform · GitHub');
    });
});