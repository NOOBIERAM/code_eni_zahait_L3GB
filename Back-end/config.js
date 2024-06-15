require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  TOKEN_EXPIRY: '1h',
  REFRESH_TOKEN_EXPIRY: '7d'
};

