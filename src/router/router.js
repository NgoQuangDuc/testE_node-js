import express from 'express';
import homeController from '../controller/homeController'
import { giai_ma } from '../config/connect';
const checkMiddleware =(req,res,next)=>{

let a=giai_ma(req.cookies.cookieName)
if(a.user){
req.user=a.group_id
    next();
}
else{
    console.log("LOI") 
}
}
const checkPermissions =(req, res, next) => {
if(+req.user===+1) return next();
else {
 return  res.status(200).json({
        err:"ban khong co quyen them cau hoi"
    })
}
}
const router = express.Router()
const routes=(app)=>{
router.post('/',homeController.show)
router.post('/pagtions',checkMiddleware,homeController.pagtion)
router.post('/answer',homeController.answer)
router.post('/add',checkMiddleware,checkPermissions,homeController.adds)
router.post('/addanswer',checkMiddleware,checkPermissions,homeController.addanswer)
router.post('/resgister',homeController.resgister)
router.post('/login',homeController.login)
return app.use('/',router)
}

module.exports = routes
