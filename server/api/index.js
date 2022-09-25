const express = require('express')
const seatings = require('./seatings')

const api = express()

api.get('/', (req, res) => {
  res.json({
    hello: 'world',
  })
})

api.use(express.json())
api.use(seatings)

module.exports = api
