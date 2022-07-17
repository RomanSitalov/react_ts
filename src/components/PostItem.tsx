import React, { useState } from 'react'
import MyButton from "./UI/button/MyButton"

interface IPostItem {
    id: number,
    title: string,
    body: string,
}

const PostItem = (props: {
    post: { id: number, title: string, body: string };
    index: number;
    remove: (arg: IPostItem) => void;
}) => {
    return (
        <div>
            <div className="post">
                <div className="post_content">
                    <strong>{props.index}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post_btns">
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
