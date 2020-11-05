import React, {useState,useEffect,useContext} from 'react'
import { useHistory } from "react-router-dom";
import {PostsContext} from "./PostContext";

function findId(posts, id) {
    return posts.find(o => o.id === id);
}

export function Post({match}) {
    const posts = useContext(PostsContext)
    const post = findId(posts, Number(match.params.id))

    //В указанном примере ниже, из репозитория по ссылке делается запрос на сервер по id поста,
    //но нам по запросу при загрузке в контекст уже приходят все посты, то есть запрос не нужен,
    //можно забирать post.content прямо из контекста. Правда и эту манипуляцию мне реализовать не удалось,
    //я просмотрел также пример кода с лекции, но таки не понял природу объекта match

    // const [post, setPost] = useState({});
    //
    // useEffect(() => {
    //     fetch(`/posts/${match.params.id}`).then(response => response.json())
    //         .then(data => {setPost(data);
    //         });
    // }, [match.params.id]);

    return (
        <div>{post.content}</div>
    )
}