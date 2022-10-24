import db from '../db/models/index'
import _ from 'lodash'
const showss=async(home)=>{

    let a=  await db.fetchQuestion.findAll({
        where: {
          level: home.level
        },raw: true
      });
   
    return{
        data:a
    }
}
const answer=async(home)=>{
var count =0;
let a=  await db.fetchAnswer.findAll({
    attributes: ['answer_id'],
    where: {

      level: home.id
    },raw: true
  });
 let b= home.ds.map((e)=>{
    let d= a.some((r)=>+r.answer_id===+e.id_anserwer)
 return d
  })
  
let y=b.map(e=>{
    if(e===true)  count++
})
return{
    d:count
}
}
const adds=async(home)=>{
await db.fetchQuestion.bulkCreate(home)
return{
  data:"Successfully created"
}
}
const addanswer=async(home)=>{
  await db.fetchAnswer.bulkCreate(home)
  return{
    data:"Successfullyadd"
  }
}
const pagtions=async(home)=>{
  let offset = (home.currentItems - 1) * 3
 let data=await db.fetchQuestion.findAndCountAll({
    limit: 3,
    offset: offset,raw: true
})
return {data:data};
}
const resgister=async(home)=>{

  const jane = await db.Acount.create(home);
 return{
  data:"Successfully"
 }
}
const login =async(home)=>{
 let a= await db.Acount.findAll({
    attributes: ['user', 'password','group_id'],  where: {
      user: home.user
    },raw: true
    
  });
  if(_.isEmpty(a)){
    return{
      EM:0
    }
  }
  if(a[0].user===home.user){
    if(a[0].password===home.password){
      return{
        a:a,
        EM:1
      }
    }
    else return{
      EM:0
    }
  }
return{
  EM:0
}
}
module.exports ={login,showss,answer,adds,addanswer,pagtions,resgister}