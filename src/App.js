
//File Imports

import './css-files/App.css';
import {useEffect, useState} from 'react' 
import {Switch, Route} from 'react-router-dom'
import Signup from './page-components/Signup.js'
import Profile from './page-components/Profile.js'
import AddQuestion from './page-components/AddQuestion';
import QuestionStats from './page-components/QuestionStats'
import Navbar from './page-components/Navbar'




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
   const [currentUser, setCurrentUser] = useState({username:'Gabe', age: 30, id: 1})





  return (

    <div id='App'>

      <Navbar currentUser={currentUser} />
      <br />

    <Switch>
   

        <Route path='/users/:id'>
          <Profile currentUser={currentUser} API={API}  />
        </Route>

      <Route  path="/signup" exact>
        <Signup API={API} />
      </Route>

      <Route path="/question-stats/:id">
        <QuestionStats API={API} />
      </Route>

      <Route path ='/add-question'>
        <AddQuestion API={API} currentUser={currentUser} />
      </Route>

   

    </Switch>

    </div>
  );
}

export default App;
