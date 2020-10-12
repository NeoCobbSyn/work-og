var express = require('express');
var router = express.Router();
var registerServ = require('../service/register-service')

router.post('/create-user', async (req, res) => {
  registerServ.createUser(req.body).then(data => {
    console.log(data)
    res.json(data)
  }).catch(err => {
    console.log(err)
    res.json(err)
  })

})
module.exports = router;