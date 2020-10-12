var loginRepo = require('../repository/login-repo')
var registerRepo = require('../repository/register-repo')

var googleService = () => {
    var checkUser = async (data) => {

        var currentUser = await loginRepo.checkUserRepo(data)
        if (currentUser.status == 500) {
            var newUser = await registerRepo.createUserRepo(data)
            if (newUser) {
                return newUser
            }
        }
        else {
            return currentUser
        }
    }

    return {
        checkUser: checkUser
    }
}

module.exports = googleService();