'use strict';
module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define('Dog', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Dog;
};