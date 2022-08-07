import React, { useState } from 'react';
import Counter from "./components/Counter"
import PostList from "./components/PostList"
import './styles/App.css'
import PostForm from "./components/PostForm"
import MySelect from "./components/UI/select/MySelect"

interface IPostItem {
    id: number,
    title: string,
    body: string,
}

type OptionData = {
    value: string,
    name: string,
}

type Options = {
    defaultValue: string,
    options: OptionData[],
    value?: number,
    onChange: (value: string) => void,
}

function App (this: any) {

    const [posts, setPosts] = useState([
        { id: 45654, title: 'Javascript', body: 'Description' },
        { id: 576867, title: 'Java', body: 'Description Java2' },
        { id: 2346, title: 'Java', body: 'Description Java2' }
    ]);


    const createPost = (newPost: IPostItem) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post: IPostItem) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const [selectedSort, setSelectedSort] = useState('');

    const sortPosts = (sort: string ) => {
        setSelectedSort(sort);
        console.log(sort);

        if (sort === 'title') {
            setPosts([...posts].sort((a, b) => a.title.localeCompare(b.title)));
        } else {
            setPosts([...posts].sort((a, b) => a.body.localeCompare(b.body)));
        }

    }

    const options = {
        defaultValue: "Sorter by",
        options: new Array<OptionData>({ value: 'body', name: 'by body' }, { value: 'title', name: 'by title' }),
        value: selectedSort,
        onChange: (value: string) => {
            sortPosts(value);
        },
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <MySelect options={options.options} onChange={options.onChange} value={options.value} defaultValue={options.defaultValue}></MySelect>

            {
                posts.length ?
                    <PostList remove={removePost} posts={posts} title="FrontEnd" />
                    :
                    <h1 style={{ textAlign: 'center' }}>Not found</h1>
            }
        </div>
    );
}


export default App;
