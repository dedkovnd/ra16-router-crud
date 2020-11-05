import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {PostsContext} from "./PostContext";

export function Posts() {
   const posts = useContext(PostsContext)

    return (
        <div>
            <Link to="/posts/new">Создать пост</Link>
            {posts.map((post,i)=><div key={i}>
                <Link to={`/posts/:${post.id}?`}>{post.content}</Link>
            </div>)}
        </div>
    )
}