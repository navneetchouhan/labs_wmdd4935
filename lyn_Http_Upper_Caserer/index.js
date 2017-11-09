const http = require('http')
const map = require('through2-map')
const myserver = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }
req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})
myserver.listen(Number(process.argv[2]))