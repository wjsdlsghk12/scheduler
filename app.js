var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require("path")

var mimeType = {
  ".ico": "image/x-icon",
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".eot": "aplication/vnd.ms-fontobject",
  ".ttf": "aplication/font-sfnt",
}

var app = http.createServer(function (req, res) {
  var _url = req.url;
  // var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  var publicPath = path.join(__dirname, "/public")
  var ext = path.parse(req.url).ext
  console.log(pathname);

  if (Object.keys(mimeType).includes(ext)) {
    fs.readFile(`${publicPath}${req.url}`, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Not found');
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', mimeType[ext]);
        res.end(data)
      }
    })
   
  }  

  if (pathname === '/') {

    fs.readFile('./public/index.html', (err, data) => {
      res.statusCode = 200
      res.end(data)
    });
  };


  if (pathname == '/scheduler') {
    fs.readFile('./public/main.html', (err, data) => {
      res.statusCode = 200
      res.end(data)
    });
  }
  
  // if (pathname == '/scheduler/menu') {
  //   fs.readFile('./public/botton/menu2.js', (err, data) => {
  //     res.statusCode = 200
  //     res.setHeader('Content-Type',"text/javascript");
  //     res.end(data)
  //   });
  // }



});
app.listen(3000);