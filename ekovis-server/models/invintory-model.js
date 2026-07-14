const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = require('mongodb');

const invintorySchema = new Schema({
    _id: {
        type: ObjectId
    },

    coins: {
        type: Number,
        default: 0,
        required: true
    },

    item: {
        type: Array
    },

    item_myo: {
        type: Array
    },

    pets: {
        type: Array
    }
}

)

module.exports = mongoose.model('invintory', invintorySchema);