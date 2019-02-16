module.exports =
  function path(){
    const env = process.env.NODE_ENV || 'dev';
    if(env === 'production'){
      return ""
      }
      return "http://localhost:5000"
    }
