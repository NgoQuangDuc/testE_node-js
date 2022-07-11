import express from 'express';
import homeController from '../controller/homeController'
const router = express.Router()
const routes=(app)=>{
router.get('/',homeController.fetches)
return app.use('/',router)
}

module.exports = routes
