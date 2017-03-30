'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    postId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Comment.belongsTo(models.Post, { foreignKey: 'postId' } );
      }
    }
  });
  return Comment;
};
