import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
const POST_URL = 'http://localhost:4002/posts';
export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get(POST_URL);
        setPosts(res.data);
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = Object.values(posts).map((post) => {
        return (
            <div className="card" key={post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments}/>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    });
    console.log(posts);
    return (
        <div>
            <h2> Posts</h2>
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {renderPosts}
            </div>
        </div>
    )
}