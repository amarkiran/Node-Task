const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../../../../config/database');

let userSchema = new Schema({
    roleName: String
});

let usersRoleModel = db.model('user_roles', userSchema);


module.exports = usersRoleModel;
