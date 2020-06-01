const express = require('express');
const path = require('path');

const apiroutes = require('./api.js')

const cors = require("cors");
// Initialize the app
const app = express();

app.use(cors());
// Setup server port
const port = process.env.PORT || 3001;
// Send message for default URL
// cd app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

app.use('/admin/static', express.static(path.join(__dirname, 'client/build/static')))
// app.use('/*', express.static(path.join(__dirname, 'client/build')))
app.use(apiroutes);