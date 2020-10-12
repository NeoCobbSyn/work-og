var express = require('express');
var router = express.Router();
var jwtServ = require('../service/jwt-verify-service')

router.get('/user', async (req, res) => {
    jwtServ.verifyUser(req.headers).then(data => {
    console.log(data)
    res.json(data)
  }).catch(err => {
    console.log(err)
    res.json(err)
  })

})
module.exports = router;