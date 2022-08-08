import express from 'express'
import {Post} from '../shared/types';
import {Comment} from '../shared/types';
import bodyParser from "body-parser";
import cors from "cors";
import fs from 'fs';

const categories = require("./categories.json")
const comments = require("./comments.json")
const posts = require("./posts.json")
const app = express()

app.use(cors())
app.use(bodyParser.json())


app.set('port', (process.env.PORT || 4000));

// const dev = process.env.NODE_ENV !== 'production'

app.get("/posts", (_, res) => {
    return res.json(posts)
})

app.get("/posts/:id", (req, res) => {
    const wantedId = String(req.params.id)
    const post = posts.find(({id}: Post) => String(id) === wantedId)
    return res.json(post)
})

app.get("/categories", (_, res) => {
    return res.json(categories)
})

app.get("/categories/:id", (req, res) => {
    const {id} = req.params
    const found = posts.filter(
        ({category}: Post) => category === id
    )
    const categoryPosts = [...found, ...found, ...found]
    return res.json(categoryPosts)
})

app.get("/comments/:post", (req, res) => {
    const postId = Number(req.params.post)
    const found = comments.filter(({post}: Comment) => post === postId)
    return res.json(found)
})

app.post("/posts/:id/comments", (req, res) => {
    const postId = Number(req.params.id)
    const newComment = {
        id: comments.length + 1,
        author: req.body.name,
        content: req.body.comment,
        post: postId,
        time: "Less than a minute ago"
    }
    // const data = [...comments, newComment]
    comments.push(newComment)
    // fs.writeFile('comments.json', JSON.stringify(data), (err) => {})
    // return res.sendStatus(201)
    return res.json(comments.filter(({post}: Comment) => post === postId))
})

app.listen(app.get('port'), () =>
    console.log(`DB is running on http://localhost:${app.get('port')}!`)
)
