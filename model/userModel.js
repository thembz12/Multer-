const string = require('@hapi/joi/lib/types/string');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stack: {
        type: String,
        required: true
    },
    email: {type:String,required:true
    },
    image: {
        type: String,
        require: true
    },
    isVerified:{type:String,
        default:false
    },
    blackList:[],
}, {timestamps: true})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel