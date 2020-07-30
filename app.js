// Module
let express = require('express');
let bodyParser = require('body-parser');

let articlesRoute = require("./routes/articles");
let indexRoute = require("./routes/index");


// Server
app = express();


// Config
app.set("views", "./views");
app.set("view engine", "pug");


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use("/articles", articlesRoute);
app.use("/", indexRoute);



app.listen(3000, () => {
    console.log("Le serveur a demarré")
});