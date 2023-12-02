import { useEffect, useState } from "react";
import BlogList from "./BlogList";

export default function Home() {

    const [blogs, setBlogs] = useState([
        {title: "My Name Is", body: 'Samuel is cool', author: 'Samuel', id: 1},
        {title: "Her Name Is", body: 'Tanatswa is cool', author: 'Tanatswa', id: 2},
        {title: "His Name Is", body: 'Tafadzwa is cool', author: 'Tafadzwa', id: 3}
    ])
    const [name, setName] = useState('Samuel');

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('Name: '+name)
    }, [name])
    
  return (
    <div className="home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        <button onClick={()=>setName('Tanatswa')}>change name</button>
        <p>{name}</p>
    </div>
  )
}
