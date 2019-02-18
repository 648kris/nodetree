const passport = require('passport');

module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/'
        }));

  app.get('/api/currentuser', (req, res) => {
    res.send(req.user)
  })

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send("You are logged out of Kristen's app.")
  })

}
