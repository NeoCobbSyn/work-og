var User = require('../model/register-schema')

var registerRepo = () => {
  var createUserRepo = (data) => {
      let user = new User(data);
      return user.save().then(data => {
        console.log(data)
        return Promise.resolve({ status: 200, data: data })
      }).catch(err => {
        return Promise.reject({ status: 500, data: err })
      })
  }
  return {
    createUserRepo: createUserRepo
  }
}

module.exports = registerRepo();