const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecf_database", "root", "Fares_Dries_59", {
  host: "localhost",
  dialect: "mysql",
});

// Synchronisation des modèles

const User = require("../models/users")(sequelize);
const Project = require("../models/project")(sequelize)
const task = require("../models/tasks")(sequelize)


Project.hasMany(task)
sequelize
  .sync({ force: false })
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
  );

module.exports = {
  sequelize,
  User,
  Project,
  task
};