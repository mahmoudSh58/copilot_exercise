// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', function (req, res) {
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

// Add a new comment
app.post('/comments', function (req, res) {
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data.push(req.body);
        fs.writeFile(__dirname + "/" + "comments.json", JSON.stringify(data), function (err) {
            if (err) {
                console.log(err);
            }
        });
    });
    res.end("Comment added");
})

// Delete a comment
app.delete('/comments/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == req.params.id) {
                data.splice(i, 1);
            }
        }
        fs.writeFile(__dirname + "/" + "comments.json", JSON.stringify(data), function (err) {
            if (err) {
                console.log(err);
            }
        });
    });
    res.end("Comment deleted");
})

var server = app.listen(8080, function () {
    console.log("Server is running at http://):8080");
});