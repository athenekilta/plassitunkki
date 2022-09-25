const router = require('express').Router()
const db = require('../../models')

router.get('/:accessToken', async (req, res) => {
  const token = req.params.accessToken
  const seating = await db.Seating.scope('readOnly').findOne({ where: {
    accessToken: token,
  }})
  if (!seating) {
    res.status(404)
    res.json({
      error: `no Seating found with accessToken ${token}`
    })
    return
  }
  res.json(seating)
})

module.exports = router
