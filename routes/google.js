var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleServ = require('../service/google-service')
var CLIENT_HOME_PAGE_URL = "http://localhost:3001";

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: "976445073212-cavs2vd2nfdkl7b68lqoavo6v5di0e81.apps.googleusercontent.com",
    clientSecret: "r_u882CKpoGejTrSVb93BePt",
    callbackURL: "http://localhost:3000/api/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        // console.log(accessToken, refreshToken, profile, done)
        var payload = {
            email: profile.emails[0].value,
            phone_no: 'N/A',
            password: 'N/A',
            signUpWith: 'google',
            created_on: new Date()
        }
        googleServ.checkUser(payload).then(data => {
            console.log(data)
            done(null, data);
        }).catch(err => {
            console.log(err)
            done(null, err);
        })
    }
));

router.get('/',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback',
    passport.authenticate('google'), function (req, res) {
        console.log(res)
    });

module.exports = router;