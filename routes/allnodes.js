const mongoose = require('mongoose');
const Branch = mongoose.model('branch');

module.exports = (app) => {

  app.get('/api/allnodes', (req, res) => {
    Branch.find(
      (err, data) => {
        if(err){res.send(err)}
        res.send(data)
      }
    )
  })
}
