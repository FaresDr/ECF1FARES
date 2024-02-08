const { Project, task } = require("../config/db");
const jwt = require('jsonwebtoken');


exports.getAllProject = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const userId = decodedToken.userId;
        console.log(userId);
        const Projet = await Project.findAll({ where: { Userid: userId } });
        res.json(Projet);
    } catch (Projet) {
        res
            .status(500)
            .json({ message: `Erreur lors de la récupération des Project` });
    }
};

exports.createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const Userid = decodedToken.userId;
        await Project.create({ name, description, Userid });
        res.status(201).json(Project);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout du projet" });
    }
};
exports.UpdateProject = async (req, res) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const Userid = decodedToken.userId;
        await Project.update({ name, description } = req.body, { where: { Userid: Userid, id: req.params.id } })
        const projet = await Project.findOne({ where: { Userid: Userid, id: req.params.id } });
        if (!projet) {
            return res.status(404).json({ message: "Projet non trouvé." });
        }
        res.json(projet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.DeleteProject = async (req, res) => {
    try {
        const projet = await Project.findOne({ where: { id: req.params.id } });
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const Userid = decodedToken.userId;
        await task.destroy({where : {projectId: req.params.id}})
        await Project.destroy({ where: { id: req.params.id, Userid: Userid } })
        if (!projet) {
            return res.status(404).json({ message: "Etudiant non trouvé." });
        }
        res.json(projet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.createTask = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const userId = decodedToken.userId;
        console.log(userId);
        const Projet = await Project.findOne({ where: { Userid: userId, id: req.params.id } });
        if (Projet) {
            const { name, description } = req.body;
            const idProj = req.params.id
            await task.create({ name, description,projectId:idProj });
            res.status(201).json(task);
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la tâche" });
    }
};
exports.updateTask = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const userId = decodedToken.userId;
        console.log(userId);
        const Projet = await Project.findOne({ where: { Userid: userId, id: req.params.id } });
        if (Projet) {
            console.log("toto");
            const { name, description } = req.body;
            const idProj = req.params.id
            await task.update({ name, description}, {where: {id:req.params.idT}});
            res.status(201).json(task);
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la tâche" });
    }
};

exports.getTask = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const userId = decodedToken.userId;
        console.log(userId);
        const projet = await Project.findAll({ where: { Userid: userId } });
            const tasks = await task.findAll({where : {projectId : req.params.id}})
        
        res.json(tasks);
    } catch (tasks) {
        res
            .status(500)
            .json({ message: `Erreur lors de la récupération des Task` });
    }
};
exports.DeleteTask = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const Userid = decodedToken.userId;
        const projet =await Project.findOne({ where: { id: req.params.id, Userid: Userid } })
        await task.destroy({where : {projectId: req.params.id,id:req.params.idT}})
        if (!projet) {
            return res.status(404).json({ message: "Etudiant non trouvé." });
        }
        res.json(projet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
