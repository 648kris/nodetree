const mongoose = require('mongoose');
const Branch = mongoose.model('branch');

module.exports = (app) => {

  app.get('/api/usernodes', (req, res) => {
    const user = req.query.user;

    Branch.find(
      {user: user},
      (err, data) => {
        if(err){res.send(err)}
        res.send(data)
      })
  })
}
