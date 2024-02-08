const { Sequelize } = require("sequelize");
const { sequelize } = require("../config/db");

var person = sequelize.define('Person',{

  name:Sequelize.STRING
}
);
var father = sequelize.define('Father',{

  name:Sequelize.STRING,
  personID:{
    type: Sequelize.INTEGER,
    references:'persons',
    referencesKey:'id'
  }
}
);
person.hasMany(father)
return person,father