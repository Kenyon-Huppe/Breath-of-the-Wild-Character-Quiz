import './App.css';
import Header from './components/Header'
import FormBody from './components/FormBody'
import { useState } from 'react';

function App() {


  // todo store state here (answers from questions)


  // stores answers to questions
  const [questionAnswer, setQuestionAnswer] = useState([
    {
      question1: ''
    },
    {
      question2: ''
    },
    {
      question3: ''
    },
    {
      question4: ''
    },
    {
      question5: ''
    },
    {
      question6: ''
    },
    {
      question7: ''
    },
    {
      question8: ''
    },
  ])

  // first digit is question id, second is question answer (1-4)
  const questionChangeHandler = (answer) => {
    console.log(answer); // ! works!!!
    // todo grab first digit & second digit separately
    // todo put in correct spot using first digit
    // todo use second digit to save as data in given spot

    setQuestionAnswer();
  }

  // todo handle submit

  // stores collected data
  const dataStore = () => {

  }

  return (
    <div className='container'>
      <Header></Header>
      <FormBody onSubmit={dataStore} questionChange={questionChangeHandler}></FormBody>
    </div>
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
