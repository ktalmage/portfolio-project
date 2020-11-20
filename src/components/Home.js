import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
const Home = () => {
    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>Click if you are a fan of this site: {count} </h1>
            <Button onClick={() => setCount(count + 1)}>
            Click here!
        </Button>
            <h1>Hi my name is Kyle Talmage- Welcome to my portfolio website.</h1> 
            <p>I was previously a tax accountant working in the hedge fund world but realized<p/>
            <p>I had a passion for technology. After attending the Flatiron School I have been able to</p> 
            <p>bring things full circle. Now I want to focus on applying technology</p>
            to accounting and finance-based problems.</p> 
        <h2>Here are some of my projects: </h2>
        <li><a href='https://github.com/ktalmage/weather'>Local Weather</a></li>
        <li><a href='https://github.com/ktalmage/review-house'>Review House</a></li>
        <li><a href='https://github.com/ktalmage/pdf-helper'>PDF Helper</a></li>
        <li><a href='https://github.com/ktalmage/favorite-cities-react'>My Favorite Cities - React</a></li>
        </div>
    )
}

export default Home;
