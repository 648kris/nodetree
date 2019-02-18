const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = (app) => {

  app.get('/api/selected', (req, res) => {
    const userId = req.query.user;

res.send(req.user.selected)

})

}
