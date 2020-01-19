var express = require('express');
var adminRouter = express.Router();

const usersController = require('../src/admin/users/controller/usersController');

/** USERS MODULE */
/* LOAD Users */
adminRouter.get('/users', (request, response, next) => {
    usersController.getUsers(request, response, next);
});

/* ADD Users */
adminRouter.post('/userRegister', (request, response, next) => {
    usersController.addUser(request, response, next);
});

module.exports = adminRouter;

