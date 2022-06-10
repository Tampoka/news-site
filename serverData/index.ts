import comments from './comments.json'
import categories from './categories.json'
import posts from './posts.json'

import express from 'express'
const app = express()
const port=4000

// const dev = process.env.NODE_ENV !== 'production'


app.get("/posts", (_, res) => {
    return res.json(posts)
})

app.get("/posts/:id", (req, res) => {
    const wantedId = String(req.params.id)
    const post = posts.find(({ id }) => String(id) === wantedId)
    return res.json(post)
})

app.get("/categories", (_, res) => {
    return res.json(categories)
})

app.get("/categories/:id", (req, res) => {
    const found = posts.filter(
        ({ category: id }) => id === req.params.id
    )
    const categoryPosts = [...found, ...found, ...found]
    return res.json(categoryPosts)
})

app.get("/comments/:post", (req, res) => {
    const postId = Number(req.params.post)
    const found = comments.filter(({ post }) => post === postId)
    return res.json(found)
})

app.post("/posts/:id/comments", (req, res) => {
    const postId = Number(req.params.id)
    comments.push({
        id: comments.length + 1,
        author: req.body.name,
        content: req.body.comment,
        post: postId,
        time: "Less than a minute ago"
    })
    return res.json(comments.filter(({ post }) => post === postId))
})

app.listen(port, () =>
    console.log(`DB is running on http://localhost:${port}!`)
)
