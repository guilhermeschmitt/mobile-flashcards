import React from 'react';
import { View, Text } from 'react-native';
import TextButton from './TextButton';
import { gameScoreStyle } from '../utils/styles';

const GameScore = ({ correctQuestions, restartQuiz, navigation }) => (
  <View style={gameScoreStyle.container}>
    <View style={gameScoreStyle.info}>
      <Text style={gameScoreStyle.title}>
        You finished the Quiz!
      </Text>
      <Text style={gameScoreStyle.score}>
        {correctQuestions}
      </Text>
      <Text style={gameScoreStyle.subtitle}>
        Correct questions!
      </Text>
    </View>

    <View style={gameScoreStyle.buttons}>
      <TextButton
        onPress={restartQuiz}
        style={gameScoreStyle.restartQuiz}
      >
        Restart Quiz
      </TextButton>
      <TextButton
        onPress={() => navigation.goBack()}
        style={gameScoreStyle.backToDeck}
      >
        Back to Deck
      </TextButton>
    </View>
  </View>
);

export default GameScore;