let mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;

let Game = new Schema({
    'game_name' :    { type: String, required: true, index: { unique: true } },
    'picture':   { type: String, default: '' },
    'summary':     { type: String, default: '' },
    'highscore1':   {type: Number, default: ''},
    'highscore2':   {type: Number, default: ''},
    'highscore3':   {type: Number, default: ''},
    'highscore4':   {type: Number, default: ''},
    'highscore5':   {type: Number, default: ''}
});

module.exports = mongoose.model('Game', Game);