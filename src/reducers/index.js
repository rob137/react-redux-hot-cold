import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
  if (action.type === actions.RESTART_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.round(Math.random() * 100) + 1
    });
  } 
  else if (action.type === actions.MAKE_GUESS) {
    const guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
      return Object.assign({}, state, {
        guesses: state.guesses,
        feedback: 'Please enter a valid number',
        auralStatus: state.auralStatus,
        correctAnswer: Math.round(Math.random() * 100) + 1
      });
    }
    const difference = Math.abs(guess - state.correctAnswer);
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
    
    return Object.assign({}, state, {
      guesses: [...state.guesses, guess],
      feedback,
      auralStatus: state.auralStatus,
      correctAnswer: Math.round(Math.random() * 100) + 1
    })
  }
  else if (action.type === actions.GENERATE_AURAL_UPDATE) {
    const guesses = state.guesses,
    feedback = state.feedback,
    pluralize = guesses.length !== 1;
    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }
    return Object.assign({}, state, {
      guesses: state.guesses,
      feedback: state.feedback,
      auralStatus,
      correctAnswer: Math.round(Math.random() * 100) + 1
    })
  }
  return state;
}