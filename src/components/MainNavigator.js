import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import DeckDetails from '../views/DeckDetails';
import CreateCard from '../views/CreateCard';
import GameQuiz from '../views/GameQuiz';
import { blue, white } from '../utils/colors';

const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    },
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      title: 'Deck details',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      title: 'Add card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  GameQuiz: {
    screen: GameQuiz,
    navigationOptions: {
      title: 'Game quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
}));

export default MainNavigator;