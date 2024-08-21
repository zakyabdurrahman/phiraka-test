const bcrypt = require('bcrypt');

function verifyPassword(string, hash) {
  return bcrypt.compareSync(string, hash)
}

function hashPassword(string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(string, salt);
}
module.exports = {verifyPassword, hashPassword}