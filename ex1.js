var http = require('http');
var url =  require('url');
var fs = require('fs');
//var uc = require('upper-case');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(800);

http.createServer(function(req, res){
   res.writeHead(200, {'Content-Type': 'text/plain'});
//   //res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("Date: " + new Date());
  // res.write(req.url);
  // res.write('</br/>');

  //-----------url paring
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;

  // res.end(txt);
  //res.end("Hello node");
  //res.end();
  //console.log("request");

  //-----------fs
  // fs.readFile('test.html', function(err, data){
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   res.end();
  // });

  // var data = fs.readFileSync('test.html');
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write(data);
  // res.end();

  // fs.appendFile("text.txt", 'hello test file!', function(err)=>{
  //   if(err) throw err;
  //   console.log('Saved');
  //   res.end("appendFile");
  // });

  // fs.open('text1.txt', 'w', function(err, file){
  //   if(err) throw err;
  //   res.end("Saved!");
  // });

  // fs.writeFile('message.txt', 'Hello Node.js', (err) => {
  //   if (err) throw err;
  //   console.log('The file has been saved!');
  // });

  // fs.unlink('message.txt', function(err){
  //   if(err) throw err;
  //   console.log('deleted!');
  // });

  // fs.rename('text1.txt', 'text2.txt', function (err) {
  //   if (err) throw err;
  //   console.log('File Renamed!');
  // });

  //res.write(uc("Hello World!"));

//
}).listen(8080);
console.log("listening");
