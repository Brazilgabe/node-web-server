let http = require('http')
let asciify = require('asciify');
let text = "Up Up and Away"



let server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    asciify(text, {
        font: 'larry3d'
    }, function(err, result) {
        if (err) {
            response.end('sorry, we couldnt generate that art')
        } else {
            response.end(result)
        }
    })
})
server.listen(3000, '127.0.0.1', function() {
    console.log('HTTP Server Started');
})
