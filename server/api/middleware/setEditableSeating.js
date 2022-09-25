const db = require('../../models')

module.exports = async (req, res, next) => {
  console.log(req.params)
  try {
    const seating = await db.Seating.findOne({ where: { accessToken: req.params.accessToken } })
    if (seating.editToken === req.params.editToken)
      req.editableSeating = seating
    else
      req.editableSeating = null
    next()
  } catch (e) {
    next()
  }
}
