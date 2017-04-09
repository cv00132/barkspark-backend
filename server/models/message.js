'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    msg: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    chatId: DataTypes.INTEGER,
    socketId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Message;
};