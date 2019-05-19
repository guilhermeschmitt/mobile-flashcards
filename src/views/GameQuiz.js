import React from 'react';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/notification';
import GameScore from '../components/GameScore';
import GamePanel from '../components/GamePanel';

class GameQuiz extends React.Component {

  state = {
    showingAnswer: false,
    questionCounter: 0,
    correctQuestions: 0,
    showScore: false,
  }

  onCorrect = () => {
    const { correctQuestions } = this.state;
    this.setState({ correctQuestions: correctQuestions + 1 });
    this.checkIfIsTheLastQuestion();
  }

  checkIfIsTheLastQuestion = () => {
    let { questionCounter, showScore } = this.state;
    const { cards } = this.props.deck;

    questionCounter++;

    if (cards.length === questionCounter) {
      showScore = true;
      clearLocalNotification();
      setLocalNotification();
    }

    this.setState({ questionCounter, showScore });
  }

  restartQuiz = () => {
    const { navigation, deck } = this.props;

    this.setState({
      showingAnswer: false,
      questionCounter: 0,
      correctQuestions: 0,
      showScore: false,
    });

    navigation.navigate("GameQuiz", { deckId: deck.id })
  }

  render() {

    const { navigation, deck } = this.props;
    const { cards } = deck;
    const { showingAnswer, questionCounter, correctQuestions, showScore } = this.state;

    if (showScore)
      return (
        <GameScore
          correctQuestions={correctQuestions}
          restartQuiz={this.restartQuiz}
          navigation={navigation}
        />
      );

    return (
      <GamePanel
        questionCounter={questionCounter}
        cards={cards}
        showingAnswer={showingAnswer}
        switchPanel={() => this.setState({ showingAnswer: !showingAnswer })}
        clickCorrect={this.onCorrect}
        clickIncorrect={this.checkIfIsTheLastQuestion}
      />
    )
  }
};

mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params
  return {
    deck: state[deckId],
    navigation,
  }
}

export default connect(mapStateToProps)(GameQuiz);