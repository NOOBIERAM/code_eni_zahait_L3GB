const model = require('../models')
const bcrypt = require('bcrypt')
const {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require('../utils/tokenUtils');

exports.register = async (req, res) => {
  try {
    const {name, last_name, birth, birth_place, identity, phone_number, password, sexe} = req.body
    const email = req.body.email
    const [user, create] = await model.User.findOrCreate({
      where : {email},
      defaults : {name ,last_name, birth, birth_place, identity, phone_number, email,  sexe, password}
  })
  const token = generateToken(user)
  const refreshToken = generateRefreshToken(user);
  create ? res.status(200).json({ message : 'Succes', Authorization : `Bearer ${token}` , RefreshToken : `${refreshToken}` }) : res.status(409).json({ message : 'User already exist' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await model.User.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    res.json({ token, refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.refreshToken = async (req, res) => {
  const  refreshToken  = req.header('refreshToken')
  if (!refreshToken)
    return res.status(401).json({ message: 'No refresh token provided' });
  try {
    const decoded = verifyRefreshToken(refreshToken);
    const user = await model.User.findByPk(decoded.id);
    if (!user) return res.status(401).json({ message: 'User not found' });

    const newToken = generateToken(user);
    const newRefreshToken = generateRefreshToken(user);
    res.json({ token: `Bearer ${newToken}`, refreshToken: newRefreshToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
};

exports.me = async (req, res) => {
  try {
    const user = await model.User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({
      id: user.id,
      name: user.name,
      idetity : user.identity
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
