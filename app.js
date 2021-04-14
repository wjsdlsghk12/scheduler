const express = require('express');
const app = express();
const fs = require('fs');
var index = require('./route/index.js')
app.use(express.static(__dirname + '/public'));


app.use('/',index);


app.get('/scheduler',function(req,res) {
  fs.readFile('./public/main.html', (err, data) => {
    res.statusCode = 200
    res.send(data)
  });
});


app.get('/scheduler/:id',function(req,res) {
  var topic=['javar is','javar1 is','javar3 is']
  var output=`
  <a href="/scheduler?id=0">javar</a>  
  <a href="/scheduler?id=1">javar1</a>
  <a href="/scheduler?id=2">javar2</a>
  <h1>${topic[req.params.id]}</h1>
  `  

 res.send(output);
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