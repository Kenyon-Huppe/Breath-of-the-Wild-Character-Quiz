import './App.css';
import Header from './components/Header'
import FormBody from './components/FormBody'

function App() {


  // todo store state here (answers from questions)

  // stores collected data
  const dataStore = () => {

  }

  return (
    <div className='container'>
      <Header></Header>
      <FormBody onSubmit={dataStore}></FormBody>
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
