let http = require('http')
let fs = require('fs');

let server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    if (request.url === '/salmon.css') {
        fs.readFile('salmon.css', function(err, page) {
            response.writeHead(200, {
                'Content-Type': 'text/css'
            });
            response.end(page);
        });
    } else {
        fs.readFile('haiku.html', 'ascii', function(err, data) {
            if (err) {
                response.end('sorry, we couldnt generate that beautiful work of salmon')
            } else {
                response.end(data)
            }
        })
    }
})
server.listen(3000, '127.0.0.1', function() {
    console.log('HTTP Server Started');
})
