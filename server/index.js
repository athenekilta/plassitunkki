const api = require('./api')
const config = require('./config')
const db = require('./models')

//Create HTTP server and listen on port 3000 for requests
const start = async () => {
  await db.sequelize.sync()
  api.listen(config.port, () => {
    console.log(`Plassitunkki API listening on port ${config.port}`)
  })
}

start()
