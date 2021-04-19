let xl = require("xlsx");

class xlReader {
  read_from_XLSX(sheetName, filePath) {
    let workBook = xl.readFile(filePath);
    let workSheet = workBook.Sheets[sheetName];
    let a = xl.utils.sheet_to_json(workSheet);
    return a;
  };
  
}

module.exports = new xlReader();
