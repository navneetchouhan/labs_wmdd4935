const fs = require('fs')
const data = process.argv[2]
fs.readFile(data, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  const result = contents.toString().split('\n').length - 1
  console.log(result)
})