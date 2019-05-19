import React from 'react';
import { View, Text } from 'react-native';
import TextButton from './TextButton';

const GameScore = ({ correctQuestions, restartQuiz, navigation }) => (
  <View>
    <View>
      <Text>
        VOCÊ TERMINOU O QUIZ!
      </Text>
      <Text>
        {correctQuestions}
      </Text>
      <Text>
        Questões corretas!
      </Text>
    </View>

    <View>

      <TextButton
        onPress={restartQuiz}
      >
        Restart Quiz
          </TextButton>
      <TextButton
        onPress={() => navigation.goBack()}
      >
        Back to Deck
      </TextButton>

    </View>
  </View>
);

export default GameScore;