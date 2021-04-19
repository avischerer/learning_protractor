let xlreed = require("./xlsxreeder.js");

let getSite = xlreed.read_from_XLSX("Sheet1", "./testsheets.xlsx");
getSite.forEach(function (data) {
  describe(data.testname, function () {
    it("mytest", function () {
      browser.get(data.site);
      let testData = xlreed.read_from_XLSX(data.sheetname, "./testsheets.xlsx");
      testData.forEach(function (data) {
        let testElement = element(by.xpath(data.class));
        testElement.click();
      });
    });
  });
});
