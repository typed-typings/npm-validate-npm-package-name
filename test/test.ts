/// <reference path="../bundle.d.ts" />

import validate = require('validate-npm-package-name');

let result = validate('validate-npm-package-name');
result.validForNewPackages === true;
result.validForOldPackages === true;
console.log('DONE');
