const http = require('http')
const fs = require('fs')
const myserver = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
 fs.createReadStream(process.argv[3]).pipe(res)
})
myserver.listen(Number(process.argv[2]))