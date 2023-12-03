import { useEffect, useState } from "react";
import BlogList from "./BlogList";

export default function Home() {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/blogs').then(res =>{
            if(!res.ok){
                throw new Error('could not fetch data for that resource');
            }
            return res.json();
        }).then((data) => {
            setBlogs(data);
            setIsLoading(false);
            setError(null);
        }).catch(err => {
            setError(err.message);
            setIsLoading(false)
        })
    }, [])
    
  return (
    <div className="home">
        {isLoading && <div>Loading...</div>}
        {error && <div>{ error }</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  )
}
