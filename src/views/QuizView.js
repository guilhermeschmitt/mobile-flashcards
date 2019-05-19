import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import TextButton from '../components/TextButton';

class QuizView extends React.Component {

  state = {
    showingAnswer: false,
    questionCounter: 0,
    correctQuestions: 0
  }

  onCorrect = () =>
    this.setState(({ questionCounter, correctQuestions }) => ({
      questionCounter: questionCounter + 1,
      correctQuestions: correctQuestions + 1
    }));

  render() {

    const { cards } = this.props.deck;
    const { showingAnswer, questionCounter, correctQuestions } = this.state;


    if (questionCounter === cards.length)
      return (
        <View>
          <Text>
            VOCÊ TERMINOU O QUIZ
          </Text>
        </View>
      );

    return (
      <View style={styles.container}>
        <Text style={styles.count}>
          {questionCounter + 1}/{cards.length}
        </Text>

        <View style={styles.info}>
          <Text style={styles.question}>
            {showingAnswer
              ? cards[questionCounter].answer
              : cards[questionCounter].question
            }
          </Text>
          <TouchableOpacity
            onPress={() => this.setState({ showingAnswer: !showingAnswer })}
          >
            <Text style={styles.option}>
              {showingAnswer
                ? 'Show question'
                : 'Show answer'
              }
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TextButton
            style={styles.correctButton}
            onPress={this.onCorrect}
            disabled={showingAnswer}
          >
            Correct
          </TextButton>
          <TextButton
            style={styles.incorrectButton}
            onPress={() => this.setState({ questionCounter: questionCounter + 1 })}
            disabled={showingAnswer}
          >
            Incorrect
          </TextButton>
        </View>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingRight: 5,
  },
  count: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  info: {
    alignItems: 'center',
  },
  question: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5
  },
  option: {
    color: 'red',
    fontWeight: 'bold'
  },
  correctButton: {
    backgroundColor: 'green',
    color: 'white',
    borderColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
    color: 'white',
    borderColor: 'red',
  }
});

mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params
  return {
    deck: state[deckId],
  }
}

export default connect(mapStateToProps)(QuizView);