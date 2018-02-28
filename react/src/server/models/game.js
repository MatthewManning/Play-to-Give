
"use strict";

let mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;


let Game = new Schema({
    owner:      { type: String, ref: 'User', required: true },
    start:      { type: Date },
    end:        { type: Date },
    active:     { type: Boolean, default: true },
    score:      { type: Number, default: 0 },
});

Game.pre('validate', function(next) {
    this.start = Date.now();
    next();
});


module.exports = mongoose.model('Game', Game);

