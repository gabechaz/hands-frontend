// File Imports
import '../css-files/Signup.css'
import {useState} from 'react'

function Signup () {

    // State Variables
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")

    // State Variable Handlers

    function handleUsername (e) {
        setUsername(e.targetvalue)

    }

    function handlePassword (e) {
        setPassword(e.target.value)
    }

    function handleAge(e) {
        setAge(e.target.value)
        console.log(age)
    }

    //New Signup Object

    const newSignup = {
        username,
        password,
        age
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
                <button className='submit-button'>Submit</button>
            </form>
        </div>
    </div>
        
    )
}

export default Signup