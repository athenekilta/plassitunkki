const express = require('express')
const config = require('../config')
const seatings = require('./seatings')

const api = express()

api.get('/', (req, res) => {
  res.json({
    hello: 'world',
  })
})

api.use(express.json())
api.use(config.apiBase, seatings)

module.exports = api
