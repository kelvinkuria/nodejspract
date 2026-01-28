const stringUtils = require('./string-utils');

const testStrings = 'hello world';

console.log('Original: ', testStrings)

console.log('UpperCase: ', stringUtils.toUpperCase(testStrings))

console.log('LowerCase: ', stringUtils.toLowerCase(testStrings))

console.log('Capitalized: ' ,stringUtils.capitalize(testStrings))

console.log('Reversed: ',stringUtils.reverseString(testStrings))