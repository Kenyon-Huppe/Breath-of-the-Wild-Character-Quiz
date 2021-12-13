import Question from "./Question"

// holds all questions
const Questions = ({ questionChange }) => {
    const questionArray = [
        {
            id: '0',
            question: 'Many would describe my work ethic as being...',
            choices: {
                choice_1: 'Driven & focused; to stop at no ends to achieve the objective',
                choice_2: 'flexible yet disciplined; There is always something you can improve at',
                choice_3: 'Filled with a sense of duty when the going gets rough, but otherwise....',
                choice_4: 'Relaxed and carefree — takes life one day at a time.',
            },
        },
        {
            id: '1',
            question: 'I feel most relaxed when...',
            choices: {
                choice_1: 'Honing my craft. There is nothing more enjoyable then seeing your skills progress',
                choice_2: 'Reflecting & working through problems. Gaining a greater understanding makes me feel whole.',
                choice_3: 'Escaping into my imagination through books or movies. Why dwell on this reality when I can escape to another?',
                choice_4: 'Spending time with those that matter in my life. Connection with others is the purpose of life.',
            },
        },
        {
            id: '2',
            question: 'If I could be any animal I would be...',
            choices: {
                choice_1: 'An eagle. A symbol of power, soaring through the open skys, demonstrating to those below the mastery of flight!',
                choice_2: 'An owl. Carefully perched in a high tree. Planning & plotting the next strike against an unlucky field mouse.',
                choice_3: 'A salmon. Demonstrating fluidity & motion. gliding through the water with effortless grace.',
                choice_4: 'A rock.',
            },
        },
        {
            id: '3',
            question: 'I express my affection for others by...',
            choices: {
                choice_1: 'Helping them out with various tasks or things that need to be done.',
                choice_2: 'Talking to each other & generally checking up on how they are doing.',
                choice_3: 'Exchanging gifts & various items that I spent time making',
                choice_4: 'Spending time with them & simply being in their presence.',
            },
        },
        {
            id: '4',
            question: 'Many would describe me as...',
            choices: {
                choice_1: 'Quiet but extremely confident in my abilities.',
                choice_2: 'naturally curious with a hint of stubborness.',
                choice_3: 'Friendly, yet reserved. making sure to check in with those close to me.',
                choice_4: 'Bubbly & outgoing, making sure everyone is doing alright.',
            },
        },

        {
            id: '5',
            question: 'If I was attacking an enemy I would...',
            choices: {
                choice_1: 'Blind them, then attack when they\'re disoriented.',
                choice_2: 'An equal amount of offense & defense.',
                choice_3: 'Through attrition. slowly wear them down until they can\'t fight anymore.',
                choice_4: 'Overwhelm them with a direct attack.',
            },
        },
    ]
    return (
        <div className='questions-wrap'>
            {questionArray.map((questionElement) => (
                <Question key={questionElement.id} questionElement={questionElement} questionChange={questionChange}></Question>

            ))}
        </div>
    )
}

export default Questions
