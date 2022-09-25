const { Sequelize, DataTypes, Model } = require('sequelize')
module.exports = (sequelize) => {
  class Table extends Model {}

  Table.init({
    length: {
      type: DataTypes.INTEGER,
    },
    capacity: {
      type: DataTypes.VIRTUAL,
      get() {
        return 2 * this.length
      },
      set() {
        throw 'Cannot set a virtual attributes'
      },
    },
  }, {
    sequelize,
    modelName: 'Table',
  })

  return Table
}
