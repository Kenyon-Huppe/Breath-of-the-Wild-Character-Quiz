import Questions from "./Questions";



const FormBody = ({ onSubmit }) => {
    // where all the questions go
    const submitHandler = (e) => {
        e.preventDefault();

        // ! if question is not answered, send alert
        // todo required in each question field

    }


    return (
        <form className='question-form' onSubmit={submitHandler}>
            <Questions></Questions>
            <input type="submit" value='Submit' className='btn btn-submit' />
        </form>
    )
}

export default FormBody
