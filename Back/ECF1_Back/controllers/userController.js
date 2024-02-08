const { User } = require("../config/db");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getAllUsers = async (req, res) => {
    try {
      const utilisateur = await User.findAll();
      res.json(utilisateur);
    } catch (utilisateur) {
      res
        .status(500)
        .json({ message: "Erreur lors de la récupération des users" });
    }
  };

exports.createUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password:hashedPassword,role });
    res.status(201).json(User);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout de l'utilisateur" });
  }
};
exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({where : { username : req.body.username} });
      console.log(user);
      if (!user) {
        return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
   
      const passwordMatch = await bcrypt.compare(password, user.password);
   
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
   
      const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  exports.logout = (req,res) => {
    res.clearCookie('jwt');
    res.redirect('/login');
};