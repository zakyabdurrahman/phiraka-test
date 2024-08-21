const jwt = require('jsonwebtoken');
//for ease of testing, the JWT secret is hardcoded instead of being put in .env file
const SECRET = "secret"

function generateToken(payload) {
  return jwt.sign(payload, SECRET);
}

module.exports = {generateToken}