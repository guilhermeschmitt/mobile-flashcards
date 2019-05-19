import { createAppContainer, createStackNavigator } from 'react-navigation';
import TabNav from './TabNav';
import DeckDetails from '../views/DeckDetails';
import CreateCard from '../views/CreateCard';
import GameQuiz from '../views/GameQuiz';

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
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#800080",
      },
    },
  },
  CreateCard: {
    screen: CreateCard,
    navigationOptions: {
      title: 'Add card',
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#800080",
      },
    },
  },
  GameQuiz: {
    screen: GameQuiz,
    navigationOptions: {
      title: 'Game quiz',
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#800080",
      },
    },
  },
}));

export default MainNavigator;