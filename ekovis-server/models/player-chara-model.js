const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerCharaSchema = new Schema(
    {
        name: {
            type: String,
            default: "Little guy :3",
            maxlength: 50
        },

        species: {
            type: String,
            required: true
        },

        level: {
            type: Number,
            default: 1,
            required: true
        },

        experience: {
            type: Number,
            default: 0
        },

        reference: {
            type: String,
            default: "",
            required: true
        }
    }
);

module.exports = mongoose.model('playerChara', playerCharaSchema);