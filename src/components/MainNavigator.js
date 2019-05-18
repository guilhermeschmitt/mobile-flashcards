import React from 'react';
import { StackNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import DeckView from '../views/DeckView';
import NewCard from '../views/NewCard';
import QuizView from '../views/QuizView';

const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#800080",
      },
    }),
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#800080",
      },
    }),
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#800080",
      },
    }),
  },
}));

export default MainNavigator;