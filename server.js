require('./models/db');

const express = require('express');
var router = express.Router();
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const employeeController = require('./controllers/employeeController');
const newController = require('./controllers/newController');

let apm = require('elastic-apm-node').start({

    // Override the service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: 'project',

    // Use if APM Server requires a secret token
    secretToken: '',

    // Set the custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'http://docker.for.mac.host.internal:8200',

    // Set the service environment
    environment: 'production'
})

let err = new Error('Ups, something broke!')

apm.captureError(err)

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/employee', employeeController);
app.use('/', newController)