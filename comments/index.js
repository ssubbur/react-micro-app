const express = require('express');
const axios = require('axios');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const commentsByPostId = {};

app.use(bodyParser.json());
app.use(cors());

app.get('/posts/:id/comments', (req,res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req,res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id: commentId, content });

    commentsByPostId[req.params.id]= comments

    await axios.post('http://localhost:4005/events', {
        type:'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id
        }
    });
    res.status(201).send(comments);
});

app.post('/events',(req,res) => {
    console.log('Events Received',req.body.type);

    res.send({});
})
app.listen(4001,() =>{
    console.log('Comments Service listening on 4001');
});