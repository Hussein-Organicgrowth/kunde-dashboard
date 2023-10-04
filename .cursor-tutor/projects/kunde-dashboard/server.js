const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

require('dotenv').config()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }));
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

const checkAuth = (req, res, next) => {
    if (req.session.user && req.session.user.authenticated) {
        return next();
    } else {
        res.redirect('/login');
    }
}

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/', checkAuth, (req, res) => {
    res.render('index', { title: 'Customer Dashboard' });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("USERNAME: " + username + " "  + USER_NAME);
    console.log("PASSWORD: " + password + " " + PASSWORD);
    // Replace 'admin' and 'secret' with your own username and password
    if(username === USER_NAME && password === PASSWORD) {
        req.session.user = {
            authenticated: true,
        };
        console.log("WORKS");
        res.redirect('/');
    } else {
        console.log("NOT CORRECT");
        res.render('login', { error: 'Incorrect username or password.' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});