const fs = require('fs')
const path = require('path')

module.exports = function (mydir, myfilterStr, callback) {
  fs.readdir(mydir, function (err, mylist) {
    if (err) {
      return callback(err)
    }

    mylist = mylist.filter(function (myfile) {
      return path.extname(myfile) === '.' + myfilterStr
    })

    callback(null, mylist)
  })
}