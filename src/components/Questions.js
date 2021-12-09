import Question from "./Question"

// holds all questions
const Questions = ({ questionChange }) => {
    // points are rating for low = darkside, high = lightside
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
            points: { // how many points are received for each question
                c1: 3,
                c2: 1,
                c3: 2,
                c4: 4,
            }
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
            points: { // how many points are received for each question
                c1: 1,
                c2: 3,
                c3: 2,
                c4: 0,
            }
        },
        {
            id: '2',
            question: 'If I could be any animal I would be...',
            choices: {
                choice_1: 'An eagle. A symbol of power, soaring through the open sky\s, demonstrating to those below the mastery of flight!',
                choice_2: 'An owl. Carefully perched in a high tree. Planning & plotting the next strike against an unlucky field mouse.',
                choice_3: 'A salmon. Demonstrating fluidity & motion. gliding through the water with effortless grace.',
                choice_4: 'A rock.',
            },
            points: { // how many points are received for each question
                c1: 0,
                c2: 0,
                c3: 0,
                c4: 0,
            }, // todo tag weapon type

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
            points: { // how many points are received for each question
                c1: 3,
                c2: 1,
                c3: 2,
                c4: 0,
            }
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
            points: { // how many points are received for each question
                c1: 1,
                c2: 3,
                c3: 2,
                c4: 4,
            } // todo tag abilities
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
            points: { // how many points are received for each question
                c1: 4,
                c2: 1,
                c3: 0,
                c4: 0,
            }
        },
        // {
        //     id: '6',
        //     question: 'Out of the choices below, which planet would you live on?',
        //     choices: {
        //         choice_1: 'Naboo — I like to lie out on the sand and let the sun dry me and try to guess the names of the birds singing.',
        //         choice_2: 'Coruscant — I love the big city. I want to be where everythings happening and going down.',
        //         choice_3: 'Kashyyyk — I wish to become one with nature. To learn ways of the Wookies and earn their respect.',
        //         choice_4: 'Hoth — Throw me to the ice and stone! I wish to survive the elements alone and become stronger.',
        //     },
        //     points: { // how many points are received for each question
        //         c1: 0,
        //         c2: 0,
        //         c3: 0,
        //         c4: 0,
        //     } // todo tag locations
        // },
        // {
        //     id: '7',
        //     question: 'What are your thoughts on sand?',
        //     choices: {
        //         choice_1: 'I don\'t like sand. It\'s coarse and rough and irritating — and it gets everywhere.',
        //         choice_2: 'I like sand. It\'s fine and smooth and calming — and it easy to clean.',
        //         choice_3: 'Sand is a valuable resource by which we can make various tools to profit with.',
        //         choice_4: ''
        //     },
        //     points: { // how many points are received for each question
        //         c1: 1,
        //         c2: 3,
        //         c3: 2,
        //         c4: 0,
        //     }
        // },
    ]

    // todo make sure to have checker in Question that checks if choice_ is empty. If so, don't log
    return (
        <div className='questions-wrap'>
            {questionArray.map((questionElement) => (
                <Question key={questionElement.id} questionElement={questionElement} questionChange={questionChange}></Question>

            ))}
        </div>
    )
}

export default Questions
