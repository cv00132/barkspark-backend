'use strict';
module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define('Match', {
    senderId: DataTypes.INTEGER,
    recipientId: DataTypes.INTEGER,
    accepted: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Match.belongsTo(models.User, { as: 'Recipient', foreignKey: 'recipientId' });
        Match.belongsTo(models.User, { as: 'Sender', foreignKey: 'senderId' });
      }
    }
  });
  return Match;
};
