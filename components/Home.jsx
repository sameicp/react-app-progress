import { useState } from "react";

export default function Home() {

    const [name, setName] = useState('Tanatswa');
    const [age, setAge] = useState(15);
    const handleClick = ()=>{
        setName('Samuel');
        setAge(23);
    }
    
  return (
    <div className="home">
        <h1>Homepage</h1>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}
