import {useState} from 'react'


//State Variable Declarations for Form Inputs
const [question, setQuestion] = useState("")
const [answer1, setAnswer1] = useState("")
const [answer2, setAnswer2] = useState("")

// State Variable Handler Functions

function handleQuestion (e) {
    setQuestion(e.target.value)
}

function handleAnswer1 (e) {
    setAnswer1(e.target.value)
}

function handleAnswer2(e) {
    setAnswer2(e.target.value)
}

function AddQuestion () {
    return (
        <div className='add-question-outer-div'>
            <h1>Enter Question Info Here</h1>
            <br />

                <h4>Enter Question Here</h4>
                <br />
                    <input value={question} onChange={handleQuestion} placeholder='Question' />
                <br />

                <h4>Enter First Option Here</h4>
                <br />
                    <input value={answer1} onChange={handleAnswer1} placeholder='Option One' />
                <br />

                <h4>Enter Second Option Here</h4>
                <br />
                    <input value={answer2} onChange={handleAnswer2} placeholder='Option Two' />
            

        </div>
    )
}

export default AddQuestion