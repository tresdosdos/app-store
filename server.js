const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const CLIENT_ID = 'e538cfcbe2e6441ca9575cc7e7873b62';
const CLIENT_SECRET = '506a292cb82940f885fa28dc30e6ef70';

//const REDIRECT_URI = 'http://localhost:5000';
const REDIRECT_URI = 'https://smartextask-app-store.herokuapp.com';

app.use(express.static(__dirname + '/dist/app-store'));

app.use(bodyParser.urlencoded({ extended: true })); ///нужное
app.use(bodyParser.json());

app.listen(process.env.PORT || 5000);

app.post('/gettoken', function (req, res) {
  const data = {'client_id' : CLIENT_ID,
    'client_secret' : CLIENT_SECRET,
    'grant_type' : 'authorization_code',
    'redirect_uri' : REDIRECT_URI,
    'code' : req.body.code
  };

// Configure the request
  const options = {
    uri: 'https://api.instagram.com/oauth/access_token',
    method: 'POST',
    form: data
  };
  request(options, function (error, response, body) {

    // to convert the string body to a usable object
    const pbody = JSON.parse(body);
    console.log(pbody);
    res.send(pbody);
  });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname +'/dist/app-store/index.html'));
});

console.log('Console listening on port ' + process.env.PORT);
