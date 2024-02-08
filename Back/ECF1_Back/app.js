const express = require("express");
const isAuthenticated = require("./middlewares/authentication");
const DB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes")


const app = express();
const port = 3000;

app.use(express.json())
    .use("/api/user", userRoutes)
    .use("/api/project", projectRoutes)


DB.sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .then(() => {
    app.listen(port, () => {
      console.log("http://localhost:", port);
    });
  })
  .catch((err) => {
    console.log(
      "Erreur lors de la connexion à la base de données",
      err.message
    );
  });