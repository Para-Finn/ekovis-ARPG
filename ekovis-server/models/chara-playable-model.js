const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charaPlayableSchema = new Schema(
    {
        name: {
            type: String,
            default: "Your new fella ;3",
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
            default: 0.0,
            required: true
        }, 

        featrued: {
            type: Boolean,
            default: false,
            required: true
        }
    }
)

module.exports = mongoose.model('chara_playable', charaPlayableSchema)