const router = require('express').Router()
const view = require('./view')
const edit = require('./edit')

router.use('/', view)
router.use('/', edit)

module.exports = router
