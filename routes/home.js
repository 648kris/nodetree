module.exports = (app) => {
  app.get('/c', (req, res) => {
    console.log("req.user =" +req.user)
    res.send("kristen's app api")
  })
}
