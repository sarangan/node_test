var http = require('http');
var fs = require('fs');
var events = require('events');
//var rs = fs.createReadStream('./text.txt');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
  console.log("I hear event stream!");
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');


// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     // rs.on('open', function(){
//     //   res.end("file opened!");
//     // });
// }).listen(8080);
