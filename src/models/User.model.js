const sequelize = require("../utils/connection")
const {DataTypes} = require('sequelize')
const User = sequelize.define('user',{
  firstName :{
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'last_name'
  },
  email :{
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true
  },
  password : {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY
  }
})

module.exports = User
