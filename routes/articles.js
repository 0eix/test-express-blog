let express = require('express');
let router = express.Router();
const { postRepository } = require('../repository/repository');

// views
router.get("/", (req, res) => {
    postRepository.readAll()
        .then(response => {
            let articles = response.data;
            let action = req.query.action;

            action === 'new' ? res.render("articles/add") : res.render("articles/list", {articles});
        })
        .catch(error => {throw error});
});


router.get("/:id", (req, res) => {
    postRepository.readById(req.params.id)
        .then(response => {
            let article = response.data;
            let action = req.query.action;

            action === 'edit' ? res.render("articles/modify", {article}) : res.render("articles/show", {article});
        })
        .catch(error => {throw error});
});



// Actions
router.post("/create", (req, res) => {
    res.redirect('/articles');
});

router.post("/:id", (req, res) => {
    let article = {};
    article.id = req.params.id;
    article.titre = req.body.titre;
    article.body = req.body.body;

    let action = req.body.action;
    if (action !== undefined) {
        switch (action) {
            case 'save':
                console.log("should be updated");
                res.redirect(`/${article.id}`);
                break;

            case 'cancel':
                res.redirect(`/articles/${article.id}`);
                break;

            case 'delete':
                console.log("should be deleted");
                res.redirect('/articles');
                break;

            default:
                res.redirect(`/articles/${article.id}`);
                break;
        }
    }
});



module.exports = router;