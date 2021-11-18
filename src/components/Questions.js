import Question from "./Question"

// holds all questions
const Questions = () => {
    // points are rating for low = darkside, high = lightside
    const questionArray = [
        {
            id: '0',
            question: 'Those who know me well would describe me as...',
            choices: {
                choice_1: 'Caring and thoughtful — always looking out for the \'little guy\'. ',
                choice_2: 'Ambitious and passionate — constantly on the grind to become \'the best\'. ',
                choice_3: 'Relaxed and carefree — takes life one day at a time.',
                choice_4: 'Inquisitive and knowledgeable — loves learning for the sake of aquiring knowledge. ',
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
            question: 'If I was tasked with destroying an enemy conpound, I would...',
            choices: {
                choice_1: 'Charge in guns blazing — shellshock them by going in hard and fast.',
                choice_2: 'Patiently wait and strategize — moving in too fast without a plan is a fool\'s errand.',
                choice_3: 'Charge in or strategize? Why not both? — plan out a plan of attack, then immediately throw out the plan when things start to fall apart.',
                choice_4: '',
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
            question: 'If I could have any weapon I would choose...',
            choices: {
                choice_1: 'Lightsaber — blasters are so uncivilized',
                choice_2: 'Blaster — nothing beats a good blaster',
                choice_3: 'Forget lightsabers or blasters, all I need are my two fists!',
                choice_4: '',
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
            question: 'Which creed most aligns with your ideals?',
            choices: {
                choice_1: 'There is not emotion, there is peace. There is not ignorance, there is knowledge. There is no passion, there is serenity. There is no chaos, there is harmony. There is no death, there is the Force.',
                choice_2: 'Peace is a lie, there is only passion, through passion, I gain strength. Through strength, I gain power. Through power, I gain victory. Through victory, my chains are broken. The Force shall set me free.',
                choice_3: 'There is no dark side, nor a light side. There is only  the Force. I will do what I must to keep the balance. There is no good without evil, but evil must not be allowed to flourish. There is passion, yet peace. There is serenity, yet emotion. There is chaos, yet order.',
                choice_4: '',
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
            question: 'Which force power calls to you the most?',
            choices: {
                choice_1: 'Force Lightning — shoot powerfull lightning from your fingertips.',
                choice_2: 'Shatterpoint — be able to see an enemies weakspots.',
                choice_3: 'Mental Probe — read the thoughts & memories of others.',
                choice_4: 'Force Visions — see life-like vision of the future or posiblities of what is to come.',
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
            question: 'How are you most likely to respond when someone bests you?',
            choices: {
                choice_1: 'They were simply better than me. Good for them. I will train to become stronger regardless if I ever surpass them in skill',
                choice_2: 'I will not let this great discrace of a loss continue any further. I will relentlessly train untill I dominate them in strength and ability.',
                choice_3: '',
                choice_4: '',
            },
            points: { // how many points are received for each question
                c1: 4,
                c2: 1,
                c3: 0,
                c4: 0,
            }
        },
        {
            id: '6',
            question: 'Out of the choices below, which planet would you live on?',
            choices: {
                choice_1: 'Naboo — I like to lie out on the sand and let the sun dry me and try to guess the names of the birds singing.',
                choice_2: 'Coruscant — I love the big city. I want to be where everythings happening and going down.',
                choice_3: 'Kashyyyk — I wish to become one with nature. To learn ways of the Wookies and earn their respect.',
                choice_4: 'Hoth — Throw me to the ice and stone! I wish to survive the elements alone and become stronger.',
            },
            points: { // how many points are received for each question
                c1: 0,
                c2: 0,
                c3: 0,
                c4: 0,
            } // todo tag locations
        },
        {
            id: '7',
            question: 'What are your thoughts on sand?',
            choices: {
                choice_1: 'I don\'t like sand. It\'s coarse and rough and irritating — and it gets everywhere.',
                choice_2: 'I like sand. It\'s fine and smooth and calming — and it easy to clean.',
                choice_3: 'Sand is a valuable resource by which we can make various tools to profit with.',
                choice_4: ''
            },
            points: { // how many points are received for each question
                c1: 1,
                c2: 3,
                c3: 2,
                c4: 0,
            }
        },
    ]

    // todo make sure to have checker in Question that checks if choice_ is empty. If so, don't log
    return (
        <div className='questions-wrap'>
            {questionArray.map((questionElement) => (
                <Question key={questionElement.id} question={questionElement}></Question>
            ))}
            {/* todo put multiple questions here */}
        </div>
    )
}

export default Questions
