const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {
  app.post('/api/update/*', (req, res) => {
    const user = req.query.user;
    const leaves = req.query.leaves;

    if(req.session.isChanged){
      res.send("You need to login to do that!")
    }

    else{
      Branch.findOneAndUpdate(
        {_id: id},
        { $set: {leaves: leaves} },
        { new: true }, (err, updatedBranch) => {
          if(err){res.send(err)}
            res.sendStatus(200)
          })
      }

  })
}
