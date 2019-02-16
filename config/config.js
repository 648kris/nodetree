var env = process.env.NODE_ENV || 'dev';

if(env === 'production'){
  module.exports = require('./prod');
}

else{
  module.exports = require('./dev');
}
