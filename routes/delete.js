const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {

  app.post('/api/delete/', (req, res) => {
    if(!req.user){res.send("You have to login to do that!")}
    const id = req.query.nodeid;

Branch.remove({ _id: id, user: req.user._id }, function(err) {
    if (err) {res.send(err)}
    res.send("done")
});

  })
}
