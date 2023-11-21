const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cover_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Books.associate = function(models) {
      Books.hasMany(models.Reviews, { as:'reviews', foreignKey: 'bookId' });
    };
  
    return Books;
  };
