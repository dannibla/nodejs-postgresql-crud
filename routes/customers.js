const { Client } = require('pg');
var connectionString = "postgres://postgres:root@localhost:5432/database";

const client = new Client({
    connectionString: connectionString
});

client.connect();

exports.list = function (req, res) {

    client.query('SELECT * FROM customer', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('customer/list', { title: "Customers", data: result.rows });
    });

};

exports.add = function (req, res) {
    res.render('customer/add', { title: "Add Customer"  });
};

exports.edit = function (req, res) {

    var id = req.params.id;

    client.query('SELECT * FROM customer WHERE id=$1', [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('customer/edit', { title: "Edit Customer", data: result.rows });
    });

};

exports.save = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone];

    client.query('INSERT INTO customer(name, address, email, phone) VALUES($1, $2, $3, $4) RETURNING *', cols, function (err, result) {
        if (err) {
            console.log("Error Saving : %s ", err);
        }
        res.redirect('/customers');
    });

};

exports.update = function (req, res) {

    var cols = [req.body.name, req.body.address, req.body.email, req.body.phone, req.params.id];

    client.query('UPDATE customer SET name=$1, address=$2,email=$3, phone=$4 WHERE id=$5', cols, function (err, result) {
        if (err) {
            console.log("Error Updating : %s ", err);
        }
        res.redirect('/customers');
    });

};

exports.delete = function (req, res) {

    var id = req.params.id;

    client.query("DELETE FROM customer WHERE id=$1", [id], function (err, rows) {
        if (err) {
            console.log("Error deleting : %s ", err);
        }
        res.redirect('/customers');
    });

};


