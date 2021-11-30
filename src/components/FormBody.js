import Questions from "./Questions";
import { useRef } from "react";

// ? send this to app.js
const FormBody = ({ questionChange }) => {
    // where all the questions go
    const submitHandler = (e) => {
        e.preventDefault();


        console.log(e.target.value)
        // ! if question is not answered, send alert
        // todo required in each question field

    }


    return (
        <form className='question-form' onSubmit={submitHandler}>
            <Questions questionChange={questionChange}></Questions>
            <input type="submit" value='Submit' className='btn btn-submit' />
        </form>
    )
}

export default FormBody
