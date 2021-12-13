import Questions from "./Questions";
import classes from './css/question.module.css'


// ? send this to app.js
const FormBody = ({ questionAnswer, questionChange, submitHandler }) => {
    return (
        <form className='question-form' onSubmit={submitHandler}>
            <Questions questionChange={questionChange}></Questions>
            {/* <Link to={answersFilled()}> */}
            <input type="submit" value='Submit' className={classes.submitBtn} />
            {/* </Link> */}
        </form>
    )
}

export default FormBody
