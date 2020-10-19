import React, {useState,useEffect} from 'react'

export function Posts() {
    const [state, setState] = useState([])
    console.log(state)
    useEffect(()=>{
        fetch('http://localhost:7777/posts')
            .then(response=> response.json())
            .then(json=>setState(json))
    }, [])

    return (
        <ul>
            {state.map((post,i)=><li key={i}>{post.content}</li>)}
        </ul>
    )
}