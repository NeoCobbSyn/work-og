var jwtRepo = require('../repository/jwt-verify-repo')
var jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret'

var jwtService = () => {
    var verifyUser = async (data) => {
        let token = data['authorization'];
        var verify = await new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRET_KEY, function (err, tokendata) {
                if (err) reject(err)
                resolve(tokendata)
            })
        })

        let result = await jwtRepo.verifyUserRepo(verify);
        return result;
    }
    return {
        verifyUser: verifyUser
    }
}

module.exports = jwtService();