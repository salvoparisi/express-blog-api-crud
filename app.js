const express = require('express')
const app = express()
const postController = require('./controllers/posts.js')
const notFoundMiddleware = require('./middlewares/notFoundMiddleware.js')
const PORT = 3000

app.use(express.json())

app.use(notFoundMiddleware);

app.listen(PORT, ()=>{
    console.log(`Server listening http://localhost:${PORT}`);
})

app.post('/', postController.store)

app.put('/:id', postController.update)

app.delete('/:id', postController.destroy)