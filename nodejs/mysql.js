var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1214",
    port: 3307,
    database: "opentutorials",
});

connection.connect();

connection.query("SELECT * FROM TOPIC", function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();
