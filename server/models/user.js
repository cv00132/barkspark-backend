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
        User.hasMany(models.Dog, { foreignKey:'userId' });
        User.hasMany(models.Post, { foreignKey: 'userId' });
        User.hasMany(models.Comment, { foreignKey: 'userId' });
        User.hasMany(models.Match, { as: 'Received', foreignKey: 'recipientId' });
        User.hasMany(models.Match, { as: 'Sent', foreignKey: 'senderId' });
        User.hasMany(models.Tag, { foreignKey: 'userId' });
        User.hasMany(models.Chat, { as: 'Receiver', foreignKey: 'receiverId' });
        User.hasMany(models.Chat, { as: 'Sender', foreignKey: 'senderId' });
        User.hasMany(models.Message, { foreignKey: 'userId' });
      }
    }
  });
  return User;
};
