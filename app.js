const express = require('express');
const routes = require('./routes/routes')
const favicon = require('serve-favicon');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(favicon(__dirname + '/favicon.ico'));
app.use(routes);

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("Server has started!");
});