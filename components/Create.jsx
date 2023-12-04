import { useState } from "react"

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('samuel');

  const handleSubmit = (e)=>{
    e.preventDefault();
    const blog = {title, body, author};
    
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log("new blog added")
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Blog body</label>
        <textarea  required value={body} onChange={(e)=>setBody(e.target.value)}/>
        <label>Blog author</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
          <option value="samuel">samuel</option>
          <option value="takudzwa">takudzwa</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>

  )
}
