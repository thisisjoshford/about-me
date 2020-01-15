let correctNumber = 9
export default function compareNumbers(userGuess, correctNumber){
    if (userGuess === correctNumber) {
        return 0;
    } else if (userGuess > correctNumber) {
        return 1;
    } else if (userGuess < correctNumber) {
        return -1;
    }
}