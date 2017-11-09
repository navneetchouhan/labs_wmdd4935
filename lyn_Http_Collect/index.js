const http = require('http')
const bl = require('bl')
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, mydata) {
    if (err) {
      return console.error(err)
    }
    mydata = mydata.toString()
    console.log(mydata.length)
    console.log(mydata)
  }))
})