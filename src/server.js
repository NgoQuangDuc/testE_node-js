import express from 'express';
import configViewEngine from'./config/viewEngine'
import routes from './router/router'
import {connect} from './config/connect'
var cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config();
const port = process.env.PORT ||8080;
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

configViewEngine(app)
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







