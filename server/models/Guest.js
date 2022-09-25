const { Sequelize, DataTypes, Model } = require('sequelize')
module.exports = (sequelize) => {
  class Guest extends Model {}

  Guest.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Guest',
  })

  return Guest
}
