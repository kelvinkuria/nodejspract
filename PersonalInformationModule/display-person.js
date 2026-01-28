const {firstName , lastName,age,city,socialSecurity }= require('./personal-info')

function displayFullInfo(){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
    // Note: socialSecurity is intentionally not displayed
    console.log("Social Security: [REDACTED]" + socialSecurity);
}

displayFullInfo();

const personalInfo = require('./personal-info');

function displayFullInfoy(){
    console.log(`personalInfo NAME: ${personalInfo.firstName} ${personalInfo.lastName}`);

    console.log(`Age: ${personalInfo.age}`);
    console.log(`city: ${personalInfo.city}`);
}

displayFullInfoy();