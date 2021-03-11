const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    coffee: {
        type: Number,
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
    brewBody: {
        type: Number,
        require: [true, '(1-5)']
    },
    brewBalance: {
        type: Number,
        require: [true, '(1-5)']
    },
    brewAcidity: {
        type: Number,
        require: [true, '(1-5)']
    },
    brewSweetness: {
        type: Number,
        require: [true, '(1-5)']
    },
    brewCleanness: {
        type: Number,
        require: [true, '(1-5)']
    },
    brewAftertaste: {
        type: Number,
        require: [true, '(1-5)']
    },
/*     brewDate:{
        type: Date,
        require: [true, 'Please enter the brew date']
        //need as ISODate 
    }, */
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Log', LogSchema);