
const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = function(models) {
    Users.hasMany(models.Events, { as: 'events', foreignKey: 'userId' });
    Users.hasMany(models.Reviews, { as: 'reviews', foreignKey: 'userId' });
  };

  return Users;
};