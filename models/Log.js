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
    waterTemp: {
        type: Number,
        require: [true, 'Please add water temperature in Farenheit']
    },
    brewMethod: {
        type: String,
        require: [true, 'Please select your brew method']
    },
    brewDate:{
        type: Date,
        require: [true, 'Please enter the brew date']
        //need as ISODate 
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Log', LogSchema);