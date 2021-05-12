
//File Imports

import './css-files/App.css';
import {useEffect, useState} from 'react' 
import {Switch, Route} from 'react-router-dom'
import Signup from './page-components/Signup.js'




function App() {

  // const declarations
  const API = 'http://localhost:3000'

  //useState declarations

  
  useEffect(() => {
    fetch(`${API}/users`)
    .then(res => res.json())
    .then(users =>console.log(users) )
  }, [API]
  )





  return (
    <Switch>
      <div id='App'>

      <Route path="/signup" exact component={Signup} />

      </div>

    </Switch>
  );
}

export default App;
