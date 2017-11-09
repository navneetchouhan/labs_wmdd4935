const fs = require('fs')

const myData = fs.readFileSync(process.argv[2])
const result = myData.toString().split('\n').length - 1
console.log(result)