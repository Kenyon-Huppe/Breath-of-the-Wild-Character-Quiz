import classes from './css/question.module.css'

// individual question component
const Question = ({ questionElement, questionChange }) => {

    return (
        <div className={classes.questionWrap} >
            <h2 className={classes.questionHeading}>{questionElement.question}</h2>
            <div className={`${classes.question} ${classes.question1}`}>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}1`} onChange={() => questionChange(`${questionElement.id}1`)} required /><span className={classes.questionText}>{questionElement.choices.choice_1}</span>
            </div>
            <div className={`${classes.question} ${classes.question2}`}>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}2`} onChange={() => questionChange(`${questionElement.id}2`)} required /><span className={classes.questionText}>{questionElement.choices.choice_2}</span>
            </div>
            <div className={`${classes.question} ${classes.question3}`}>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}3`} onChange={() => questionChange(`${questionElement.id}3`)} style={{ display: questionElement.choices.choice_3 === '' ? 'none' : 'inline-block' }} required /><span className={classes.questionText}>{questionElement.choices.choice_3}</span>
            </div>
            <div className={`${classes.question} ${classes.question4}`}>
                <input type="radio" name={questionElement.id} value={`${questionElement.id}4`} onChange={() => questionChange(`${questionElement.id}4`)} style={{ display: questionElement.choices.choice_4 === '' ? 'none' : 'inline-block' }} required /><span className={classes.questionText}>{questionElement.choices.choice_4}</span>
            </div>
        </div>
    )
}

export default Question
