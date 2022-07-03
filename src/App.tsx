import React, { useState } from 'react';
import Counter from "./components/Counter"
import PostList from "./components/PostList"
import MyBytton from "./components/UI/button/MyButton"
import './styles/App.css'
import MyInput from "./components/UI/input/MyInput"



function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Java', body: 'Description Java2' },
        { id: 3, title: 'Java', body: 'Description Java2' }
    ]);

    const addNewPost = () => {

    }

    const [title, setTitle] = useState('');

    return (
        <div className="App">
            <form>
                <MyInput value={title} placeholder="name post" onChange={e => setTitle(e.target.value)} />
                <MyInput placeholder="body post" />

                <MyBytton onClick={addNewPost} disabled children="I'm a pink circle!" />
            </form>

            <PostList posts={posts} title="FrontEnd" />
        </div>
    );
}


export default App;
