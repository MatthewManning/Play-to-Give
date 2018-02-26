let Joi             = require('joi');

module.exports = app => {
    app.get('/v1/events', (req, res) => {
        app.models.Event.find({})
            .then(
                events => {
                    res.status(200).send({
                        events: events
                    });
                }, err => {
                    console.log(err);
                    res.status(500).send({error: 'server error'})
                }
            )
    });
};