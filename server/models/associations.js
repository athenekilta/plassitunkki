module.exports = (db) => {
  db.Seating.hasMany(db.Table)
  db.Table.belongsTo(db.Seating)

  db.Table.hasMany(db.Guest)
  db.Guest.belongsTo(db.Table)

  db.Seating.hasMany(db.Guest)
  db.Guest.belongsTo(db.Seating)
}
