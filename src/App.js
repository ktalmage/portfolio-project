import Navigation from './components/Navigation'
import './App.css';
import {  Route } from 'react-router-dom'
import Home from './components/Home'
import ProjectOne from './components/ProjectOne'
import ProjectTwo from './components/ProjectTwo'
import ProjectThree from './components/ProjectThree'
import ProjectFour from './components/ProjectFour'
 
function App() {
  
  return (
    
    <div className="App">
      
      <Navigation/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projectone' component={ProjectOne}/>
          <Route exact path='/projecttwo' component={ProjectTwo}/>
          <Route exact path='/projectthree' component={ProjectThree}/>
          <Route exact path='/projectfour'  component={ProjectFour}/>
      <h1>Hi my name is Kyle Talmage- Welcome to my portfolio website.</h1> 
      <p>I was previously a tax accountant working in the hedge fund world but realized<p/>
        <p>I had a passion for technology. After attending the Flatiron School I have been able to</p> 
          bring things full circle. Now I want to focus on applying technology 
        to accounting and finance-based problems.</p> 
        <h2>Here are some of my projects: </h2>
      </div>

  );
  
}

export default App;
