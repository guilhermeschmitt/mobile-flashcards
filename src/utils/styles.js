import { StyleSheet } from 'react-native';
import { white, blue, blueSky, black, gray } from './colors';

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
  addDeckButton: {
    backgroundColor: blue,
    borderColor: blue,
    fontSize: 30,
    textAlign: 'center',
    color: white,
  },
  deckList: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export const deckComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blueSky,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: blueSky,
    padding: 30,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: black,
  },
  quantidade: {
    color: gray,
    fontWeight: 'bold',
  }
})
