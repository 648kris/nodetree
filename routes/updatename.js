const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {
  app.post('/api/updatename', (req, res) => {
    console.log("/api/updatename")
    const name = req.query.name;
    const id = req.query.nodeid;
    console.log(name)


      Branch.findOneAndUpdate(
        {_id: id},
        { $set: {name: name} },
        {new: true}, (err, data) => {
          if(err){res.send(err)}
          res.send(data)
        })


  })
}
