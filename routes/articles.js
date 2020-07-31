let express = require('express');
let router = express.Router();
const { postRepository } = require('../repository/repository');


router.get("/", (req, res) => {
    postRepository.readAll()
        .then(response => {
            let articles = response.data;
            res.render("articles/list", {articles});
        })
        .catch(error => {throw error});
})


router.get("/new", (req, res) => {
    res.render("articles/add");
})


router.get("/cancel", (req, res) => {
    res.redirect("/articles");
})


router.post("/", (req, res) => {
    let article = {};
    article.id = req.params.id;
    article.titre = req.body.titre;
    article.body = req.body.body;

    postRepository.create(article)
    .then(response => res.redirect('/articles'))
    .catch(error => {throw error});
});


router.get("/:id/cancel", (req, res) => {
    res.redirect(`/articles/${req.params.id}`);
})


router.get("/:id/edit", (req, res) => {
    postRepository.readById(req.params.id)
        .then(response => {
            let article = response.data;
            res.render("articles/modify", {article});
        })
        .catch(error => {throw error});
})


router.delete("/:id", (req, res) => {
    // postRepository.delete(req.params.id)
    // .then(response => {
    //     console.log(response);
    //     res.redirect('/articles')
    // })
    // .catch(error => {throw error});
    res.json({ok: "whaaaaaatttt"})
    res.redirect('/articles')
})


router.put("/:id", (req, res) => {
    let article = {};
    article.id = req.params.id;
    article.titre = req.body.title;
    article.body = req.body.body;

    postRepository.update(article)
    .then(response => res.redirect(`/${article.id}`))
    .catch(error => {throw error});
})


router.get("/:id", (req, res) => {
    postRepository.readById(req.params.id)
        .then(response => {
            let article = response.data;
            res.render("articles/show", {article});
        })
        .catch(error => {throw error});
})








module.exports = router;