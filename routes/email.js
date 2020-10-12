var express = require('express');
var router = express.Router();
var emailServ = require('../service/email-service')

router.post('/mail', async (req, res) => {
    emailServ.sendEmail(req.body).then(data => {
    console.log(data)
    res.json(data)
  }).catch(err => {
    console.log(err)
    res.json(err)
  })

})
module.exports = router;