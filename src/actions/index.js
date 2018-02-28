const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME
})

const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
})

const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
const generateAuralUpdate = () => {
  type: GENERATE_AURAL_UPDATE
}