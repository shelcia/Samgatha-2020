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
    const events = require('./public/json/events.json');
    var i = 0, count27 = [], count28 = [], count29 = [], count = [count27, count28, count29];
    while (events[i].clubName.toUpperCase() !== req.params.clubname.toUpperCase()) {
        i++;
    }
    for (let j = 0; j < events[i].events.length; j++) {
        const e = events[i].events[j];
        if (e.date === '27 March') {
            count27.push(e);
        } else if (e.date === '28 March') {
            count28.push(e);
        } else {
            count29.push(e);
        }
    }
    count = [count27, count28, count29]
    res.render('club', {
        route: 'club',
        clubName: req.params.clubname,
        club: events[i],
        count: count
    });
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

app.get('/team', function (req, res) {
    const team = require('./public/json/team.json');
    res.render('team', { route: 'teams', team: team });
});

app.get('/eventData', function (req, res) {
    const events = require('./public/json/events.json');
    var e = req.query.path.replace(/%20/g, " ").substring(8);
    var id = Number(req.query.id);
    for (let i = 0; i < events.length; i++) {
        if (events[i].clubName === e) {
            return res.send(events[i].events[id]);
        }
    }
});


app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("Server has started!");
});