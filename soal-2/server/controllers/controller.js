const { verifyPassword } = require('../helpers/hash.js');
const { generateToken } = require('../helpers/jwt.js');
const User = require('../models/user.js');

const UserModel = new User();

class Controller {
  static async login(req, res, next) {
    try {
      const {username, password} = req.body;

      const user = await UserModel.findByUsername(username);
      if (!user || !verifyPassword(password, user.Password)) {
        throw {msg: "Invalid Email/Password"}
      }
      
      const access_token = generateToken({
        username: user.Username
      })

      res.status(200).json({
        message: "Success Login",
        access_token
      })
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users =  await UserModel.getAllUsers();
      
      
      res.status(200).json({
        message: "Success get user",
        data: users
      })
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;