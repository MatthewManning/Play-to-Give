let mongoose            = require('mongoose'),
    Schema              = mongoose.Schema;

let Charity = new Schema({
    'charity_name' :    { type: String, required: true, index: { unique: true } },
    'picture':   { type: String, default: '' },
    'summary':     { type: String, default: '' },
    'paypal':   {type: String, default: ''}
});

module.exports = mongoose.model('Charity', Charity);