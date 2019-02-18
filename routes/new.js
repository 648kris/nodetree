const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {

  app.post('/api/new', (req, res) => {
    if(!req.user){res.send("You have to login to do that!")}
    const leaves = req.query.leaves;
    const name = req.query.name;

    Branch.create(
      { user: req.user._id, leaves: leaves, name: name, timestamp: new Date().getTime() },
      (err, data) => {
        if(err){res.send(err)}
        res.sendStatus(200)
      })
  })
}
