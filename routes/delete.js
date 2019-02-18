const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {

  app.post('/api/delete/', (req, res) => {
      console.log("api/delete")
    const id = req.query.nodeid;
    const user = req.query.user;
    console.log(id)

/*Branch.deleteOne({ id:id }, (err)=>{
  if(err){res.send(err)}
  res.send("done")
})*/

Branch.remove({ _id: id }, function(err) {
    if (err) {res.send(err)}
    res.send("done")
});

  })
}
