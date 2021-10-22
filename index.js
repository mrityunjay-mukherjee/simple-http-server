const http = require('http')
const beverage = process.env.BEVERAGE || `coffee`
const PORT = process.env.PORT || 5000
const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`Not to be too technical, but according to chemistry ${beverage} is a solution ;)`)
    res.end()
}
http.createServer(requestListener).listen(PORT)