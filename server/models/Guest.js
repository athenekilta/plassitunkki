const { Sequelize, DataTypes, Model } = require('sequelize')
module.exports = (sequelize) => {
  class Guest extends Model {}

  Guest.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      get() {
        const group = this.getDataValue('group');
        return group ? group : this.getDataValue('fullName');
      }
    },
  }, {
    sequelize,
    modelName: 'Guest',
  })

  return Guest
}
