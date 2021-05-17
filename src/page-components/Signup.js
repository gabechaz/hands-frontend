// File Imports
import '../css-files/Signup.css'
import {useState} from 'react'

function Signup ({API}) {

    console.log(API)

    //Fetch Requests
    function signup(e) {
        e.preventDefault()
           fetch(`${API}/users`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          "Accept" : "application/json"},
          body: JSON.stringify(newSignup)
            }
        )
        .then(res => res.json())
        .then(newUser => console.log(newUser))
    }
 

    // State Variables
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")

    // State Variable Handlers

    function handleUsername (e) {
        setUsername(e.target.value)

    }

    function handlePassword (e) {
        setPassword(e.target.value)
    }

    function handleAge(e) {
        setAge(e.target.value)

    }

    //New Signup Object

    const newSignup = {
        username: username,
        password: password,
        age: age
    }

    // New Signup Post Fetch Action

    //PUT THE FETCH IN HERE YA BIG DUMMY


    return (
    <div className='outer-signup-div'>
        <div className='signup-card'>
            <h1 className='signup-header'> Sign Up</h1>
            <form className='signup-form'>
                <input value={username} type='text' onChange={handleUsername} />
                <br />
                <input value ={password} type='text' onChange={handlePassword} />
                <br />
                <input value ={age} type='number' onChange={handleAge} />
                <br />
                <button onClick={signup} className='submit-button'>Submit</button>
            </form>
        </div>
    </div>
        
    )
}

export default Signup