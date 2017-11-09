const http = require('http')
const url = require('url')
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}
function unixtime (time) {
  return { unixtime: time.getTime() }
}
const myserver = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let myresult

  if (/^\/api\/parsetime/.test(req.url)) {
    myresult = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    myresult = unixtime(time)
  }

  if (myresult) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(myresult))
  } else {
    res.writeHead(404)
    res.end()
  }
})
myserver.listen(Number(process.argv[2]))