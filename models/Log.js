const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    coffee: {
        type: String,
        trim: true,
        required: [true, 'Please add coffee']
    },
    water: {
        type: Number,
        require: [true, 'Please add water temperature in Farenheit']
    },
    method: {
        type: String,
        require: [true, 'Please select your brew method']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Log', LogSchema);