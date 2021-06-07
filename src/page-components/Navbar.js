import { Link } from 'react-router-dom'



function Navbar () {
    return (
       
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
            </Link> 
              <Link to = '/question-finder'>
            <span>
                Answer Quesitions 
            </span>
            </Link>
          
        </nav>
        
    )
}

export default Navbar