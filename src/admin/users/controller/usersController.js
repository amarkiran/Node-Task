const usersService = require('../service/usersService');

let usersController = {
    getUsers: async (request, response, next) => {
        try {
            let getUsers = await usersService.getUsers(request, response);
            response.status(200).json(getUsers);
        } catch (error) {
            next(error);
        }
    },

    addUser: async (request, response, next) => {
        try {
            let addUser = await usersService.addUser(request, response, next);
            response.status(200).json(addUser);
        } catch (error) {
            next(error);
        }
    }
};

module.exports = usersController;
