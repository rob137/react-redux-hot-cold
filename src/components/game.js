import React from 'react';
import {connect} from 'react-redux';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export class Game extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
    this.props.dispatch(makeGuess(guess));
  }

  generateAuralUpdate() {
    this.props.dispatch(generateAuralUpdate());
  }
  
  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

Game.defaultProps = {
  guesses: ["1"],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feeback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Game);