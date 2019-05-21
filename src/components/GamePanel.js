import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';
import { gamePanelStyle } from '../utils/styles';

const GamePanel = ({ questionCounter, cards, showingAnswer, switchPanel, clickCorrect, clickIncorrect }) => (
  <View style={gamePanelStyle.container}>

    <View style={gamePanelStyle.info}>
      <Text style={gamePanelStyle.question}>
        {showingAnswer
          ? cards[questionCounter].answer
          : cards[questionCounter].question
        }
      </Text>
      <TouchableOpacity
        onPress={switchPanel}
      >
        <Text style={gamePanelStyle.option}>
          {showingAnswer
            ? 'Show question'
            : 'Show answer'
          }
        </Text>
      </TouchableOpacity>
    </View>

    <Text style={gamePanelStyle.count}>
      {cards.length - (questionCounter + 1)} remaining
    </Text>

    <View style={gamePanelStyle.buttons}>
      <TextButton
        style={gamePanelStyle.correctButton}
        onPress={clickCorrect}
        disabled={showingAnswer}
      >
        Correct
    </TextButton>
      <TextButton
        style={gamePanelStyle.incorrectButton}
        onPress={clickIncorrect}
        disabled={showingAnswer}
      >
        Incorrect
    </TextButton>
    </View>

  </View>
);

export default GamePanel;