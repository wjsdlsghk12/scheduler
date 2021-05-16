const express = require('express');
const app = express();
const fs = require('fs');
var index = require('./route/index.js')
app.use(express.static(__dirname + '/public'));


// app.use('/',index);


// app.get('/scheduler',function(req,res) {
//   fs.readFile('./public/main.html', (err, data) => {
//     res.statusCode = 200
//     res.send(data)
//   });
// });


// app.get('/scheduler/:id',function(req,res) {
//   var topic=['javar is','javar1 is','javar3 is']
//   var output=`
//   <a href="/scheduler?id=0">javar</a>  
//   <a href="/scheduler?id=1">javar1</a>
//   <a href="/scheduler?id=2">javar2</a>
//   <h1>${topic[req.params.id]}</h1>
//   `  

//  res.send(output);
// });

app.get("/main/schedule",function(req,res){
  res.send('d');
})


app.listen(3001,() => console.log('example app listening on port 3001!'));
