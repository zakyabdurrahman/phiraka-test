const bcrypt = require('bcrypt');

function verifyPassword(string, hash) {
  return bcrypt.compareSync(string, hash)
}

module.exports = {verifyPassword}