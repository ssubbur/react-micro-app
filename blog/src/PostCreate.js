import React, { useState } from 'react';
import axios from 'axios';

const POST_URL = 'http://localhost:4000/posts';
export default () => {
    const [title, setTitle] = useState('');
    const [postList, setPosts] = useState([]);
    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(POST_URL,{
            title
        });
        setPosts([...postList, title]);
        setTitle('');
    };
    const renderPost = () => {
        if(postList.length === 0){
            return null;
        }
        return(
            <ul>
                {
                    postList.map((post,i) => {
                       return  <li key={i}>{post}</li>
                    })
                }
            </ul>
        )
    }
    return (
        <div>
            <h2> Create Post</h2>
            <form onSubmit={ onSubmit }>
                <div className="form-group">
                    <label> Title</label>
                    <input
                        value={title}
                        type="text"
                        className="form-control"
                        onChange= { e => setTitle(e.target.value)}                        
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            {renderPost()}
        </div>
    )
}