// called in top-nav.js
export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME
});

// called in guess-form.js
export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

// called in top-nav.js
export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});