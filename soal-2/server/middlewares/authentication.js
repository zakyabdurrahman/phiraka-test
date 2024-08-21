const { verifyToken } = require('../helpers/jwt.js');
const User = require('../models/user.js');

const UserModel = new User();

async function authentication(req, res, next) {
  try {
    const {authorization} = req.headers;

    if (!authorization) throw {msg: "Please login first"};

    //decode token
    const payload = verifyToken(authorization.split(" ")[1]);

    const user = await UserModel.findByUsername(payload.username);

    if (!user) throw {msg: "Please login first"};

    req.loginData = {
      username: payload.Username
    };

    next();
  } catch (error) {
    console.log(error);
    next(error)
  }
}

module.exports = authentication;