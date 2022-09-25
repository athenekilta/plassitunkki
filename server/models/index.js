const { Sequelize } = require('sequelize')
const config = require('../config')
const modelNames = ['Seating', 'Table', 'Guest'] // requires happen later
const createAssociations = require('./associations')
const db = {}

db.Sequelize = Sequelize
db.sequelize = new Sequelize(config.db[config.env])

// require models, and give new `sequelize` instance as parameter
const models = modelNames.map(m => require(`./${m}`)(db.sequelize))

// save each model (imported in the beginning of this file) to db object
// so that they are available with their modelName e.g. db.Seating
models.forEach(model => db[model.name] = model)
createAssociations(db)

module.exports = db
