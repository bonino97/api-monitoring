const express = require('express');
const app = express();
// const db = require('./config/db');

//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('../src/routes/index'));

app.listen(3001);
console.log('Server Running on Port 3001...');

// db.sync().then( () => {
//     console.log('Sequelize DB Connected...');
// }).catch(err => {
//     console.log(err);
// });

app.use(express.static('../MonitoringResults'))

require('./models/Subdomains');
require('./models/Information');
require('./models/Stacks');
require('./models/Headers');
require('./models/Urls');