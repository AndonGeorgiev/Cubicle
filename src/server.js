let express = require('express');

let app = express();

app.all('/', function(req, res) {
    res.write('Hello, world!');
    res.end();
});

app.listen(5000, function() {
    console.log("App working on http://localhost:5000/");
})