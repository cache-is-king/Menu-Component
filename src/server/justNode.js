require('newrelic');
var http = require('http');
const path = require('path');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const db = require('../../db/dbHelpers.js');
const mongoose = require('mongoose');

const port = process.env.PORT || 3005;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/silverspoon';

mongoose.connect(MONGO_URI);


http.createServer(function (req, res) {
  if (req.url === '/'){
    fs.readFileAsync(path.join(__dirname, '../client/index.html'), 'utf8')
    .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }).catch(() => {
        res.writeHead(500);
        res.end();
    })
  } else if (req.url.match('.js')) {
    let stream = fs.createReadStream(path.join(__dirname, '../public/bundle.js'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    stream.pipe(res);
  } else {
    let params = req.url.split('/');
      db.find({query: `menu.${params[4]}`, name: `restaurant 100000`}, (error, data) => {
          if (error) {
              res.writeHead(500);
              res.end();
          } else {
              let result = data.menu.lunch
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(result));
          }
      })
  }
}).listen(3005, function(){
 console.log("server start at port 3005");
}); 