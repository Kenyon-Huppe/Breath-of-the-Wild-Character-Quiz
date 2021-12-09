import Questions from "./Questions";
import { Link } from "react-router-dom";


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
                <input type="submit" value='Submit' className='btn btn-submit' />
            </Link>
        </form>
    )
}

export default FormBody
