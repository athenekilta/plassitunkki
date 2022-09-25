const { Sequelize, DataTypes, Model } = require('sequelize')
module.exports = (sequelize) => {
  class Seating extends Model {}

  Seating.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessToken: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    editToken: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
  }, {
    sequelize,
    modelName: 'Seating',
    scopes: {
      readOnly: {
        attributes: { exclude: ['editToken'] },
      },
    },
  })

  return Seating
}
