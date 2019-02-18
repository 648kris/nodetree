const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports = (app) => {

  app.post('/api/select', (req, res) => {
    console.log("post req to /api/select")
    let selected = req.query.selected;
    let userId = req.query.userId;
    console.log(selected)

    User.findOneAndUpdate(
      {_id: userId},
      { $set: {selected: selected} },
      {new: true},
       (err, data) => {
        if(err){res.send(err)}
        res.sendStatus(200)
      })


})
}
