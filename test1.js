const MyJSON = require("./JSONconfig.json");

const part1 = "//*[@class=";
const txt = JSON.parse(JSON.stringify(MyJSON));
describe(txt.testName, function () {
  txt.classes.forEach(function (data) {
    it(data.testDescription, function () {
      browser.get(txt.address);
      expect(browser.getTitle()).toEqual(txt.expectpagetitle);
      const testElement = element(by.xpath(part1 + data.class));
      testElement.click();
      browser.waitForAngularEnabled(data.isAngular);
      expect(browser.getTitle()).toEqual(data.expect);
    });
  });
});
