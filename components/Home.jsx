import { useState } from "react";
import BlogList from "./BlogList";

export default function Home() {

    const [blogs, setBlogs] = useState([
        {title: "My Name Is", body: 'Samuel is cool', author: 'Tafadzwa', id: 1},
        {title: "Her Name Is", body: 'Tanatswa is cool', author: 'Tanatswa', id: 2},
        {title: "His Name Is", body: 'Tafadzwa is cool', author: 'Tafadzwa', id: 3}
    ])
    
  return (
    <div className="home">
        <BlogList blogs={blogs} title="All Blogs"/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'Tafadzwa')} title="Tafadzwa's Blogs"/>
    </div>
  )
}
