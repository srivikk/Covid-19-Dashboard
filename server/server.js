let express = require('express')

let apiroutes = require('./api.js')

var cors = require("cors");
// Initialize the app
let app = express();

app.use(cors());
// Setup server port
var port = process.env.PORT || 8000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

// app.use(apiroutes);
app.use(apiroutes)