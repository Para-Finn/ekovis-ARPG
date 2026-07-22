const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            maxlength: 50,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true,
            unique: true

        },

        role: {
            type: String,
            default: "member",
            required: true
        },

        currency: {
            type: Number,
            default: 0,
            required: true
        },

        inventroy: {
            type: Array,
        },

        ownedcharacters: {
            type: Object
        }
    }
)

module.exports = mongoose.model('user', userSchema);