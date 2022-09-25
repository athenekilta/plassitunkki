const api = require('./api')
const config = require('./config')

//Create HTTP server and listen on port 3000 for requests
api.listen(config.port, () => {
  console.log(`Plassitunkki API listening on port ${config.port}`)
})
