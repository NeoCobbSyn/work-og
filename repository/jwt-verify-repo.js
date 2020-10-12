var User = require('../model/register-schema')

var jwtRepo = () => {
  var verifyUserRepo = (data) => {
      return User.findOne({ _id: data._id}).then(data => {
        console.log(data)
        var payload;
        if(data != null){
            payload = { 
                status: 200, 
                data: data 
            }
        }
        else{
            payload = { 
                status: 500, 
                error:"User does not exist"
            } 
        }
        return Promise.resolve(payload)
      }).catch(err => {
        console.log(data)
        return Promise.reject({ status: 500, data: err })
      })
  }
  return {
    verifyUserRepo: verifyUserRepo
  }
}

module.exports = jwtRepo();