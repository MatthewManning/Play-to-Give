'use strict';

let path            = require('path'),
    express         = require('express'),
    bodyParser      = require('body-parser'),
    logger          = require('morgan'),
    session         = require('express-session'),
    mysql           = require('mysql');

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



let connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'playtogive_db'
});
connection.connect()

console.log('\t MySQL connected');

// Import our Data


// Import our API Routes


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


let server = app.listen(port, () => {
    console.log('Play to give listening on port ' + server.address().port);
});
