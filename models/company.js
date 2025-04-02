const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Company = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock_ticker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  exchange: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isin: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[A-Z]{2}[0-9A-Z]{10}$/,
    },
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  }, 
},
{
  tableName: 'companies',
  timestamps: false,
}
);

module.exports = Company;
