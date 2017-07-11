'use strict'
module.exports = function(sequelize, DataTypes) {
  const Project = sequelize.define('Project', {
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    DemoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    gitUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    }
  })
  return Project;
}
