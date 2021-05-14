// File Imports
import '../css-files/Signup.css'
import {useState} from 'react'

function Signup () {

    // State Variables
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")

    // State Variable Handlers

    function handleUsername (e) {
        setUserName(e)
    }

    function handlePassword (e) {
        setPassword(e)
    }

    function handleAge(e) {
        setAge(e)
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
            <form>
                <input value={userName} />
                <br />
                <input value ={password} />
                <br />
                <input value ={age} type='number' />
            </form>
        </div>
    </div>
        
    )
}

export default Signup