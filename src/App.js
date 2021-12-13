import './App.css';
import Header from './components/Header'
import FormBody from './components/FormBody'
import { useState } from 'react';
import DisplayPage from './components/secondPage/DisplayPage';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  // allows for app to change user's search url
  let navigate = useNavigate();

  // stores answers to questions
  const [questionAnswer, setQuestionAnswer] = useState([
    {
      id: '0',
      givenAnswer: ''
    },
    {
      id: '1',
      givenAnswer: ''
    },
    {
      id: '2',
      givenAnswer: ''
    },
    {
      id: '3',
      givenAnswer: ''
    },
    {
      id: '4',
      givenAnswer: ''
    },
    {
      id: '5',
      givenAnswer: ''
    },
  ])

  // first digit is question id, second is question answer (1-4) console.log(questionAnswer.id + ' id')
  const questionChangeHandler = (answer) => {
    // grab first digit & second digit separately
    const questionID = answer.substring(0, 1);
    const questionSelected = answer.substring(1);
    setQuestionAnswer(questionAnswer.map((element) => element.id === questionID ? { ...element, givenAnswer: questionSelected } : element))
    // console.log(questionAnswer.id + ' id')
  }

  // stores collected data
  const submitHandler = (e) => {
    e.preventDefault();
    // leads user to next page for results
    navigate('/display-page');
  }

  // sets it up to specific page
  const homePage = <div><Header></Header>
    <FormBody questionAnswer={questionAnswer} submitHandler={submitHandler} questionChange={questionChangeHandler}></FormBody></div>;

  return (
    <div className='container'>
      <Routes>

        {/* home */}
        <Route path='/' element={homePage} exact>
        </Route>
        {/* display */}
        <Route path='/display-page' element={<DisplayPage data={questionAnswer} />} exact>
        </Route>
      </Routes>

      {/* <Calculations questionAnswer={questionAnswer}></Calculations> */}
    </div >
  );
}

export default App;