var User = require('../model/register-schema')

var loginRepo = () => {
  var checkUserRepo = (data) => {
    return User.findOne({ $or: [{ email: data.email }, { phone_no: data.phone }] }).then(data => {
      console.log(data)
      var payload;
      if (data != null) {
        payload = {
          status: 200,
          data: data
        }
      }
      else {
        payload = {
          status: 500,
          error: "User does not exist"
        }
      }
      return Promise.resolve(payload)
    }).catch(err => {
      console.log(data)
      return Promise.reject({ status: 500, data: err })
    })
  }
  return {
    checkUserRepo: checkUserRepo
  }
}

module.exports = loginRepo();