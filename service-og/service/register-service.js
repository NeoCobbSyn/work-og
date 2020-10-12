var registerRepo = require('../repository/register-repo')
var bcrypt = require('bcrypt');

var registerService = () => {
  var createUser = async (data) => {

    var password = data.password
    var saltRounds = 10;
    var hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
    var payload = {
      email: data.email,
      phone_no: data.phone,
      password: hashedPassword,
      signUpWith: data.signUpWith,
      created_on: new Date()
    }
    let result = await registerRepo.createUserRepo(payload);
    return result;
  }

  return {
    createUser: createUser
  }
}

module.exports = registerService();