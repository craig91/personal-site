'use strict'
module.exports = function(sequelize, DataTypes) {
  const Blog = sequelize.define('Blog', {
    hero: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    shortDescript: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    }
  })
  return Blog;
}
