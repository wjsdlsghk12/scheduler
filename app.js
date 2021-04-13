const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){  
  fs.readFile('./public/index.html', (err, data) => {
  res.statusCode = 200
  res.end(data)
  });
});

app.get('/scheduler',function(req,res) {
  fs.readFile('./public/main.html', (err, data) => {
    res.statusCode = 200
    res.end(data)
  });
});


app.get('/scheduler/menu',function(req,res) {

 res.status = 200;
 res.end(a);
});





app.listen(3000,() => console.log('example app listening on port 3000!'));








// var http = require('http');
// var fs = require('fs');
// var url = require('url');




// var app = http.createServer(function (req, res) {
//   var _url = req.url;

//   if (pathname === '/') {

  
//   // if (pathname == '/scheduler/menu') {
//   //   fs.readFile('./public/botton/menu2.js', (err, data) => {
//   //     res.statusCode = 200
//   //     res.setHeader('Content-Type',"text/javascript");
//   //     res.end(data)
//   //   });
//   // }



// });
// app.listen(3000);