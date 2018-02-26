let Joi             = require('joi');

module.exports = app => {

	app.post('/v1/charities', function(req, res) {
        // Schema for user info validation
        let schema = Joi.object().keys({
			charity_name:   Joi.string().allow('').required(),
			picture:    	Joi.string().allow(''),
			summary:		Joi.string().allow(''),
			paypal:			Joi.string().allow('')
        });
		
		Joi.validate(req.body, schema, { stripUnknown: true }, (err, data) => {
            if (err) {
                const message = err.details[0].message;
                console.log(`Charity.create validation failure: ${message}`);
                res.status(400).send({ error: message });
            } else {
                let charity = new app.models.Charity(data);
                charity.save().then(
                    () => {
                        // Send the happy response back
                        res.status(201).send({
                            charity:       	charity,
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
	
	app.get('/v1/charities', (req, res) => {
        app.models.Charity.find({})
            .then(
                charlist => {
                        res.status(200).send({
							charities:		charlist
                        });
                }, err => {
                    console.log(err);
                    res.status(500).send({ error: 'server error' });
                }
            );
    });
};