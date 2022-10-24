const { Sequelize } = require('sequelize');
var jwt = require('jsonwebtoken');
const connect=()=>{
const sequelize = new Sequelize('ktrata', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });
  try {
    console.log('Thanh cong')
  }
  catch (err) {
    console.error(err)
  }
}
const ma_hoa=(obj)=>{
  let token=null;
  try{
    token = jwt.sign(obj, "key");
  
  }
  catch(e){
    console.log(e)
  }
  return token

}
const giai_ma=(token)=>{
  let decoded=null;
try{
  decoded = jwt.verify(token, "key");
}
catch(e){
  console.log(e)
}
 
return decoded
}

module.exports = {connect,ma_hoa,giai_ma}