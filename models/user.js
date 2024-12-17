const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
},
    {  timestamps: true}
);

module.exports.userModel = mongoose.model('user', UserSchema)