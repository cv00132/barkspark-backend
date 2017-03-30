'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    photoUrl: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Photo.hasMany(models.Comment, { foreignKey: 'photoId' });
        Photo.belongsTo(models.Newsfeed, { foreignKey: 'photoId' });
      }
    }
  });
  return Photo;
};
