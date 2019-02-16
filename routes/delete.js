const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {
  app.delete('/api/delete/', (req, res) => {
    const id = req.query.nodeid;
    const user = req.query.user;

    if(req.session.isChanged){
      res.send("You need to login to do that!")
    }

    else{
      Branch.findOneAndDelete(
        {_id: id, user: user}, (err, data) => {
          if(err){res.send(err)}
          res.sendStatus(200)
      })
    }

  })
}
