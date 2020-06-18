import React, { useState } from 'react';
import axios from 'axios';

const POST_URL = 'http://localhost:4001/posts/';
export default ({postId}) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const url = POST_URL+`${postId}/comments`;
        await axios.post(url,{
            content
        });
        setContent('');
    };
    return (
        <div>
            <form onSubmit={ onSubmit }>
                <div className="form-group">
                    <label> New Comment</label>
                    <input
                        value={content}
                        type="text"
                        className="form-control"
                        onChange= { e => setContent(e.target.value)}                        
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}