var loginRepo = require('../repository/login-repo')
//var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// process.env.SECRET_KEY = 'secret'

// var loginService = () => {
//     var checkUser = async (req) => {
//         var payload;
//         if (req.data.includes("@")) {
//             payload = {
//                 email: req.data,
//             }
//         }
//         else {
//             payload = {
//                 phone: req.data,
//             }
//         }
//         let result = await loginRepo.checkUserRepo(payload);
//         if (result.data) {
//             if (bcrypt.compareSync(req.password, result.data.password)) {
//                 let payloads = {
//                     _id: result.data._id,
//                     email: result.data.email
//                 }
//                 let token = jwt.sign(payloads, process.env.SECRET_KEY, {
//                     expiresIn: 60 * 30
//                 })
//                 result["data"] = token
//             } else {
//                 result["status"] = 1000;
//                 result["data"] = 'Incorrect Credentials'
//             }
//         }
//         return result;
//     }
//     return {
//         checkUser: checkUser
//     }
// }

// module.exports = loginService();