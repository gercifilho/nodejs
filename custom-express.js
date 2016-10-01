var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator')

module.exports = function () {


    app.set('view engine', 'ejs');

/*    app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });

    app.use(express.static(__dirname + 'public'));
*/
    app.use(express.static('./public'));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(expressValidator());

    require('./routes/produto')(app);
    require('./routes/promocoes')(app);
    require('./')(app);

    return app;
};