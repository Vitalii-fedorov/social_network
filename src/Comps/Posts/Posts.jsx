import './Posts.css';
import React, { useState } from 'react';

const postData = [
    {id: 1, postText: 'Kizzma'},
]

const PostItem = (props) => {
    return (
        <div className="poststyle">
            {props.postAddedText}
        </div>
    );
}

const Posts = () => {

    let postsElements = postData.map ((el, index) =>
        <PostItem key={index} postAddedText={el.postText} id={el.id} />)

    let addpost = () => {
        if (newPostText.trim() !== '') { // Check if the input is not empty
            const newPost = {
                id: postData.length + 1,
                postText: newPostText,
            };

            postData.push(newPost); // Step 3: Add the new object to the postData array
            setNewPostText(''); // Step 4: Clear the textarea
        }
    }

    const [newPostText, setNewPostText] = useState(''); // Step 1

    return (
        <div className="Posts">

            <span>My posts</span> <br />
            {postsElements}
            <textarea placeholder="your news..." id="new-post"  value={newPostText}
                      onChange={(e) => setNewPostText(e.target.value)}
                        ></textarea>
            <div className="btn"><button
                onClick={addpost}>
                <b>Send</b>
            </button></div>

        </div>
    );
}

export default Posts;