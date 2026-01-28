const math = require('./math');

const formatNumberWithCommas = require('./formatter');


const sum = math.add(1234567, 8901234);;
const difference = math.subtract(8901234, 1234567);
const product = math.multiply(1234, 5678);


console.log("Sum: ",formatNumberWithCommas(sum));
console.log("Difference: ",
    formatNumberWithCommas(difference)

)
console.log("Product: ", formatNumberWithCommas(product));
