const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        min: 1
    },
    writer:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 10
    },
    date:{
        type: Date,
        required: true,
        'default': Date.now
    },
    production:{
        type: String,
        required: true
    }
});

movieSchema.index({coords: '2dsphere'});
module.exports = mongoose.model('Movie', movieSchema);