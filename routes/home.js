module.exports = (app) => {
  app.get('/c', (req, res) => {
    res.send("kristen's app api")
  })
}
