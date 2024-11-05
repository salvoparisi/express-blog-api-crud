const posts = require('../db.js')

const store = (req, res) => {
    const { title, slug, content } = req.body;

    const newPost = { title, slug, content };
    posts.push(newPost);
    res.json(posts);
}

module.exports = { store }