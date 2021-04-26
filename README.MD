# Learning protractor

Learning protractor is a program for automated browser testing.

After finding the button it tests if it works

## Installation

install NodeJS from https://nodejs.org/en/download/

Use the npm installer to install protractor.
```bash
npm install -g protractor
```
and update the webdriver-manager.

```bash
webdriver-manager update
```

## Usage
after finding the button edit the JSONconfig.json file
it must include 
  testname = the name of the test
  address = the address of the web page you want to test
  expectwebpage = the title of this web page
  classes": 
      testDescription = the description of this test 
      class = the path to the clickable button
      expect = the title of the next web page
      isAngular = true/false
    
i.e. 
```JSON
{
      "class": "'nav']/li[1]"
},
```
## To run use

```bash
protractor conf.js
```

