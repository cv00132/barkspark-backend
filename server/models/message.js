'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    msg: DataTypes.TEXT,
    senderId: DataTypes.INTEGER,
    recipientId: DataTypes.INTEGER,
    chatId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Message;
};