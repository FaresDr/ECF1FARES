const express = require("express");
const isAuthenticated = require("../middlewares/authentication");
const projectController = require("../controllers/projectController");

const router = express.Router();

router.get("/", isAuthenticated,projectController.getAllProject);
router.get("/:id", isAuthenticated,projectController.getTask);
router.put("/update/:id/:idT", isAuthenticated,projectController.updateTask);
router.post("/create",isAuthenticated, projectController.createProject);
router.post("/create-task/:id",isAuthenticated, projectController.createTask);
router.put("/update/:id",isAuthenticated, projectController.UpdateProject);
router.delete("/delete/:id/:idT",isAuthenticated, projectController.DeleteProject);


module.exports = router;