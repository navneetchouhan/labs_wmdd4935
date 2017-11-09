const fs = require('fs')
const mypath = require('path')
const myfolder = process.argv[2]
const ext = '.' + process.argv[3]
fs.readdir(myfolder, function (err, myfiles) {
  if (err) return console.error(err)
  myfiles.forEach(function (myfile) {
    if (mypath.extname(myfile) === ext) {
      console.log(myfile)
    }
  })
})