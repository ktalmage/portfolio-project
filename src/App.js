import Navigation from './components/Navigation'
import './App.css';
import {  Route } from 'react-router-dom'
import Home from './components/Home'
import ProjectOne from './components/ProjectOne'
import ProjectTwo from './components/ProjectTwo'
import ProjectThree from './components/ProjectThree'
import ProjectFour from './components/ProjectFour'
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  
  return (
    
    <div className="App">
      
      <Navigation/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/projectone' component={ProjectOne}/>
          <Route exact path='/projecttwo' component={ProjectTwo}/>
          <Route exact path='/projectthree' component={ProjectThree}/>
          <Route exact path='/projectfour'  component={ProjectFour}/>
      
      </div>

  );
  
}

export default App;
