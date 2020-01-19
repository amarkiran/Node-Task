const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../../../../config/database');

let userSchema = new Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user_roles',
        required: true
    },
    firstName: { type: String, required: true},
    lastName: String,
    emailId: {type: String, match: /\S+@\S+\.\S+/},
    userName: { type: String, required: true},
    password: {type :String, required: true}
});

let usersModel = db.model('users', userSchema);


module.exports = usersModel;
