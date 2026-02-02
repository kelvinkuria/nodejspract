const path = require('path')

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__dirname))

function getPathInfo(filePath) {
 
    return path.basename(filePath)

}

module.exports = getPathInfo