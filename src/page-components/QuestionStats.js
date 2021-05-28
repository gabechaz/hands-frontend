import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'



function QuestionStats ({API}) {

    
    //Question Info State Variables
    const [questionObj, setQuestionObj] = useState({
        question: "Loading",
        answer1: "Loading",
        answer2: "Loading",
        user_id: 1
    })
    
    
    // Getting the question id from the URL path to make the fetch request for the
    // question in question
    const {id} = useParams()
    console.log(id)

    //Fetch Request for question

    useEffect(() => {
        fetch(`${API}/questions/${id}`)
        .then(res => res.json())
        .then(questionObj => setQuestionObj(questionObj))
    }, [API]
    )


    return (
        <div className="outer-question-stats-div">
            <div className="question-stats-card">
            <h1>{questionObj.question}</h1>
            <br />
            <h3>{questionObj.answer1}</h3>
            <br />
            <h3>{questionObj.answer2}</h3>
            </div>

        </div>
    )
}

export default QuestionStats