const sequelize = require("../db");
const { DataTypes, Sequelize} = require('sequelize');

const Air = sequelize.define('Air', {
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  }, {
    // Other model options go here
  });
  // `sequelize.define` also returns the model
  console.log(Air === sequelize.models.Air); // true

  console.log("The table for the User model was just (re)created!");
  module.exports = {
  Air
}
