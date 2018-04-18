'use strict';

let path            = require('path'),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    logger          = require('morgan'),
    session         = require('express-session'),
    mongoose        = require('mongoose'),
    schedule        = require('node-schedule'),
    paypal          = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AXNyaNk-cU4QvxtUq3g-_LBO22hiFggLx8i5-k-j1QWmqfuE9AWy06ThkkPOOpqtde-XHwUPwcYWLM3A',
    'client_secret': 'EJWTf0jfHdz25lmXzrpsTzx8AHR6nV4GRYI0Xzb7gbm5kIDxL2-BGY_jtU8bUDMSbwXieC8gLZ7t11Sf'
});

mongoose.Promise = global.Promise;
let port = process.env.PORT ? process.env.PORT : 9000;
let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

let app = express();
app.use(express.static(path.join(__dirname, '../../public')));
if (env !== 'test') app.use(logger('dev'));
app.engine('pug', require('pug').__express);
app.set('views', __dirname);

app.use(session({
    name: 'session',
    secret: 'secretplaytogive',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let options = {
    useMongoClient: true
};

mongoose.connect('mongodb://heroku_zddqcgjh:dj1v0lsvrcofdjgpntl0dljnpg@ds121192.mlab.com:21192/heroku_zddqcgjh', options)
//mongoose.connect('mongodb://127.0.0.1:27017', options)
    .then(() => {
        console.log('\t MongoDB connected');

        // Import our Data Models
        app.models = {
            Event: require('./models/event'),
			Charity: require('./models/charities'),
			Games: require('./models/games'),
            User: require('./models/users'),
            PlayerGame: require('./models/game')
        };

        // Import our API Routes
        require('./api/v1/charities')(app);
        require('./api/v1/events')(app);
        require('./api/v1/games')(app);
        require('./api/v1/user')(app);
        require('./api/v1/session')(app);

        // Give them the SPA base page
        app.get('*', (req, res) => {
            let preloadedState = req.session.user ? {
                username: req.session.user.username,
                primary_email: req.session.user.primary_email
            } : {};
            preloadedState = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
            res.render('base.pug', {
                state: preloadedState
            });
        });
    }, err => {
        console.log(err);
    });

let server = app.listen(port, () => {
    console.log('Play to give listening on port ' + server.address().port);
    let rule = new schedule.RecurrenceRule();
    rule.hour = 0;
    let payout = schedule.scheduleJob(rule, function() {
        app.models.PlayerGame.find().sort({score: -1}).limit(1)
            .then(
                highscores => {
                    app.models.User.find({username: highscores[0].owner})
                        .then(
                            user => {
                                let main_charity = user[0].main_charity;
                                console.log(user[0].main_charity);
                                app.models.Charity.find({_id: main_charity})
                                    .then(
                                        charity => {
                                            let email = charity[0].paypal;
                                            let sender_batch_id = Math.random().toString(36).substring(9);
                                            let create_payout_json = {
                                                "sender_batch_header": {
                                                    "sender_batch_id": sender_batch_id,
                                                    "email_subject": "You have a payment"
                                                },
                                                "items": [
                                                    {
                                                        "recipient_type": "EMAIL",
                                                        "amount": {
                                                            "value": 0.99,
                                                            "currency": "USD"
                                                        },
                                                        "receiver": email,
                                                        "note": "Charity donation",
                                                        "sender_item_id": "item_1"
                                                    }]
                                            };
                                            paypal.payout.create(create_payout_json, function (error, payout) {
                                                if (error) {
                                                    console.log(error.response);
                                                    throw error;
                                                } else {
                                                    console.log("Create Payout Response");
                                                    console.log(payout);
                                                }
                                            });
                                        }
                                    );
                            }
                        )
                }, err => {
                    console.log(err)
                }
            )
            .then(
                app.models.PlayerGame.remove()
            )
    })
});
