# Saucedemo Automation Cypress

### Prerequisite 
  - Download [Node.js LTS](https://nodejs.org/en/) and install based on your system.
  - To check installation: Open command prompt and run **node -v**. [NODE.js VERSION](https://ibb.co/tZy3X2b). Restart pc if needed. ***Only if** there is error then set environment variable *NODE_HOME*, Variable Value = *C:\Program Files\nodejs**.
  - Download [Visual Studio Code](https://code.visualstudio.com/Download) and install based on your system. **Install with Default Configuration**
  - Latest Chrome or Firefox browser.

------------------------------------------------------------------------------------------------------------

### How to run test case. 
- Clone/Download repo into local machine and extract it.
- Open VS-code and open extracted repo.
- Run command in VS-code terminal `npm install cypress --save-dev` it may take little longer.
- To run cypress for the first time, either run custom command using VS-Code termial `npm run openCypressRunner` (package.json) or `./node_modules/.bin/cypress open` to Open cypress test runner. 
- [Choose](https://ibb.co/HDHL3tF) browser from top right corder. Recommended *ELECTRON*. Cypress GUI runner.
- To run test case using command line use `npm run *name of script*`  or `npm run runAllTests` to run all test from integration folder. *package.json*
- *Do not change any folder structure. It may result in test failure.*
- Example: To run TC01_addItems... with firefox headed run `npm run TC01_addItemsToCart_FirefoxHeaded` Check *package.json* for some sample scripts.
- Configuration of [cypress.json](https://docs.cypress.io/guides/references/configuration#cypress-json)

------------------------------------------------------------------------------------------------------------

### Things to consider while executing test case.

- TC03_intentionallyFailedTestMsg is negative test and scripted to fail intentionally to demonstrate screenshot on fail functionality.
- *package.json* is configured for simple demonstration. Combine/merging reports can be added as well as more complex scripts such as groupping, tagging and command line configuration can be added. [How To run commands](https://docs.cypress.io/guides/guides/command-line#How-to-run-commands)
- If broswer update error run `npx browserslist@latest --update-db` to update browser.
- Report "overwrite": false/true can be configured under *cypress.json*.
- Standard code formatter can be used. For example : [Prettier](https://prettier.io/docs/en/install.html)

------------------------------------------------------------------------------------------------------------

### Test execution result and report. 
- Test execution video and reports can be found under *videos and reports* folder
- Dashboard Credential: yikidah532@ningame.com : Test@1470
------------------------------------------------------------------------------------------------------------
