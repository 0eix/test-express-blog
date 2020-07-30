let express = require('express');
let router = express.Router();


router.get("/", (req, res) => {
    res.redirect("/articles");
});


module.exports = router;