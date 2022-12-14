const express = require('express')
const morgan = require('morgan')
const config = require('../config')
const seatings = require('./seatings')
const cors = require('cors')

const api = express()

api.get('/', (req, res) => {
  res.json({
    hello: 'world',
  })
})

api.use(cors())
api.use(express.json())
api.use(morgan('dev'))
api.use(config.apiBase, seatings)

module.exports = api
