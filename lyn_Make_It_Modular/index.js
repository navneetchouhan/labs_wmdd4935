const filterFn = require('./index_filter.js')
const mydir = process.argv[2]
const myfilterStr = process.argv[3]

filterFn(mydir, myfilterStr, function (err, mylist) {
  if (err) {
    return console.error('There was an error:', err)
  }

  mylist.forEach(function (myfile) {
    console.log(myfile)
  })
})