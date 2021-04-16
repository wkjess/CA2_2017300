var mongoose = require ('mongoose'); //import mongoose

var musicSchema = new mongoose.Schema({

    name: { type: String, unique: true, lowercase: false},
    description: String,

});

module.exports = mongoose.model( 'music', musicSchema);