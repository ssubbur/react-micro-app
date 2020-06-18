import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const POST_URL = 'http://localhost:4001/posts/';

export default ({comments }) => {
    /* const [comments, setComments] = useState([]);
    const url = POST_URL + `${postId}/comments`
    const fetchComments = async () => {
        const res = await axios.get(url);
        setComments(res.data);
    }
    useEffect(() => {
        fetchComments();
    }, []);*/
    const renderComments = comments.map((comment) => {
        return (
            <li key={comment.id}>
                {comment.content}
            </li>
        )
    });
    
    return (
        <ul>
                {renderComments}
        </ul>
    )
}