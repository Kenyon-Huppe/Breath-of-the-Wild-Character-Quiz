import Bio from "./Bio";

const Calculations = ({ data }) => {

    /*
    calculate given character
        0-9: Revali
        10-19: Link
        20-29: Zelda
        30-39: Mipha
        40-49: Urbosa
        50-60: Duruk

        - each question worth 10pts
        - 6 questions
        - pt value of answers: 0, 4, 7, 10
        - 10 pt zones for each character up to 60 pts
    */
    /**
     * for each through data adding 'givenAnswer number to 'totalPoints'
     */
    const evaluatePoints = () => {
        let totalPoints = 0;
        data.forEach(element => {
            switch (element.givenAnswer) {
                case '1':
                    totalPoints += 0;
                    break;
                case '2':
                    totalPoints += 4;
                    break;
                case '3':
                    totalPoints += 7;
                    break;
                case '4':
                    totalPoints += 10;
                    break;
                default:
                    break;
            }
        });
        return totalPoints;
    }

    const evaluateCharacter = () => {
        const totalPoints = evaluatePoints();
        if (totalPoints <= 10) {
            return 'revali';
        } else if (totalPoints >= 11 && totalPoints <= 20) {
            return 'link';
        } else if (totalPoints >= 21 && totalPoints <= 30) {
            return 'zelda';
        } else if (totalPoints >= 31 && totalPoints <= 40) {
            return 'mipha';
        } else if (totalPoints >= 41 && totalPoints <= 50) {
            return 'urbosa';
        } else {
            return 'duruk';
        }
    }
    // todo passes in given character name
    return (
        <div>
            <Bio characterName={evaluateCharacter()} />
            {/* todo img comp. & desc comp. */}
            {/* {console.log(questionAnswer + ' calc')} */}
            {/* {console.log(JSON.stringify(data) + ' calculations')} */}
        </div>
    )
}

export default Calculations
