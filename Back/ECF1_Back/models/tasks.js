const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {
  const task = sequelize.define("tasks", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {        
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    
    
    
   
 
  });



  return task;
};