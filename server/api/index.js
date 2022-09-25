const express = require('express')

const api = express()

api.get('/', (req, res) => {
  res.json({
    hello: 'world',
  })
})

module.exports = api
