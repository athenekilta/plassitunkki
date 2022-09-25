const api = require('./api')

const port = 3000

//Create HTTP server and listen on port 3000 for requests
api.listen(port, () => {
  console.log(`Plassitunkki API listening on port ${port}`)
})
