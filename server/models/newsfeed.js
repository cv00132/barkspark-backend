'use strict';
module.exports = function(sequelize, DataTypes) {
  var Newsfeed = sequelize.define('Newsfeed', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Newsfeed;
};
