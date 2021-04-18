const mongoose = require ('mongoose'); //import mongoose

const Schema = mongoose.Schema;

const musicSchema = new Schema({

    name: { type: String, unique: true, lowercase: false},
    description: String,

});

module.exports = mongoose.model( 'music', musicSchema);