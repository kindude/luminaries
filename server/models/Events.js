const { DataTypes } = require('sequelize');
const { Users } = require('../models');


module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Events.associate = function(models) {
    Events.belongsTo(models.Users, { as: 'lecturer', foreignKey: 'userId' });
  };

  return Events;
};
