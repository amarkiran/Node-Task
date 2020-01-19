const usersModel = require('../model/usersModel');
const roleModel = require('../../user_roles/model/userRolesModel');

let usersService = {

    getUsers: async (request, response) => {
        let getUsers = await usersModel.find({}).populate([{
            path: "roleId",
            model: "sp_roles"
        }]).exec().then(function (data) {
            return data;
        }).catch(function (error) {
            throw new Error('Error while retrieving data');
        });
        let usersData = await utils.getDateformatedData(getUsers);
        return usersData;
    },

    addUser: async (request, response) => {
        let reqData = request.body;
        let userCount = await usersModel.find({}).count().exec().then(function (data) {
            return data;
        }).catch(function (error) {
            throw new Error('Error while retrieving data');
        });
        if(userCount === 0) {
            await roleModel.findOne({roleName: 'Admin'}).exec().then(function (roleData) {
                reqData.roleId = roleData._id;
            }).catch(function (err) {
                throw new Error('Error while retrieving data');
            });
        } else {
            data = await usersService.getroleRandom();
            reqData.roleId = data[0]._id;
        }
        let addUserModel = new usersModel(reqData);
        let addUser = await addUserModel.save().then(function (data) {
            if(data){
                return reqData.userName + ' inserted successfully';
            }else{
                return reqData.userName + ' not inserted';
            }
        }).catch(function (error) {
            throw new Error('Error while inserting');
        });
        return addUser;
    },
    getroleRandom: async () => {
        let dataValue = false;
        while(!dataValue) {
            roleData = await roleModel.aggregate([{$sample: {size: 1}}]).exec().then(function (roleData) {
                return roleData;
            }).catch(function (err) {
                throw new Error('Error while retrieving data');
            });
            if (roleData[0].roleName === 'Admin'){
                dataValue = false;
            } else {
                dataValue = true;
            }
        }
        return roleData;
    }
};

module.exports = usersService;
