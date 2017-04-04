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
        Match.belongsTo(models.User, { foreignKey: 'senderId' });
        Match.belongsTo(models.User, { foreignKey: 'recipientId' });
      }
    }
  });
  return Match;
};
