import React, { useState, useMemo } from 'react';
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

interface OptionData {
    value: string,
    name: string,
}

interface Option {
    defaultValue: string,
    options: OptionData[],
    value?: string,
    onChange: (value: string) => void,
}

function App (this: any) {

    const [posts, setPosts] = useState([
        { id: 45654, title: 'Javas3', body: 'Description1' },
        { id: 576867, title: 'Java2', body: 'Description2' },
        { id: 2346, title: 'Java1', body: 'Description3' }
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost: IPostItem) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post: IPostItem) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }
    const sortedPosts = useMemo(() => {

        if (selectedSort) {
            if (selectedSort === 'title') {
                return [...posts].sort((a, b) => a.title.localeCompare(b.title));
            } else {
                return [...posts].sort((a, b) => a.body.localeCompare(b.body));
            }
        }

        return posts;
    },
        [selectedSort, searchQuery, posts]);

    const sorterAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
    },
        [selectedSort, searchQuery, posts]);


    const sortPosts = (sort: string) => {
        setSelectedSort(sort);
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

            <Counter />

            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="search" />
            <MySelect options={options.options} onChange={options.onChange} value={options.value} defaultValue={options.defaultValue}></MySelect>

            {
                sorterAndSearchedPosts.length
                    ? <PostList remove={removePost} posts={sorterAndSearchedPosts} title="List items" />
                    : <h1 style={{ textAlign: 'center' }}>Not found</h1>
            }
        </div>
    );
}

export default App;
