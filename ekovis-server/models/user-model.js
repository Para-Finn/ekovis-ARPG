const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            maxlength: 50,
        },

        password: {
            type: String,
            required: true
        },

        avatar: {
            type: String,
            default: ""
        },

        role: {
            type: String,
            required: true,
            default: 'member'
        },

        currency: {
            type: Number,
        },

        ownedCharacters: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    }
);

module.exports = mongoose.model('user', userSchema);