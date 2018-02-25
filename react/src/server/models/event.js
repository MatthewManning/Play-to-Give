let mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;

let Event = new Schema({
    'event_id' :    { type: String, required: true, index: { unique: true } },
    'event_name':   { type: String, required: true, index: { unique: true } },
    'location':     { type: String, default: '' },
    'date':         { type: Date },
    'time':         { type: Date}
});

module.exports = mongoose.model('Event', Event);