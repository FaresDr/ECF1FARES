const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {        
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
  });

  return user;
};
