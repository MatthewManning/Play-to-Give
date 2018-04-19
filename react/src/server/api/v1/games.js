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
                let game = new app.models.Games(data);
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

	app.get('/v1/game/highscores', (req, res) => {
	   app.models.PlayerGame.find().sort({score: -1}).limit(5)
           .then(
               highscores => {
                   res.status(200).send({
                       highscores: highscores
                   })
               }, err => {
                   console.log(err);
                   res.status(400).send({error: 'could not fetch highscores'});
               }
           )
    });

	app.post('/v1/game/create', (req, res) => {
	   let schema = Joi.object().keys({
           score: Joi.number().required()
       });

	   Joi.validate(req.body, schema, {stripUnknown: true}, (err, data) => {
	       if (err) {
               const message = err.details[0].message;
               console.log(`Game.create validation failure: ${message}`);
               res.status(400).send({ error: message });
           } else {
	           let newGame = {
	               owner: req.session.user.username,
                   score: data.score,
                   start: Date.now(),
                   end: Date.now(),
                   active: false
               };
			   
			   // check the current user highscore
			   app.models.PlayerGame.find({owner:  req.session.user.username}).sort({score: -1}).limit(1)
				   .then(highscore => {
					   console.log(highscore[0]);
					   if (typeof highscore[0] == 'undefined' || data.score > highscore[0].score){
					   
						   // remove all old highscores and save the new one
						   app.models.PlayerGame.remove({owner:  req.session.user.username});
						   let game = new app.models.PlayerGame(newGame);
						   game.save(err =>  {
							   if (err) {
								   console.log(`Game.create save failure: ${err}`);
								   res.status(400).send({error: 'failure creating game'});
							   } else {
								   const query = { $push: { games: game._id }};
								   app.models.User.findOneAndUpdate({ _id: req.session.user._id }, query, () => {
									   res.status(201).send({
										   id: game._id
									   });
								   });
							   }
						   });
					   } else {
						   // current user highscore was better, no need to update
						   res.status(304).send();
					   }
				   }, err => {
                    console.log(err)
                })
           }
       })
    });
	
	app.get('/v1/games', (req, res) => {
        app.models.Games.find({})
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

    app.get('/v1/games/:game', (req, res) => {
        app.models.Games.findOne({ _id: req.params.game})
            .then(
                game => {
                    if (!game) res.status(404).send({error: `unknown game: ${req.params.game}`});
                    else res.status(200).send({game: game});
                }, err => {
                    console.log(err);
                    res.status(500).send({error: 'server error'})
                }
            )
    })
};