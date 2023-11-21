const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Books, { as: 'book', foreignKey: 'bookId' });
    Reviews.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
  };

  return Reviews;
};