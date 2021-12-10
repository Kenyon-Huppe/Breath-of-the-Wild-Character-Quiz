import Questions from "./Questions";
import { Link } from "react-router-dom";
import classes from './css/question.module.css'


// ? send this to app.js
const FormBody = ({ questionChange, submitHandler }) => {
    // where all the questions go
    // const submitHandler = (e) => {
    //     e.preventDefault();


    //     console.log(e.target.value)
    //     // ! if question is not answered, send alert
    //     // todo required in each question field

    // }


    return (
        <form className='question-form' onSubmit={submitHandler}>
            <Questions questionChange={questionChange}></Questions>
            <Link to='/display-page'>
                <input type="submit" value='Submit' className={classes.submitBtn} />
            </Link>
        </form>
    )
}

export default FormBody
