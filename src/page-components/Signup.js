// File Imports
import '../css-files/Signup.css'
import {useState} from 'react'

function Signup () {

    //State Variables
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")


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