import { StyleSheet } from 'react-native';
import { white } from './colors';

export const deckListStyle = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 25,
    fontStyle: 'italic',
  },
  emptyList: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  deckList: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})
