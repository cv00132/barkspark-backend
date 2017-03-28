'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    DOB: DataTypes.DATE,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    profilePic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Dog, { foreignKey:'userId' })
      }
    }
  });
  return User;
};
