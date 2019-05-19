import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';

const GamePanel = ({ questionCounter, cards, showingAnswer, switchPanel, clickCorrect, clickIncorrect }) => (
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
        onPress={switchPanel}
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
        onPress={clickCorrect}
        disabled={showingAnswer}
      >
        Correct
    </TextButton>
      <TextButton
        style={styles.incorrectButton}
        onPress={clickIncorrect}
        disabled={showingAnswer}
      >
        Incorrect
    </TextButton>
    </View>

  </View>
)

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

export default GamePanel;