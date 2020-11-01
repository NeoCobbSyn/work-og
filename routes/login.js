var express = require('express');
var router = express.Router();
var loginServ = require('../service/login-service')

router.post('/login', async (req, res) => {
    loginServ.checkUser(req.body).then(data => {
    console.log(data)
    res.json(data)
  }).catch(err => {
    console.log(err)
    res.json(err)
  })
})
  router.get('/test', (req, res) => {
    console.log("Testing is successful");
    return res.json({'key': 10})
  })
module.exports = router;