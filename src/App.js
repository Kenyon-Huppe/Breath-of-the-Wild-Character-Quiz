import './App.css';
import Header from './components/Header'
import FormBody from './components/FormBody'
import Calculations from './components/secondPage/Calculations'
import { useState } from 'react';
import DisplayPage from './components/secondPage/DisplayPage';
import { Routes, Route } from 'react-router-dom'


function App() {

  // todo header.module.css for instruction
  // todo use css to decrease img size, capitalize name, layout
  // todo look into fonts
  // todo responsive 
  // todo change project name


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
    // {
    //   id: '6',
    //   givenAnswer: ''
    // },
    // {
    //   id: '7',
    //   givenAnswer: ''
    // },
  ])

  // first digit is question id, second is question answer (1-4) console.log(questionAnswer.id + ' id')
  const questionChangeHandler = (answer) => {
    // grab first digit & second digit separately
    const questionID = answer.substring(0, 1);
    const questionSelected = answer.substring(1);
    setQuestionAnswer(questionAnswer.map((element) => element.id === questionID ? { ...element, givenAnswer: questionSelected } : element))
    // console.log(questionAnswer.id + ' id')
  }

  // todo handle submit



  // stores collected data
  const submitHandler = (e) => {
    e.preventDefault();




    // ! WORKS: saves all given answer choices for each question in state after submit


    // todo have calc component
    // todo have state with id for each question & point values for each selection option
    // todo if question id === given id && question selection === selection, then add to running point total / given args for character

    // todo calculations
    // todo leads to next page 
  }

  // sets it up to specific page
  const homePage = <div><Header></Header>
    <FormBody submitHandler={submitHandler} questionChange={questionChangeHandler}></FormBody></div>;

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


/*

  todo formBody component
  todo questions component
  todo question componenet

  PLAN:

    - set up header with name & instructions
    - set up formBody componenet for entire quiz
      - set up questions component to hold questions & posible answer choices (using map to store)
        -set up question component for individual question
      - once submitting, use map function to grab all data & store to browser

    - calculate data
    -display given sw character


*/
