const http = require('http')
const bl = require('bl')
const myresults = []
let mycount = 0
function printmyresults () {
  for (let i = 0; i < 3; i++) {
    console.log(myresults[i])
  }
}
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, mydata) {
      if (err) {
        return console.error(err)
      }
myresults[index] = mydata.toString()
      mycount++
 if (mycount === 3) {
        printmyresults()
      }
    }))
  })
}
for (let i = 0; i < 3; i++) {
  httpGet(i)
}