const express = require('express');
const config = require('./config/config');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./models/Branch');
const passportConfig = require('./services/passport');
var mongodb = require('mongodb');
var Db = require('mongodb').Db;
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors')

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
}
app.use(cors(corsOptions))


app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [config.cookieKey]
  })
)


app.use(passport.initialize());
app.use(passport.session());



let dburl = 'mongodb://'+config.dbusername+':'+config.dbpassword+'@ds121475.mlab.com:21475/nodetree';

mongoose.connect(dburl)

require('./routes/authroutes')(app);
require('./routes/home')(app);
require('./routes/new')(app);
require('./routes/update')(app);
require('./routes/updatename')(app);
require('./routes/delete')(app);
require('./routes/allnodes')(app);
require('./routes/usernodes')(app);
require('./routes/usernodes')(app);
require('./routes/select')(app);
require('./routes/selected')(app);

if(process.env.NODE_ENV === "production") {
  //express will serve up production assets
  //like out mainjs file or main css file
  app.use(express.static('client/build'));

  //express will serve up indexhtml file
  //if it doesnt recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


const PORT = process.env.PORT || 5000
app.listen(PORT)
