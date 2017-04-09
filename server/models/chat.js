'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chat = sequelize.define('Chat', {
    senderId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
    socketId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Chat.hasMany(models.Message, { foreignKey: 'chatId' });
      }
    }
  });
  return Chat;
};
