import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'red',
    textDecoration: 'none',
    color: 'hot-green',
    

}

export const Navigation = () => (
    
    <div className='navbar' style={{backgroundColor:'lightseagreen'}}>
        <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'lightblue'
            }}
        >
        Home</NavLink>
       
        <NavLink
            to="/projectone"
            exact
            style={link}
            activeStyle={{
                background: 'lightblue'
            }}
        >
        Project One</NavLink>
        <NavLink
            to="/projecttwo"
            exact
            style={link}
            activeStyle={{
                background: 'lightblue'
            }}
        >
        Project Two</NavLink>
        <NavLink
            to="/projectthree"
            exact
            style={link}
            activeStyle={{
                background: 'lightblue'
            }}
        >
        Project Three</NavLink>
        <NavLink
            to="/projectfour"
            exact
            style={link}
            activeStyle={{
                background: 'lightblue'
            }}
        >
        Project Four</NavLink>
       

    </div>
)
    
    


export default Navigation
