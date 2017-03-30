'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Post.hasMany(models.Comment, { foreignKey: 'postId' });
        Post.belongsTo(models.Newsfeed, { foreignKey: 'postId' });
      }
    }
  });
  return Post;
};