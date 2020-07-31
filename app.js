let express = require('express');
let bodyParser = require('body-parser');

let articlesRoute = require("./routes/articles");


app = express();


// Config
app.set("views", "./views");
app.set("view engine", "pug");


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.use("/articles", articlesRoute);


app.get("/", (req, res) => {
    res.redirect("/articles");
});



app.listen(3000, () => {
    console.log("Le serveur a demarré")
});