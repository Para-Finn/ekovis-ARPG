const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const charaPlayableSchema = new Schema(
    {
        _id: {
            type: ObjectId
        },

        name: {
            type: String,
            default: "",
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

        xp: {
            type: Number,
            default: 0
        },

        reference: {
            type: String,
            default: "",
            required: true
        },

        featrued: {
            type: Boolean,
            default: false
        }
    }
);

module.exports = mongoose.model('chara_playable', charaPlayableSchema);