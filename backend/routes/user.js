const { Router } = require('express');
const express = require('express');
const userController = require('../controllers/user.controller');
const userMiddle = require('../middleware/user.middle');

const UserRouter = express.Router();

UserRouter.post('/register', userController.register);

UserRouter.post('/login', userController.login);

UserRouter.get('', userMiddle.loggedIn, userController.user)

module.exports = UserRouter;