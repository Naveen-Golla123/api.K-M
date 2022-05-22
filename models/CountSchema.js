const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true
    },
    fieldName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Counter', countSchema);