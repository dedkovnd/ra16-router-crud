import React, {useState} from "react";
import {Link} from "react-router-dom";

export function NewPost() {
    const [form, setForm] = useState({
        id:0,
        content: ""
    })

    const changeHandler = evt => {
        evt.persist()
        setForm(prev=>{
            return {
                ...prev,
               content: evt.target.value
            }
        })
    }

    const buttonHandler = evt => {
        evt.preventDefault()
        setForm(prev=>{
            return {
                ...prev,
                content: ""
            }
        })
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }


    return (
        <form onSubmit={buttonHandler}>
            <label htmlFor="post">Post</label>
            <input id="post" name="post" type="text" value={form.content} onChange={changeHandler}></input>
            <button type="submit"><Link to="/" style={{"text-decoration": "none"}}>Опубликовать</Link></button>
            <Link to="/">&times;</Link>
        </form>
    )
}