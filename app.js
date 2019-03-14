const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

var customers = require('./routes/customers'); 
var routes = require('./routes');
var app = express();

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/customers', customers.list);
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/delete/:id', customers.delete);
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id', customers.update);

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});