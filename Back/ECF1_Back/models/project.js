const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {
  const project = sequelize.define("project", {
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
    Userid:{
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    
    
    
   
 
  });



  return project;
};