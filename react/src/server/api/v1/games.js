let Joi             = require('joi');

module.exports = app => {

	app.post('/v1/games', function(req, res) {
        // Schema for user info validation
        let schema = Joi.object().keys({
			game_name:      Joi.string().allow('').required(),
			picture:	    Joi.string().allow(''),
			summary:    	Joi.string().allow(''),
			highscore1:		Joi.string().allow(''),
			highscore2:		Joi.string().allow(''),
			highscore3:		Joi.string().allow(''),
			highscore4:		Joi.string().allow(''),
			highscore5:		Joi.string().allow('')
        });
		
		Joi.validate(req.body, schema, { stripUnknown: true }, (err, data) => {
            if (err) {
                const message = err.details[0].message;
                console.log(`Game.create validation failure: ${message}`);
                res.status(400).send({ error: message });
            } else {
                let game = new app.models.Game(data);
                game.save().then(
                    () => {
                        // Send the happy response back
                        res.status(201).send({
                            game:       	game,
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
	
	app.get('/v1/games', (req, res) => {
        app.models.Game.find({})
            .then(
                gamelist => {
                        res.status(200).send({	
							games:		gamelist
                        });
                }, err => {
                    console.log(err);
                    res.status(500).send({ error: 'server error' });
                }
            );
    });
};