function toUpperCase(str){
    return str.toUpperCase();

};

function toLowerCase(str){
    return str.toLowerCase()
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str){
    return str.split('').reverse().join('');
}

module.exports.toUpperCase = toUpperCase;
module.exports.toLowerCase = toLowerCase;
module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;