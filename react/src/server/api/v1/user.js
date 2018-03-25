'use strict';

let Joi         = require('joi');


const validatePassword = password => {
    // Validate password more
    if (!password.match(/[0-9]/i)) {
        return { error: '"password" must contain at least one numeric character' };
    }
    else if (!password.match(/[a-z]/)) {
        return { error: '"password" must contain at least one lowercase character' };
    }
    else if (!password.match(/\@|\!|\#|\$|\%|\^/i)) {
        return { error: '"password" must contain at least one of: @, !, #, $, % or ^' };
    }
    else if (!password.match(/[A-Z]/)) {
        return { error: '"password" must contain at least one uppercase character' };
    }
};

module.exports = (app) => {

    app.post('/v1/user', function(req, res) {
        // Schema for user info validation
        let schema = Joi.object().keys({
            username:       Joi.string().lowercase().alphanum().min(3).max(32).required(),
            primary_email:  Joi.string().lowercase().email().required(),
            first_name:     Joi.string().allow(''),
            last_name:      Joi.string().allow(''),
            password:       Joi.string().min(8).required()
        });
        // Validate user input
        Joi.validate(req.body, schema, { stripUnknown: true }, (err, data) => {
            if (err) {
                const message = err.details[0].message;
                console.log(`User.create validation failure: ${message}`);
                res.status(400).send({ error: message });
            } else {
                // Deeper password validation
                const pwdErr = validatePassword(data.password);
                if (pwdErr) {
                    console.log(`User.create password validation failure: ${pwdErr.error}`);
                    res.status(400).send(pwdErr);
                    return;
                }
                // Try to create the user
                let user = new app.models.User(data);
                user.save().then(
                    () => {
                        // Send the happy response back
                        res.status(201).send({
                            username:       data.username,
                            primary_email:  data.primary_email
                        });
                    }, err => {
                        console.log(err);
                        // Error if username is already in use
                        if (err.code === 11000) {
                            if (err.message.indexOf('username_1') !== -1)
                                res.status(400).send({error: 'username already in use'});
                            if (err.message.indexOf('primary_email_1') !== -1)
                                res.status(400).send({error: 'email address already in use'});
                        }
                        // Something else in the username failed
                        else res.status(400).send({error: 'invalid username'});

                    }
                );
            }
        });
    });

    app.get('/v1/user/:username', (req, res) => {
        app.models.User.findOne({ username: req.params.username.toLowerCase() })
            .then(
                user => {
                    if (!user) res.status(404).send({ error: `unknown user: ${req.params.username}` });
                    else {

                        res.status(200).send({
                            username:       user.username,
                            primary_email:  user.primary_email,
                            first_name:     user.first_name,
                            last_name:      user.last_name
                        });
                    }
                }, err => {
                    console.log(err);
                    res.status(500).send({ error: 'server error' });
                }
            );
    });

    app.put('/v1/user', (req, res) => {
        if (!req.session.user) {
            res.status(401).send({ error: 'unauthorized' });
        } else {
            let schema = Joi.object().keys({
                first_name: Joi.string().allow(''),
                last_name: Joi.string().allow(''),
            });
            Joi.validate(req.body, schema, {stripUnknown: true}, (err, data) => {
                if (err) {
                    const message = err.details[0].message;
                    console.log(`User.update validation failure: ${message}`);
                    res.status(400).send({error: message});
                } else {
                    if (data.first_name === '') delete data.first_name;
                    if (data.last_name === '') delete data.last_name;
                    const query = { username: req.session.user.username };
                    app.models.User.findOneAndUpdate(query, {$set: data}, {new: true})
                        .then(
                            user => {
                                req.session.user = user;
                                console.log(user.username);
                                res.status(204).send({username: user.username});
                            }, err => {
                                console.log(`User.update logged-in user not found: ${req.session.user.id}`);
                                res.status(500).end();
                            }
                        );
                }
            });
        }
    });
	
	app.put('/v1/user/timestamp', (req, res) => {
        if (!req.session.user) {
            res.status(401).send({ error: 'unauthorized' });
        } else {
            let schema = Joi.object().keys({
                timestamp: Joi.number().integer().min(0)
            });
            Joi.validate(req.body, schema, {stripUnknown: true}, (err, data) => {
                if (err) {
                    const message = err.details[0].message;
                    console.log(`User.timestamp.update validation failure: ${message}`);
                    res.status(400).send({error: message});
                } else {
                    const query = { username: req.session.user.username };
                    app.models.User.findOneAndUpdate(query, {$set: data}, {new: true})
                        .then(
                            user => {
                                req.session.user = user;
                                console.log(user.username);
								console.log(user.timestamp);
                                res.status(204).send({username: user.username, timestamp: user.timestamp});
                            }, err => {
                                console.log(`User..timestamp.update logged-in user not found: ${req.session.user.id}`);
                                res.status(500).end();
                            }
                        );
                }
            });
        }
    });
	
	app.get('/v1/user/timestamp/:username', (req, res) => {
        app.models.User.findOne({ username: req.params.username.toLowerCase() })
            .then(
                user => {
                    if (!user) res.status(404).send({ error: `unknown user: ${req.params.username}` });
                    else {
						
						user.timestamp > ((new Date().getTime() / 1000) - 86400) ?
							res.status(200).send({
								valid:	true
							}):
							res.status(200).send({
								valid:	false
							});
                    }
                }, err => {
                    console.log(err);
                    res.status(500).send({ error: 'server error' });
                }
            );
    });
};