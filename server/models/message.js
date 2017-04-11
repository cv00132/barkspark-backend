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
        Message.belongsTo(models.Chat, { as: 'Inbox', foreignKey: 'chatId' });
        Message.belongsTo(models.Chat, { as: 'Outbox', foreignKey: 'chatId' });
      }
    }
  });
  return Message;
};
