import React from 'react';
import { View } from 'react-native';
import TabNav from './src/components/TabNav';
import DeckList from './src/views/DeckList';
import DeckView from './src/views/DeckView';
import QuizView from './src/views/QuizView';
import NewDeck from './src/views/NewDeck';
import NewCard from './src/views/NewCard';

export default class App extends React.Component {
  render() {
    return (
      <QuizView />
    );
  }
}