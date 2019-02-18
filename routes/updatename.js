const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {
  app.post('/api/updatename', (req, res) => {
    if(!req.user){res.send("You have to login to do that!")}
    const name = req.query.name;
    const id = req.query.nodeid;

    Branch.findOneAndUpdate(
      {_id: id, user: req.user._id},
      { $set: {name: name} },
      {new: true}, (err, data) => {
        if(err){res.send(err)}
        res.send(data)
      })
  })
}
