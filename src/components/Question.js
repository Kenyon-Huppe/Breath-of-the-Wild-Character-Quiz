import Questions from './Questions'

// individual question component
const Question = ({ question }) => {

    if (question.choice.choice_3 === '') {
        return (
            <div className='question-wrap'>
                <input type="radio" />
                <input type="radio" />
            </div>
        )
    } else if (question.choice.choice_4 === '') {
        <div className='question-wrap'>

            <input type="radio" />
            <input type="radio" />
            <input type="radio" />

        </div>
    } else {
        <div className='question-wrap'>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
        </div>
    }

    // return (
    //     <div className='question-wrap'>

    //         <input type="radio" />
    //         <input type="radio" />
    //         <input type="radio" />

    //     </div>
    // )
}

export default Question
