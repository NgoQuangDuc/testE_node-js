import express from 'express';
import configViewEngine from'./config/viewEngine'
import routes from './router/router'
const app = express()
require('dotenv').config();
const port = process.env.PORT ||8080;


configViewEngine(app)
routes(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







