const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {
  app.post('/api/updatename', (req, res) => {
    const user = req.query.user;
    const name = req.query.name;
    const id = req.query.nodeid;


      Branch.findOneAndUpdate(
        {_id: id},
        { $set: {name: name} },
        {new: true}, (err, updatedBranch) => {
          if(err){res.send(err)}
          res.sendStatus(200)
        })
  

  })
}
