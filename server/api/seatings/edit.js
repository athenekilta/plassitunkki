const router = require('express').Router()
const db = require('../../models')
const setEditableSeating = require('../middleware/setEditableSeating')

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

const revokeToken = async (type, req, res) => {
  // not how middlewares are supposed to be used, sorry
  setEditableSeating(req, res, async () => {
    const seating = req.editableSeating
    if (!seating) {
      res.status(403)
      res.json({
        error: `not authorized: accessToken ${req.params.accessToken}, editToken ${req.params.editToken}`
      })
      return
    }
    if (type === 'edit')
      res.json(await seating.revokeEditToken())
    else
      res.json(await seating.revokeAccessToken())
  })
}

router.post('/:accessToken/edit/:editToken/revokeAccessToken', async (req, res) => {
  await revokeToken('access', req, res)
})

router.post('/:accessToken/edit/:editToken/revokeEditToken', async (req, res) => {
  await revokeToken('edit', req, res)
})

module.exports = router
