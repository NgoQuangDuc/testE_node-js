import service from '../service/service'
import {ma_hoa} from '../config/connect'
const show=async(req,res)=>{
let shows=await service.showss(req.body)  

return res.status(200).json({
    data:shows.data
})
}
const answer=async(req,res)=>{
    
 
let d=await service.answer(req.body)
return res.status(200).json({
    data:d.d
})
}
const adds=async(req,res)=>{
let cc=await service.adds(req.body)
return  res.status(200).json({
    err:"Da them cau hoi"
})
}
const addanswer=async(req,res)=>{

let a=await service.addanswer(req.body)
return  res.status(200).json({
    err:"Da them cau hoi"
})
}
const pagtion=async(req,res)=>{
let data=await service.pagtions(req.body)
let countPage=data.data.count/3;
return res.status(200).json({
    countPage:countPage,
    data:data.data
})
}
const resgister = async(req, res) =>{

    let data=await service.resgister(req.body)
    return res.status(200).json({
        data:data.data
    })
}
const login=async(req,res)=>{
   let data= await service.login(req.body)
   if(data.EM===1){
   let ad=ma_hoa(data.a[0])
   res.cookie('cookieName',ad, { httpOnly: true,maxAge:1000*300})
   }
    return res.status(200).json({
        data:data.EM
    })

}
module.exports={show,answer,adds,addanswer,pagtion,resgister,login}