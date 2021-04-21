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

