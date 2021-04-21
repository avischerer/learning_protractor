let MyJSON = require("./JSONconfig.json");
let txt = JSON.parse(JSON.stringify(MyJSON));
describe(txt.testname, function () {
  it("mytest", function () {
    browser.get(txt.adrees);
    txt.classes.forEach(function (data) {
      let testElement = element(by.xpath("//*[@class=" + data.class));
      testElement.click();
    });
  });
});

