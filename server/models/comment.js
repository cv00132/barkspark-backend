'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Comment;
};