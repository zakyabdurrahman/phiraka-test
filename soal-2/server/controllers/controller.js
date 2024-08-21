const { default: axios } = require('axios');
const { verifyPassword } = require('../helpers/hash.js');
const { generateToken } = require('../helpers/jwt.js');
const User = require('../models/user.js');
const { RECAPTCHA_SECRET } = require('../constants/constants.js');


const UserModel = new User();

class Controller {
  static async login(req, res, next) {
    try {
      const {username, password, recaptchaToken} = req.body;
      
      
      //verify captcha first
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify`,
        {},
        {
          params: {
            secret: RECAPTCHA_SECRET,
            response: recaptchaToken
          }
        }
      );

      
      

      if (!response.data?.success) {
        throw {msg: "Please fill reCAPTCHA"};
      }
      

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

  static async addUser(req, res, next) {
    try {
      const {username, password} = req.body;
      await UserModel.addUser({username, password})

      res.status(200).json({
        message: `Success added user ${username}`
      })
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const {id} = req.params;
      await UserModel.deleteUser(id);
      
      res.status(200).json({
        message: "Success Deleted User"
      })
    } catch (error) {
      console.log(error);
      next(error);      
    }
  }

  static async editUser(req, res, next) {
    try {
      const {id} = req.params;
      const {username, password} = req.body;
      
      await UserModel.update(id, {username, password});
      res.status(200).json({
        message: "Success edit user"
      });
    } catch (error) {
      console.log(error);
      next(error)
      
    }
  }

  static async renderEditUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);

      res.status(200).json({
        message: "Success Get User",
        data: user
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;