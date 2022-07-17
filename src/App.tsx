import React, { useState } from 'react';
import Counter from "./components/Counter"
import PostList from "./components/PostList"
import './styles/App.css'
import PostForm from "./components/PostForm"

interface IPostItem {
    id: number,
    title: string,
    body: string,
}

function App(this: any) {

    const [posts, setPosts] = useState([
        { id: 45654, title: 'Javascript', body: 'Description' },
        { id: 576867, title: 'Java', body: 'Description Java2' },
        { id: 2346, title: 'Java', body: 'Description Java2' }
    ]);


    const createPost = (newPost: IPostItem) => {
        setPosts([...posts, newPost]);
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <PostList posts={posts} title="FrontEnd" />
        </div>
    );
}


export default App;
