import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
    

}

export const Navigation = () => (
    
    <div className='navbar' style={{backgroundColor:'lightseagreen'}}>
        <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'darkgreen'
            }}
        >
        Home</NavLink>
       
        <NavLink
            to="/projectone"
            exact
            style={link}
            activeStyle={{
                background: 'darkgreen'
            }}
        >
        Project One</NavLink>
        <NavLink
            to="/projecttwo"
            exact
            style={link}
            activeStyle={{
                background: 'darkgreen'
            }}
        >
        Project Two</NavLink>
        <NavLink
            to="/projectthree"
            exact
            style={link}
            activeStyle={{
                background: 'darkgreen'
            }}
        >
        Project Three</NavLink>
        <NavLink
            to="/projectfour"
            exact
            style={link}
            activeStyle={{
                background: 'darkgreen'
            }}
        >
        Project Four</NavLink>
       

    </div>
)
    
    


export default Navigation
