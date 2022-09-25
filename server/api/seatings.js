const router = require('express').Router()
const db = require('../models')

router.post('/new_seating', async (req, res) => {
  const name = req.body.name
  if (!name) {
    res.status(400)
    res.json({
      error: 'name attribute missing',
    })
  }
  const seating = await db.Seating.create({
    name,
  })
  res.json(seating)
})

router.get('/:accessToken', async (req, res) => {
  const seating = await db.Seating.scope('readOnly').findOne({ where: {
    accessToken: req.params.accessToken,
  }})
  res.json(seating)
})

module.exports = router
