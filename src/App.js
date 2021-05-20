
//File Imports

import './css-files/App.css';
import {useEffect, useState} from 'react' 
import {Switch, Route} from 'react-router-dom'
import Signup from './page-components/Signup.js'
import Profile from './page-components/Profile.js'




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

  //State Variables
   const [currentUser, setCurrentUser] = useState({username:'Gabe', age: 30})





  return (
    <Switch>
      <div id='App'>

        <Route path='/users/:id'>
          <Profile currentUser={currentUser} API={API}  />
        </Route>

      <Route  path="/signup" exact>
        <Signup API={API} />
      </Route>

      </div>

    </Switch>
  );
}

export default App;
