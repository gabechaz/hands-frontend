import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



function QuestionFinder ({API}) {



    const [question, setQuestion] = useState("")

    const id = useParams()

    useEffect(() => {
        fetch(`${API}/questions/${id}`)
        .then(res => res.json())
        .then(questionObj => setQuestion(questionObj))
    }
    ,[id]
    )


    return (
        <div className ='outer-question-finder'>
            <h1></h1>
        </div>
    )
}

export default QuestionFinder