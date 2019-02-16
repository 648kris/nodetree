const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config/config');
const mongoose = require('mongoose');

const User = mongoose.model('user');

passport.serializeUser( (user, done) => {
  //console.log(user)
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

passport.use(new GoogleStrategy({
  clientID: config.googleClientId,
  clientSecret: config.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken)
    User.findOne({ googleId: profile.id }).then((existingUser) => {
      if(existingUser){ done(null, existingUser)}
      else{ new User({googleId: profile.id}).save(); res.cookie('cookieName', 'cookieValue', {key:"testvalue"})
      .then(user => done(null, user))}
    })
  }
  )
);
