import React from 'react'
import './Quiz.css'

function Quiz() {
    return (
        <div className="quiz__container">

        <div className="quiz__title">
            <h1>Quiz</h1>
        </div>

        <div className="quiz__content">
            <div>question</div>
            <div>options</div>
            <div>next question</div>
        </div>
        </div>
    )
}

export default Quiz
