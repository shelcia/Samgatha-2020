const express = require('express');
const moment = require('moment');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
    var today = moment.now();
    var samgatha = moment('2020-03-27');
    var daysLeft = samgatha.diff(today, 'days');
    res.render('index', { route: 'index', daysLeft: daysLeft });
});

app.get('/events', function (req, res) {
    const events = require('./public/json/events.json');
    res.render('events', { route: 'events', workshop: events });
});

app.get('/events/:clubname', function (req, res) {
    var clubnames = ['Drama'];
    if (clubnames.includes(req.params.clubname))
        res.render('club', { route: 'club', clubName: req.params.clubname });
    else res.sendStatus(404);
});

app.get('/shows', function (req, res) {
    const proshows = require('./public/json/proshows.json');
    res.render('shows', { route: 'shows', workshop: proshows });
});

app.get('/workshops', function (req, res) {
    const workshop = require('./public/json/workshops.json');
    res.render('workshops', { route: 'workshops', workshop: workshop });
});

app.get('/hospitality', function (req, res) {
    res.render('hospitality', { route: 'hospitality' });
});

app.get('/sponsors', function (req, res) {
    const sponsor = require('./public/json/sponsors.json');
    res.render('sponsors', { route: 'sponsors', sponsor: sponsor });
});

app.get('/teams', function (req, res) {
    res.render('teams', { route: 'teams' });
});

app.get('/back', function (req, res) {
    res.redirect('back'); // redirect user to where he came from
});


app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("Server has started!");
});