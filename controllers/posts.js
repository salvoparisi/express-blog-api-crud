const posts = require('../db.js')
const fs = require('fs')

const store = (req, res) => {
    const { title, slug, content } = req.body;

    const newPost = { title, slug, content };
    posts.push(newPost);
    res.json(posts);
}

const update = (req, res) => {
    const post = posts.find(post => post.id === req.params.id)

    if(!post){
        res.status(404).json({
            error: `No post found with the id: ${req.params.id}`
        })
    }

    post.id = req.body.id
    post.nome = req.body.nome
    post.eta = req.body.eta
    post.colore = req.body.colore

    fs.writeFileSync('./db.js', `const posts=${JSON.stringify(posts, null, 4)};\nmodule.exports = posts;`)
    res.json(posts)
}

const destroy = (req, res) => {
    const postDelete = posts.find(post => post.id === req.params.id)
    
    if(!post){
        res.status(404).json({
            error: `No post found with the id: ${req.params.id}`
        })
    }

    const newPosts = posts.filter(post => post !== postDelete)

    fs.writeFileSync('./db.js', `const posts=${JSON.stringify(newPosts, null, 4)};\nmodule.exports = posts;`)
    res.json(newPosts)
}

module.exports = {
    store,
    update,
    destroy
}