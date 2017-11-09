const net = require('net')
function myzeroFill (i) {
  return (i < 10 ? '0' : '') + i
}
function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    myzeroFill(d.getMonth() + 1) + '-' +
    myzeroFill(d.getDate()) + ' ' +
    myzeroFill(d.getHours()) + ':' +
    myzeroFill(d.getMinutes())
}
const myserver = net.createServer(function (socket) {
  socket.end(now() + '\n')
})
myserver.listen(Number(process.argv[2]))