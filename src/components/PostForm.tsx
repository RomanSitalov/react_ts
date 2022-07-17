import React, { useState } from 'react'
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton"


interface IPostItem {
    id: number,
    title: string,
    body: string,
}

interface IAddPost {
    create: (arg: IPostItem) => void,
}


const PostForm: React.FC<IAddPost> = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newPost = { ...post, id: Date.now() };

        create(newPost);

        setPost({ title: '', body: '' });
    }

    return (
        <div>
            <form>
                <MyInput value={post.title} placeholder="name post" onChange={e => setPost({ ...post, title: e.target.value })} />
                <MyInput value={post.body} placeholder="body post" onChange={e => setPost({ ...post, body: e.target.value })} />

                <MyButton onClick={addNewPost} children="Add post" />
            </form>
        </div>
    );
}; 

export default PostForm;
