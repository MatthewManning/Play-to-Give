let Joi             = require('joi');

module.exports = app => {

	app.post('/v1/events', function(req, res) {
        // Schema for user info validation
        let schema = Joi.object().keys({
			event_id:      	Joi.string().allow('').required(),
			event_name:     Joi.string().allow('').required(),
			location:    	Joi.string().allow(''),
			date:			Joi.date().iso(),
			time:			Joi.string().allow('')
        });
		
		Joi.validate(req.body, schema, { stripUnknown: true }, (err, data) => {
            if (err) {
                const message = err.details[0].message;
                console.log(`Event.create validation failure: ${message}`);
                res.status(400).send({ error: message });
            } else {
                let event = new app.models.Event(data);
                event.save().then(
                    () => {
                        // Send the happy response back
                        res.status(201).send({
                            event:       	event,
                        });
                    }, err => {
                        console.log(err);
                        // Something failed
                        res.status(400).send({error: 'invalid format'});

                    }
                );
            }
        });
	});
	
	app.get('/v1/events', (req, res) => {
        app.models.Event.find({})
			//.populate('posts')
			//.exec()
			//.exec( function (err, posts) {
				//if(err) return res.status(500).send({ error: 'server error' }); 
				//res.status(200).send({ posts:	postlist.posts });)
            .then(
                eventlist => {
                        res.status(200).send({
                            //posts:	postlist.posts	
							events:		eventlist
                        });
                }, err => {
                    console.log(err);
                    res.status(500).send({ error: 'server error' });
                }
            );
    });

    app.get('/v1/events/:event', (req, res) => {
        app.models.Event.findOne({ _id: req.params.event})
            .then(
                event => {
                    if (!event) res.status(404).send({error: `unknown event: ${req.params.event}`});
                    else res.status(200).send({event: event});
                }, err => {
                    console.log(err);
                    res.status(500).send({error: 'server error'})
                }
            )
    })
};