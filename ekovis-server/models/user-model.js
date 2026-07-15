const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const userSchema = new Schema(
    {
        _id: {
            type: Schema.Types.ObjectId
        },

        username: {
            type: String,
            required: true,
            maxlength: 50
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            required: true,
            default: 'member'
        }
    }
);

module.exports = mongoose.model('users', userSchema);