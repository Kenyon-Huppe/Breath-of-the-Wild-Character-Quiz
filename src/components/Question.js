import './Question.css'

// individual question component
const Question = ({ questionElement, questionChange }) => {

    return (
        <div className='question-wrap' required>
            <div className='question question-1'>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}1`} onChange={() => questionChange(`${questionElement.id}1`)} /><span className='question-text'>{questionElement.choices.choice_1}</span>
            </div>
            <div className='question question-2'>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}2`} onChange={() => questionChange(`${questionElement.id}2`)} /><span className='question-text'>{questionElement.choices.choice_2}</span>
            </div>
            <div className='question question-3'>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}3`} onChange={() => questionChange(`${questionElement.id}3`)} style={{ display: questionElement.choices.choice_3 === '' ? 'none' : 'inline-block' }} /><span className='question-text'>{questionElement.choices.choice_3}</span>
            </div>
            <div className='question question-4'>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}4`} onChange={() => questionChange(`${questionElement.id}4`)} style={{ display: questionElement.choices.choice_4 === '' ? 'none' : 'inline-block' }} /><span className='question-text'>{questionElement.choices.choice_4}</span>
            </div>
        </div>
    )
}

export default Question
