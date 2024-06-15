const jwt = require('jsonwebtoken');
const {
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
} = require('../../config');

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_SECRET);
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  verifyRefreshToken,
};
