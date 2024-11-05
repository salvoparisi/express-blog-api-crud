const express = require('express')
const app = express()
const postController = require('./controllers/posts.js')
const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server listening http://localhost:${PORT}`);
})

app.post('/', postController.store)