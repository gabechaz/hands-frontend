import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'




function Profile ({currentUser, API}) {

    //State Variable to specify user object in question
    const [user,setUser] = useState({
        username:'Loading',
        age: 'Loading'
        }
    )


    // Getting user ID from params to specify argument for fetch request
    const {id} = useParams()

    //User Fetch Request
    useEffect(
        () => {
            fetch(`${API}/users/${id}`)
            .then(res => res.json())
            .then(user => setUser(user))
        }, [id]
    )


    return (

    <div className="outer-profile-div">
        <div className="profile-card">
            <h3 className='profile-username'>{user.username}</h3>
            <p>Age:{user.age}</p>
        </div>
    </div>
    )
}

export default Profile