import React, {useEffect, useState} from 'react';
import {PostsContext} from "./PostContext";

export function PostProvider(props) {
    const [state, setState] = useState([])

    useEffect(()=>{
        fetch('http://localhost:7777/posts')
            .then(response=> response.json())
            .then(json=>setState(json))
    }, [])

    return (
        <PostsContext.Provider value={state}>
            {props.children}
        </PostsContext.Provider>
    )
}