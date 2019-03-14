# [NodeJs & PostgreSQL Crud Application](https://github.com/dannibla/nodejs-postgresql-crud)

Learn how to create a Simple Crud Application by Connecting PostgreSQL with NodeJs, While you are using PostgreSQL as database and NodeJs as backend, you need PostgreSQL database packages to connect with nodejs. There are various packages available but most popular and well documented is node-postgres [pg](https://node-postgres.com/). Let’s start.

## What's needed

- Make sure you have [postgresql](https://www.postgresql.org/download/) installed on machine and [pgAdmin](https://www.pgadmin.org/download/) - postgresql management tool
- Make sure you have [node.js](https://nodejs.org/en/download/) installed

## Folder Structure

Within the download you'll find the following directories and files:
```
NodeJs & PostgreSQL Crud Application
.
├── LICENSE
├── README.md
├── public
│   ├── css
│   │   └── main.css
│   └── js
│       └── main.js
├── routes
│	├── customers.js
│	└── index.js
├── views
│   ├── customer
│   │   ├── list.ejs
│   │   ├── add.ejs
│   │   └── edit.ejs
│   ├── layouts
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── inedx.ejs
├── app.js
└── package.json
```

## Database Connections - PostgreSQL

Create Database and use the credentials at `connectionStrings`.

```
const { Client } = require('pg');
var connectionString = "postgres://postgres:postgres@localhost:5432/database";

const client = new Client({
    connectionString: connectionString
});
```

## Getting started

- Download the project’s zip
- After Creating Database, Check your Connection Strings and Create new table in PostgreSQL

```
CREATE TABLE customer
(
    id serial NOT NULL,
    name character varying(200) NOT NULL,
    address text NOT NULL,
    email character varying(200) NOT NULL,
    phone character varying(20) NOT NULL
)

```

- Type `npm install` in terminal/console in the source folder where `package.json` is located
- Type `node app.js` in terminal/console in the source folder where `app.js` is located
- server started on port 4000. (http://localhost:4000/) in default browser

## Help on Executing Queries

Documented is available node-postgres(Doc) [pg](https://node-postgres.com/features/queries)

## Copyright and License
Copyright 2019 NodeJs & PostgreSQL Crud Application, released under the MIT License.
