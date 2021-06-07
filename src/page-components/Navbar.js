import { Link } from 'react-router-dom'



function Navbar () {
    return (
        <div>
        <nav className='navbar'>
            <Link to = '/signup'>
            <span>
                Sign up  
            </span>
            </Link>
 
            <Link to = 'add-question'>
            <span>
                 Add Question
            </span>
            </Link>    <Link>
            <span>
                Test 
            </span>
            </Link>
          
        </nav>
        </div>
    )
}

export default Navbar