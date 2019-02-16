const mongoose = require('mongoose');

const Branch = mongoose.model('branch');

module.exports = (app) => {

   /*function randomNumber(min, max) {
    let r = Math.random() * (max-min) + min;
    return Math.floor(r);
  }*/

  app.post('/api/new', (req, res) => {
    console.log("req.user= "+req.user)
    const user = req.query.user;
    const leaves = req.query.leaves;
    const name = req.query.name;
    console.log("user= "+user)

  //  if(req.session.isChanged){
  //    res.send("You need to login to do that!")
  //  }
  /*  let randomLength = randomNumber(1, 15)
    let leaves = [];

    for(let i=0;i>random.length;i++){
      let random = randomNumber(1,99)
         leaves.push(random)
    } */
    //let leaves = [1,2,3,4,5,6,7]
  //  else{
      Branch.create(
        { user: user, leaves: leaves, name: name, timestamp: new Date().getTime() },
        (err, data) => {
          if(err){res.send(err)}
          res.sendStatus(200)
        })
    //  }

  })
}
