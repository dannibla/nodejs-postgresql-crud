const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
var dc = require('pg-dynamic-crud');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

dc.connect({
    connectionString: 'postgres://postgres:postgres@localhost:5432/database',
    crud: [{
        table: 'customer',
        primary: 'id',
        route: 'customers',
        listView: 'customer/list',
        formView: 'customer/form'
    }, {
        table: 'user',
        primary: 'id',
        route: 'users',
        listView: 'user/list',
        formView: 'user/form'
    }]
}, function (err, result) {
    console.log(err, result);
});

app.set('port', process.env.PORT || 4000);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', dc);

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});