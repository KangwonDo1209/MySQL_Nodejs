var fs = require("fs");

exports.load_style = function (request, response) {
    fs.readFile("style.css", function (error, data) {
        response.writeHead(200, { "Content-Type": "text/css" });
        response.end(data);
    });
};
