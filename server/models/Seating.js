const { Sequelize, DataTypes, Model } = require('sequelize')
const { v4: uuidv4 } = require('uuid')

module.exports = (sequelize) => {
  class Seating extends Model {
    async revokeAccessToken() {
      return await this.update({
        accessToken: uuidv4()
      })
    }
    async revokeEditToken() {
      return await this.update({
        editToken: uuidv4()
      })
    }
  }

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
