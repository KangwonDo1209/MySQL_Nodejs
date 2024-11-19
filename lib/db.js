var mysql = require("mysql2");
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1214",
    port: 3307,
    database: "opentutorials",
});
db.connect();

module.exports = db;
