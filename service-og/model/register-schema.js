var mongoose = require('mongoose')
var Schema = mongoose.Schema

var registerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone_no: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  signUpWith: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', registerSchema)
