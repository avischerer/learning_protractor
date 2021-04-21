let MyJSON = require("./JSONconfig.json");


let txt = JSON.parse(JSON.stringify(MyJSON));
describe(txt.testName, function () {
  txt.classes.forEach(function (data) {
    it(data.testDescriptin, function () {
      browser.get(txt.adrees);
      expect(browser.getTitle()).toEqual(txt.expetwebpage);
      let testElement = element(by.xpath("//*[@class=" + data.class));
      testElement.click();
      browser.waitForAngularEnabled(data.isAngular);
      expect(browser.getTitle()).toEqual(data.expet);
    });
  });
});
