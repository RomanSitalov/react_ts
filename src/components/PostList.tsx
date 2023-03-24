import React from 'react'
import PostItem from "./PostItem"

interface IPostItem {
    id: number,
    title: string,
    body: string,
}

interface IPostList {
    posts: Array<IPostItem>,
    title: string,
    remove: (arg: IPostItem) => void,
}

const PostList = (props: IPostList) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
            {props.posts.map((post, index) =>
                <PostItem remove={props.remove} post={post} index={index + 1} key={post.id} />)
            }
        </div>);
};

export default PostList;
