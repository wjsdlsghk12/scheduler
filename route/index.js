const express = require('express');
const router = express.Router();
const fs = require('fs');




router.get('/',function(req,res){  
    fs.readFile('./public/index.html', (err, data) => {
    res.statusCode = 200;
    document.querySelector('.login').innerHTML = 'adb';
    res.send(data);
    document.querySelector('.login').innerHTML = 'adb';
    });
  });

module.exports = router;